"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import RegistrationForm from "../../../components/forms/RegistrationForm";
import { createEventInterface, createTicketInterface } from "../../../types";
import { getData } from "../../../utils/api";
import { fetchRegistrationFormFields, getDefaultFormFields } from "../../../lib/form-fields";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { Loader2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get('ticketId');
  
  const [event, setEvent] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [formFields, setFormFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get default form fields
  const defaultFormFields = getDefaultFormFields();

  useEffect(() => {
    const fetchRegistrationData = async () => {
      if (!ticketId) {
        setError("Ticket ID is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Fetch ticket details
        const ticketResponse = await getData(`/ticket/${ticketId}`);
        if (ticketResponse.success && ticketResponse.data) {
          setTicket(ticketResponse.data);
          
          // Fetch event details
          const eventResponse = await getData(`/event/${ticketResponse.data.event}`);
          if (eventResponse.success && eventResponse.data) {
            setEvent(eventResponse.data);
            
            // Fetch form fields
            try {
              const fetchedFields = await fetchRegistrationFormFields(
                eventResponse.data._id, 
                ticketId
              );
              setFormFields(fetchedFields.length > 0 ? fetchedFields : defaultFormFields);
            } catch (fieldError) {
              console.error("Error fetching form fields:", fieldError);
              setFormFields(defaultFormFields);
            }
          } else {
            setError("Event not found");
          }
        } else {
          setError("Ticket not found");
        }
        
      } catch (err) {
        console.error("Error fetching registration data:", err);
        setError("Failed to load registration data");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrationData();
  }, [ticketId]);

  // Build image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/Events/event2.svg";
    if (typeof imagePath !== 'string') return "/images/Events/event2.svg";
    if (imagePath.startsWith('/')) return imagePath;
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://event-manager.syd1.cdn.digitaloceanspaces.com';
    return `${cdnUrl.replace(/\/$/, '')}/${imagePath.replace(/^\//, '')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading registration form...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Registration Unavailable</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!event || !ticket) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Registration Unavailable</h1>
          <p className="text-gray-600 mb-6">Event or ticket information not found.</p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Event Image */}
              <div className="md:w-1/3">
                <Image
                  src={getImageUrl(event.banner || event.logo)}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              {/* Event Details */}
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h1>
                <div 
                  className="text-gray-600 mb-4 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.description || "" }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Date:</span>
                    <span className="ml-2">
                      {event.startDate && new Date(event.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Venue:</span>
                    <span className="ml-2">{event.venue || "TBA"}</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {ticket.title}
                  </h3>
                  <div 
                    className="text-blue-800 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: ticket.description || "" }}
                  />
                  {ticket.enablePricing && (
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{ticket.paymentAmount || 0}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <RegistrationForm
            event={event}
            ticket={ticket}
            allFormFields={formFields}
            currencySymbol="₹"
            defaultPaymentMethod="EventHex Payment"
            isEmbeddedView={false}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
