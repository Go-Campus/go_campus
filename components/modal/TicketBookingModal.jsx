"use client";
//    src="/images/Events/event2.svg"
import Image from "next/image";
import { X, Calendar, MapPin, Minus, Plus, ChevronDown, IdCard } from "lucide-react";
import { useState, useEffect } from "react";
import { GooglePayIcon, PaytmIcon } from "@/public";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const TicketBookingModal = ({
  isOpen,
  onClose,
  eventTitle,
  eventDateTime,
  ticketPrice,
  quantity,
  onQuantityChange,
  type
}) => {
  console.log("Rendering TicketBookingModal with quantity:", quantity);
  const [activeButton, setActiveButton] = useState(null); // 'minus' or 'plus'
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    console.log('Timer initialized with timeLeft:', timeLeft);
    if (!isOpen || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        console.log('Timer updated, new time:', newTime);
        if (newTime <= 0) {
          console.log('Timer expired, closing modal');
          clearInterval(timer);
          onClose();
        }
        return newTime;
      });
    }, 1000);

    return () => {
      console.log('Cleaning up timer');
      clearInterval(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={() => {
        console.log("Closing modal from overlay click");
        onClose();
      }}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-5xl p-5 overflow-y-auto max-h-[90vh] md:max-h-[85vh]"
        onClick={(e) => {
          // Prevent clicks inside the modal from closing it
          e.stopPropagation();
        }}
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {/* Modal Content */}
        <div className="p-2 w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
              {/* Left Section - Ticket Selection */}

              {type === 'register' ? (
              <div className="w-full lg:w-[60%]">
              {/* first */}
              <div className="py-[16px] px-[16px] md:px-[30px] border-b border-gray-200 flex flex-col gap-2">
                <h1 className="text-[18px] md:text-[20px] font-[600]">
                  {eventTitle}
                </h1>
                <p className="text-[13px] md:text-[14px] p-0 m-0 font-[500] text-[#525866]">
                  {eventDateTime}
                </p>
              </div>
              <div className="flex flex-col p-[20px] md:p-[40px]">
                <div className="w-full py-[16px] md:py-[20px] px-[16px] md:px-[24px] border border-[#FF5F4A] rounded-[10px]">
                  <div className="flex mt-2 justify-between py-[18px] border-b border-gray-200 gap-4">
                    <div>
                      <p className="text-base md:text-lg font-medium">
                        General Admission
                      </p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <button
                        className={`px-2 md:px-3 py-1 text-lg md:text-xl rounded-md transition-colors ${
                          activeButton === "minus"
                            ? "bg-[#FF5F4A] text-white"
                            : "bg-[#F6F8FA] text-gray-600"
                        }`}
                        onClick={() => {
                          console.log("Minus button clicked");
                          setActiveButton("minus");
                          if (onQuantityChange && quantity > 0) {
                            onQuantityChange("decrease");
                          }
                        }}
                      >
                        <Minus
                          className={`w-[14px] md:w-[16px] ${
                            activeButton === "minus" ? "" : "text-gray-600"
                          }`}
                        />
                      </button>
                      <span className="text-base md:text-lg font-medium">
                        {quantity || 0}
                      </span>
                      <button
                        className={`px-2 md:px-3 py-1 text-lg md:text-xl rounded-md transition-colors ${
                          activeButton === "plus"
                            ? "bg-[#FF5F4A] text-white"
                            : "bg-[#F6F8FA] text-gray-600"
                        }`}
                        onClick={() => {
                          console.log("Plus button clicked");
                          setActiveButton("plus");
                          if (onQuantityChange) {
                            onQuantityChange("increase");
                          }
                        }}
                      >
                        <Plus
                          className={`w-[14px] md:w-[16px] ${
                            activeButton === "plus" ? "" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between py-[16px] md:py-[20px] px-[16px] md:px-[24px] gap-4">
                    <div>
                      <h4 className="text-[16px] md:text-[18px] font-[600]">
                        ₹{quantity * ticketPrice}{" "}
                      </h4>
                      <p className="text-sm md:text-base">
                        Sales end on jul 22, 2025
                      </p>
                    </div>
                    <div>
                      <button className="bg-[#F6F8FA] rounded-[12px] py-1 px-2 text-[11px] md:text-[12px] font-[500]">
                        19 Remaining
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end py-[16px]">
                  <p className="flex gap-2 text-[13px] md:text-[14px] font-[400] items-center">
                    Language : <span>English (US)</span>{" "}
                    <span>
                      <ChevronDown
                        color="#525866"
                        className="w-[18px] md:w-[20px]"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>  
              ) :
              type === 'checkout' ?(
                <div className="w-full lg:w-[60%] p-6">
                    <div className="flex justify-between w-full">

                <h2 className="text-xl font-semibold mb-6">Checkout</h2>
                <p className="text-[12px] text-[#DF1C41] font-[500]">
                  Time left {formatTime(timeLeft)}
                </p>
                    </div>
                
                {/* Billing Information */}
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-4">Billing Information</h3>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F4A]/50 focus:border-[#FF5F4A] transition-all duration-200"
                        placeholder="Nihla"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F4A]/50 focus:border-[#FF5F4A] transition-all duration-200"
                        placeholder="M"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F4A]/50 focus:border-[#FF5F4A] transition-all duration-200"
                      placeholder="nihlamj@gmail.com"
                    />
                  </div>
                </div>

                {/* Email Preferences */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm">
                      Keep Me Updated On More Events And News From This Event Organizer
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm">
                      Send Me Emails About The Best Events Happening Nearby Or Online
                    </label>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-4">Pay With</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border border-[#E2E4E9] rounded-md">
                      {/* <input type="radio" name="payment" /> */}
                      {/* <Image src={PaytmIcon} alt="Paytm" width={20} height={20} className="w-[20px] " /> */}
                      <IdCard />
                      <span>Credit or Debit Card</span>
                    </div>
                    <div className="flex items-center gap-3 p-3  border border-[#E2E4E9] rounded-md">
                      <Image src={PaytmIcon} alt="GooglePay" width={20} height={20} className="w-[20px] " />
                      <span>PayPal</span>
                    </div>
                    <div className="flex items-center gap-3 p-3  border border-[#E2E4E9]rounded-md">
                      <Image src={GooglePayIcon} alt="GooglePay" width={20} height={20} className="w-[32px] " />  
                      <span>Google Pay</span>
                    </div>
                  </div>
                </div>

                {/* Terms and Place Order */}
                <div className="text-sm mb-4">
                  By Selecting Place Order, I Agree To The <a href="#" className="text-[#FF5F4A]">GoCampus Terms And Services</a>
                </div>

            
              </div>
              ) : (
               null
              )
              }

              {/* Right Section - Event Image & Order Summary */}
              <div className="w-full lg:w-[35%] py-3">
                <div className="rounded-lg flex flex-col items-center relative">
                  <div className="relative w-full flex justify-center">
                    <Image
                      src="/images/Events/event2.svg"
                      alt="Event"
                      width={400}
                      height={100}
                      className="w-full max-w-[300px] rounded-[24px] md:rounded-[36px]"
                    />
                    <div
                      className="w-[38px] md:w-[42px] absolute top-1 right-0 rounded-full flex items-center justify-center h-[38px] md:h-[42px] bg-white/70 shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        console.log("Modal closing...");
                        onClose();
                      }}
                    >
                      <X color="#525866" className="w-[14px] md:w-[16px]" />
                    </div>
                  </div>
                  <div className="py-[16px] w-full px-[20px] md:px-[40px]">
                    <h3 className="text-base md:text-lg font-semibold">
                      Order Summary
                    </h3>
                    <p className="flex w-full justify-between py-[12px] text-sm md:text-base">
                      {quantity}x General Admission
                      <span>₹{ticketPrice}</span>
                    </p>
                    <p className="flex w-full border-b border-gray-200 border-t py-[12px] justify-between text-sm md:text-base">
                      <span>Subtotal</span>
                      <span>₹{quantity * ticketPrice}</span>
                    </p>
                    <p className="flex w-full py-[12px] justify-between">
                      <span className="text-[18px] md:text-[20px] font-[600]">
                        Total
                      </span>
                      <span className="text-[18px] md:text-[20px] font-[600]">
                        ₹{quantity * ticketPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {type === 'checkout' && (
            <div className={`flex   ${type === 'checkout' ? 'justify-start' : 'justify-center'}`}>
              <button className=" bg-[#FF5F4A] text-[white]  rounded-[12px] py-[10px]  px-[36px] text-[16px] font-[500]">
             Place Order
              </button>
            </div>
            )}
            {type === 'register' && (
            <div className={`flex   ${type === 'register' ? 'justify-center' : 'justify-center'}`}>
              <button className=" bg-[#FF5F4A] text-[white]  rounded-[12px] py-[10px]  px-[36px] text-[16px] font-[500]">
                Checkout

              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingModal;
