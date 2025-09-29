// Razorpay payment integration utilities

// Helper function to load Razorpay SDK dynamically
export const loadRazorpaySDK = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay SDK loaded successfully");
      resolve();
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      reject(new Error("Failed to load Razorpay SDK"));
    };
    document.head.appendChild(script);
  });
};

// Initialize Razorpay payment
export const initializeRazorpayPayment = async (orderDetails) => {
  try {
    await loadRazorpaySDK();
    
    if (!window.Razorpay) {
      throw new Error("Razorpay SDK not loaded");
    }

    const options = {
      key: orderDetails.key,
      amount: orderDetails.amount, // Amount in paisa
      currency: orderDetails.currency || "INR",
      name: orderDetails.company || "GoCampus",
      description: orderDetails.description || "Event Registration",
      order_id: orderDetails.razorpayOrderId,
      handler: function (response) {
        console.log("Payment successful:", response);
        return {
          success: true,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature
        };
      },
      prefill: {
        name: orderDetails.customerName || "",
        email: orderDetails.customerEmail || "",
        contact: orderDetails.customerPhone || ""
      },
      notes: {
        event_id: orderDetails.eventId || "",
        ticket_id: orderDetails.ticketId || "",
        registration_id: orderDetails.registrationId || ""
      },
      theme: {
        color: "#FF5F4A"
      },
      modal: {
        ondismiss: function() {
          console.log("Payment modal dismissed");
          return {
            success: false,
            error: "Payment cancelled by user"
          };
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    
    return new Promise((resolve, reject) => {
      razorpay.on('payment.success', function(response) {
        console.log("Payment success:", response);
        resolve({
          success: true,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature
        });
      });

      razorpay.on('payment.failed', function(response) {
        console.log("Payment failed:", response);
        reject({
          success: false,
          error: response.error.description || "Payment failed"
        });
      });

      razorpay.open();
    });
  } catch (error) {
    console.error("Razorpay initialization error:", error);
    throw error;
  }
};

// Verify payment signature
export const verifyPaymentSignature = (paymentData, signature, secret) => {
  const crypto = require('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${paymentData.razorpay_order_id}|${paymentData.razorpay_payment_id}`)
    .digest('hex');
  
  return expectedSignature === signature;
};

// Format amount for Razorpay (convert to paisa)
export const formatAmountForRazorpay = (amount) => {
  return Math.round(amount * 100);
};

// Format amount from Razorpay (convert from paisa)
export const formatAmountFromRazorpay = (amount) => {
  return amount / 100;
};
