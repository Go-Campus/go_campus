"use client";
//    src="/images/Events/event2.svg"
import Image from "next/image";
import { X, Calendar, MapPin, Minus, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

const TicketBookingModal = ({
  isOpen,
  onClose,
  eventTitle,
  eventDateTime,
  ticketPrice,
  quantity,
  onQuantityChange,
}) => {
  console.log("Rendering TicketBookingModal with quantity:", quantity);
  const [activeButton, setActiveButton] = useState(null); // 'minus' or 'plus'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl h-[600px] w-full max-w-5xl ">
        {/* Modal Header */}

        {/* Modal Content */}
        <div className="p-2 w-full">
          <div className="flex flex-col w-full justify-between  lg:flex-row ">
            <div className="flex flex-col md:flex-row w-full justify-between">
              {/* Left Section - Ticket Selection */}
              <div className="w-[60%] ">
                {/* first */}
                <div className="py-[16px] px-[30px] border-b border-gray-200     flex flex-col gap-2">
                  <h1 className="text-[20px] font-[600]">
                    Best Comedy Lineup ft. Famous Star Comedians
                  </h1>
                  <p className=" text-[14px] p-0 m-0 font-[500] text-[#525866]">
                    Sat 24 August 2024 . 10:00 aM - 14:00PM IST
                  </p>
                </div>
                <div className="flex flex-col p-[40px]">
                  <div className="w-full py-[20px] px-[24px] border border-[#FF5F4A] rounded-[10px] ">
                    <div className="flex mt-2 justify-between  py-[18px] border-b border-gray-200 gap-4">
                      <div>
                        <p className="text-lg font-medium">General Admission</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          className={`px-3 py-1 text-xl rounded-md transition-colors ${
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
                            className={`w-[16px] ${
                              activeButton === "minus" ? "" : "text-gray-600"
                            }`}
                          />
                        </button>
                        <span className="text-lg font-medium">
                          {quantity || 0}
                        </span>
                        <button
                          className={`px-3 py-1 text-xl rounded-md transition-colors ${
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
                            className={`w-[16px] ${
                              activeButton === "plus" ? "" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between py-[20px] px-[24px]  gap-4">
                      <div>
                        <h4 className="text-[18px] font-[600]">
                          ₹{quantity * ticketPrice}{" "}
                        </h4>
                        <p>Sales end on jul 22, 2025 </p>
                      </div>
                      <div>
                        <button className="bg-[#F6F8FA] rounded-[12px] py-1 px-2 text-[12px] font-[500]">
                          19 Remaining
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end py-[16px]">
                    <p className="flex gap-2  text-[14px] font-[400]">
                      Language : <span>English (US)</span>{" "}
                      <span>
                        {" "}
                        <ChevronDown color="#525866" className="w-[20px]" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Event Image & Order Summary */}
              <div className="w-[35%] py-3">
                <div className=" rounded-lg flex flex-col items-center relative  ">
                  <div className="  ">
                    <div 
                      className="w-[42px] absolute top-0 right-3 rounded-full flex items-center justify-center h-[42px] bg-white/50 cursor-pointer hover:bg-white/70 transition-colors"
                      onClick={() => {
                        console.log("Modal closing...");
                        onClose();
                      }}
                    >
                      <X color="#525866" className="w-[12px]"/>
                    </div>
                    <Image
                      src="/images/Events/event2.svg"
                      alt="Event"
                      width={400}
                      height={100}
                      className="w-[300px] rounded-[36px] "
                    />
                  </div>
                  <div className=" py-[16px] w-full px-[40px]">
                    <h3 className="text-lg font-semibold">Order Summary</h3>
                    <p className="flex w-full justify-between py-[12px]">
                      {quantity}x General Admission
                      <span>₹{ticketPrice}</span>
                    </p>
                    <p className="flex w-full  border-b border-gray-200 border-t py-[12px] justify-between">
                      <span>Subtotal{quantity * ticketPrice}</span>
                    </p>
                    <p className="flex w-full  py-[12px] justify-between">
                      <span className="text-[20px] font-[600]">Total</span>
                      <span className="text-[20px] font-[600]"> ₹{quantity * ticketPrice}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingModal;
