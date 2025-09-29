"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import DynamicFormField from "./DynamicFormField";
import { validateForm, formatFormDataForSubmission } from "../../lib/form-validation";
import { FormFieldType } from "../../types";
import { Loader2, CheckCircle, XCircle, Info, CalendarPlus, Ticket as TicketIcon } from "lucide-react";
import Image from "next/image";
import { getData, postData } from "../../utils/api";
import { initializeRazorpayPayment } from "../../lib/razorpay";
import Swal from 'sweetalert2';

// Helper to format date for ICS (YYYYMMDDTHHMMSSZ)
const formatICSDate = (date, time) => {
  let combinedDateTime;
  
  if (date && time) {
    const datePart = new Date(date);
    const timePart = new Date(time);
    combinedDateTime = new Date(
      datePart.getFullYear(),
      datePart.getMonth(),
      datePart.getDate(),
      timePart.getHours(),
      timePart.getMinutes(),
      timePart.getSeconds()
    );
  } else if (date) {
    combinedDateTime = new Date(date);
  } else {
    return new Date().toISOString().replace(/[-:]|\.\d{3}/g, "");
  }
  
  return combinedDateTime.toISOString().replace(/[-:]|\.\d{3}/g, "");
};

// Build image URL via CDN or API base
const getImageUrl = (imagePath) => {
  if (!imagePath) return "/images/Events/event2.svg";
  if (typeof imagePath !== 'string') return "/images/Events/event2.svg";
  // If it's a public asset path, return as-is
  if (imagePath.startsWith('/')) return imagePath;
  // If it's already a full URL, return as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL ;
  // Ensure single slash between base and path
  return `${cdnUrl.replace(/\/$/, '')}/${imagePath.replace(/^\//, '')}`;
};

// Coupon display helper
const getCouponDisplay = (ticket, couponApplied, currencySymbol) => {
  if (!couponApplied) return null;
  
  const basePrice = ticket.enableDiscount && ticket.discountValue != null 
    ? ticket.discountValue 
    : ticket.paymentAmount || 0;
  
  const discount = basePrice - couponApplied.finalPriceAfterCoupon;
  const percent = basePrice > 0 ? Math.round((discount / basePrice) * 100) : 0;
  
  if (percent === 100 || couponApplied.finalPriceAfterCoupon === 0) {
    return `Coupon ${couponApplied.code} applied (100% off)`;
  }
  
  if (discount > 0 && percent < 100) {
    return `Coupon ${couponApplied.code} applied (${currencySymbol}${discount.toFixed(2)} off, ${percent}%)`;
  }
  
  return `Coupon ${couponApplied.code} applied`;
};

