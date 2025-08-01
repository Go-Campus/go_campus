"use client";

import { Edit, User, MapPin, Tag } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Tickets() {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Define a CSS variable for max-width that can be used throughout the component
  const containerStyle = {
    "--max-container-width": "1300px", // Change this value to update all container widths
  };

  const tickets = [
    {
      ticketId: "YBc999761s",
      title: "Best Comedy Lineup ft. Famous Star Comedians",
      date: "18 June - 15 July",
      time: "03:00 PM",
      venue: "IndiOwl - Platform 13, Delhi",
      ticketType: "Delegate",
      price: 5699,
      image: "/images/Events/event1.svg",
      qr: "/images/qr.svg",
    },
    {
      ticketId: "XyA223581b",
      title: "Live Music Fest: Indie Vibes",
      date: "25 July - 27 July",
      time: "06:00 PM",
      venue: "Open Arena, Bangalore",
      ticketType: "VIP",
      price: 7999,
      image: "/images/Events/event2.svg",
      qr: "/images/qr.svg",
    },
  ];

  return (
    <main className="">
           <div className="w-full flex justify-center items-center">
        <div
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <Navbar />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          {/* Profile Header */}
          <div className="flex  gap-4 py-[23px] ">
            <div className="w-[142px] h-[142px] bg-gray-300 rounded-full flex items-center justify-center ">
              <User  size={80} className=" text-gray-500" />
            </div>
            <div className="flex-col items-start justify-center flex">
              <div className=" flex gap-3 items-center ">
                <h1 className="text-[32px] font-[600] text-gray-900">Nihila MJ</h1>
                <Edit className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-sm text-gray-600">
                {tickets.length} Orders • 2 Likes • 0 Following
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-8  mt-[23px] mb-6 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`pb-3 font-medium text-base transition-colors whitespace-nowrap ${
                activeTab === "upcoming"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`pb-3 font-medium text-base transition-colors whitespace-nowrap ${
                activeTab === "past"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500"
              }`}
            >
              Past Order
            </button>
          </div>

          {/* Tickets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                className="border border-[#FFD4D4] rounded-[30px] shadow-md flex flex-col sm:flex-row overflow-visible relative p-3"
              >
                {/* Left: Image */}
                <div className="w-full sm:w-[110px] h-[140px] sm:h-full relative overflow-hidden rounded-md ">
                  <Image
                    src={ticket.image}
                    alt="Event"
                    fill
                    className={`object-cover transition-all duration-300 ${
                      activeTab === "past" ? "grayscale" : ""
                    }`}
                    
                  />
                </div>

                {/* Middle: Ticket Info */}
                <div className="flex-1 px-4 py-3 flex flex-col justify-between text-sm">
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Ticket ID – {ticket.ticketId}
                    </h4>
                    <p className="text-gray-600">{ticket.title}</p>
                    {activeTab === "upcoming" ? (
                      <p className="text-red-500 mt-1">
                        {ticket.date} |{" "}
                        <span className="font-semibold">{ticket.time}</span>
                      </p>
                    ) : (
                      <p className="text-gray-400 mt-1">
                        {ticket.date} |{" "}
                        <span className="font-semibold">{ticket.time}</span>
                      </p>
                    )}
                  </div>
                  <div className="mt-3 text-gray-500 space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{ticket.venue}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>
                        Ticket Type:{" "}
                        <span className="font-medium">{ticket.ticketType}</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-bold text-black">
                    ₹{ticket.price}
                  </div>
                </div>

                {/* Dotted Divider + Circles */}
                <div className="relative hidden sm:flex items-center mx-2">
                  {/* Top Circle Notch */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full z-10 border-b border-red-500" />
                  {/* Bottom Circle Notch */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full z-10 border-t border-red-500" />
                  {/* Dotted Line */}
                  <div className="w-px h-full border-l-2 border-dotted border-[#FFD4D4] z-0" />
                </div>

                {/* Right: QR Code */}
                <div className="w-full sm:w-[110px] sm:mt-0 flex items-center justify-center  shrink-0">
                  <Image
                    src={ticket.qr}
                    alt="QR Code"
                    width={90}
                    height={90}
                    className={`object-contain transition-all duration-300 ${
                      activeTab === "past" ? "grayscale" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