const RegistrationForm = ({ 
  ticket, 
  event, 
  allFormFields, 
  currencySymbol, 
  defaultPaymentMethod,
  isEmbeddedView = false 
}) => {
  // State management
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [registrationData, setRegistrationData] = useState(null);
  
  // Pricing and Coupon State
  const [finalPrice, setFinalPrice] = useState(0);
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(null);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [couponError, setCouponError] = useState(null);
  const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);

  // Process form fields with defaults
  const processedFields = useMemo(() => {
    return allFormFields.map((field) => {
      const processedField = { ...field };
      
      if (processedField.type === FormFieldType.MULTI_SELECT && 
          processedField.apiType === "CSV" && 
          typeof processedField.selectApi === "string") {
        processedField.options = processedField.selectApi
          .split(",")
          .map((item) => ({ value: item.trim(), label: item.trim() }));
      }
      
      if (processedField.type === FormFieldType.EMAIL && !processedField.validation) {
        processedField.validation = "email";
      }
      
      if (["text", "textarea", "select"].includes(processedField.type) && 
          !processedField.placeholder?.length && 
          processedField.label) {
        processedField.placeholder = processedField.placeholder || processedField.label;
      }
      
      return processedField;
    });
  }, [allFormFields]);

  // Calculate final price
  const calculateAndSetFinalPrice = useCallback(() => {
    let basePrice = 0;
    
    if (ticket.enablePricing) {
      if (ticket.enableDiscount && ticket.discountValue != null) {
        basePrice = ticket.discountValue;
      } else {
        basePrice = ticket.paymentAmount || 0;
      }
    }
    
    if (couponApplied) {
      setFinalPrice(couponApplied.finalPriceAfterCoupon);
    } else {
      setFinalPrice(basePrice);
    }
  }, [ticket, couponApplied]);

  useEffect(() => {
    calculateAndSetFinalPrice();
  }, [calculateAndSetFinalPrice]);

  // Handle form field changes
  const handleFieldChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: null
      }));
    }
  };

  // Validate form
  const validateFormData = () => {
    const { isValid, errors: validationErrors } = validateForm(formData, processedFields);
    setErrors(validationErrors);
    return isValid;
  };

  // Handle coupon verification
  const handleCouponVerification = async () => {
    if (!couponCodeInput.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    setIsVerifyingCoupon(true);
    setCouponError(null);

    try {
      const response = await postData('/verify-coupon', {
        couponCode: couponCodeInput.trim(),
        ticketId: ticket._id,
        eventId: event._id
      });

      if (response.success) {
        setCouponApplied(response.data);
        setCouponError(null);
        setShowCouponForm(false);
        calculateAndSetFinalPrice();
      } else {
        setCouponError(response.message || "Invalid coupon code");
      }
    } catch (error) {
      console.error('Coupon verification error:', error);
      setCouponError("Failed to verify coupon code. Please try again.");
    } finally {
      setIsVerifyingCoupon(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateFormData()) {
      setSubmitMessage("Please fix the errors below");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      console.log("[RegistrationForm] Starting form submission");
      
      const formDataPayload = formatFormDataForSubmission(formData);
      formDataPayload.append("ticket", ticket._id);
      formDataPayload.append("event", event._id);
      formDataPayload.append("domain", typeof window !== "undefined" ? window.location.origin : "");
      formDataPayload.append("authenticationType", event.authenticationType || "None");
      
      if (couponApplied?.couponId) {
        formDataPayload.append("couponId", couponApplied.couponId);
      }
      
      formDataPayload.append("finalAmount", String(finalPrice));

      const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
      console.log("[RegistrationForm] API URL:", apiUrl);
      if (!apiUrl) {
        console.error("[RegistrationForm] API URL is not configured");
        setSubmitStatus("error");
        setSubmitMessage("API URL is not configured.");
        setIsSubmitting(false);
        return;
      }

      const endpoint = `${apiUrl}authentication/direct`;
      console.log(`[RegistrationForm] Submitting to endpoint: ${endpoint}`);

      // Create AbortController for timeout handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        console.error("[RegistrationForm] Request timed out after 60 seconds");
      }, 60000);

      let apiResponse;
      try {
        apiResponse = await fetch(endpoint, {
          method: "POST",
          body: formDataPayload,
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      if (!apiResponse.ok) {
        throw new Error(`HTTP error! status: ${apiResponse.status}`);
      }

      const responseData = await apiResponse.json();
      console.log("[RegistrationForm] API Response:", responseData);

      if (responseData.status === "payment") {
        // Handle Razorpay payment flow
        if (responseData.order?.razorpayOrderId) {
          try {
            const paymentResult = await initializeRazorpayPayment({
              ...responseData.order,
              customerName: formData.name || "",
              customerEmail: formData.email || "",
              customerPhone: formData.authenticationId?.number || "",
              eventId: event._id,
              ticketId: ticket._id
            });
            
            if (paymentResult.success) {
              // Payment successful, verify with backend
              const verifyResponse = await postData('/verify-payment', {
                paymentId: paymentResult.paymentId,
                orderId: paymentResult.orderId,
                signature: paymentResult.signature,
                registrationId: responseData.registrationId
              });
              
              if (verifyResponse.success) {
                setSubmitStatus("success");
                setSubmitMessage("Payment successful! Registration completed.");
                setRegistrationData(verifyResponse.data);
                
                Swal.fire({
                  title: 'Success!',
                  text: 'Payment successful! Registration completed.',
                  icon: 'success',
                  confirmButtonColor: '#FF5F4A'
                });
              } else {
                throw new Error("Payment verification failed");
              }
            }
          } catch (paymentError) {
            console.error("Payment error:", paymentError);
            setSubmitStatus("error");
            setSubmitMessage(paymentError.error || "Payment failed. Please try again.");
            
            Swal.fire({
              title: 'Payment Failed!',
              text: paymentError.error || 'Payment failed. Please try again.',
              icon: 'error',
              confirmButtonColor: '#FF5F4A'
            });
          }
        } else if (responseData.order?.checkoutUrl) {
          window.location.href = responseData.order.checkoutUrl;
        } else {
          throw new Error("Payment URL not provided");
        }
      } else if (responseData.status === "success") {
        // Handle direct success
        setSubmitStatus("success");
        setSubmitMessage(responseData.customMessage || "Registration successful!");
        setRegistrationData(responseData.response || responseData);
        
        // Show success message
        Swal.fire({
          title: 'Success!',
          text: responseData.customMessage || 'Registration completed successfully!',
          icon: 'success',
          confirmButtonColor: '#FF5F4A'
        });
      } else {
        throw new Error(responseData.customMessage || "Registration failed");
      }
    } catch (error) {
      console.error("[RegistrationForm] Submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(error.message || "Registration failed. Please try again.");
      
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Registration failed. Please try again.',
        icon: 'error',
        confirmButtonColor: '#FF5F4A'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get payment consent text
  const getPaymentConsentText = () => {
    if (finalPrice === 0) {
      return "By submitting this form, you agree to the terms and conditions.";
    }
    return `By submitting this form, you agree to pay ${currencySymbol}${finalPrice.toFixed(2)} and agree to the terms and conditions.`;
  };

  const paymentConsentMessage = getPaymentConsentText();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Event and Ticket Info */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Event Image */}
          <div className="md:w-1/3">
            <Image
              src={getImageUrl(event.banner || event.logo || "/images/Events/event2.svg")}
              alt={event.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          {/* Event Details */}
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {event.title}
            </h1>
            <div 
              className="text-gray-600 mb-4 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: event.description || "" }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <CalendarPlus className="w-4 h-4 mr-2" />
                {event.startDate && new Date(event.startDate).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <TicketIcon className="w-4 h-4 mr-2" />
                {ticket.title}
              </div>
            </div>
            
            {/* Price Display */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Price:</span>
                <span className="text-2xl font-bold text-blue-600">
                  {currencySymbol}{finalPrice.toFixed(2)}
                </span>
              </div>
              
              {couponApplied && (
                <div className="mt-2 text-sm text-green-600">
                  {getCouponDisplay(ticket, couponApplied, currencySymbol)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Registration Details
        </h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processedFields.map((field) => (
            <div
              key={field._id || field.name}
              className={field.customClass === 'full' ? 'md:col-span-2' : ''}
            >
              <DynamicFormField
                field={field}
                value={formData[field.name]}
                onChange={(value) => handleFieldChange(field.name, value)}
                error={errors[field.name]}
                formData={formData}
              />
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        {ticket.enableCoupenCode && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Coupon Code
            </h3>
            
            {!showCouponForm ? (
              <button
                type="button"
                onClick={() => setShowCouponForm(true)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Have a coupon code? Click here
              </button>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCodeInput}
                  onChange={(e) => setCouponCodeInput(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleCouponVerification}
                  disabled={isVerifyingCoupon}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isVerifyingCoupon ? "Verifying..." : "Apply"}
                </button>
              </div>
            )}
            
            {couponError && (
              <p className="mt-2 text-sm text-red-600">{couponError}</p>
            )}
          </div>
        )}

        {/* Payment Consent */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            {paymentConsentMessage}
          </p>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <TicketIcon className="w-4 h-4" />
                {finalPrice > 0 ? `Pay ${currencySymbol}${finalPrice.toFixed(2)}` : "Register Now"}
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        {submitMessage && (
          <div className={`mt-4 p-4 rounded-lg ${
            submitStatus === "success" 
              ? "bg-green-50 text-green-800" 
              : submitStatus === "error" 
              ? "bg-red-50 text-red-800" 
              : "bg-blue-50 text-blue-800"
          }`}>
            <div className="flex items-center gap-2">
              {submitStatus === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : submitStatus === "error" ? (
                <XCircle className="w-5 h-5" />
              ) : (
                <Info className="w-5 h-5" />
              )}
              <span>{submitMessage}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
