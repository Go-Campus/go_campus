'use client'
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import {
  MainTicketLeft,
  MainTicketRight,
  PartyImage,
  Barcode,
  Sport,
  AcadamicIcon,
  Career,
  Culture,
  Technology,
  entertaiment,
  Workshopes,
} from "../../public";
import Link from 'next/link';

import Ticket from "../../components/mainTicket";
import TypeCard from "../../components/typeCard";
import EventCard from "../../components/card"
const cards = [
  { id: 1, img: AcadamicIcon, name: "Academic" },
  { id: 2, img: Technology, name: "Technology" },
  { id: 3, img: entertaiment, name: "Entertainment" },
  { id: 4, img: Career, name: "Career" },
  { id: 5, img: Culture, name: "Culture" },
  { id: 6, img: Sport, name: "Sport" },
  { id: 7, img: Workshopes, name: "Workshops" },
];

const events = [
  {
    id: 1,
    headerText: {
      main: "DBP 25",
      sub: "回归 学房"
    },
    title: "Delhi Beatbox Championship",
    dateRange: "18 June - 15 July",
    time: "03:00 PM",
    location: "IndiOwl - Platform 13, Delhi",
    price: 5699,
    discount: "save upto 39%",
    artists: [
      "/artist-1.jpg",
      "/artist-2.jpg", 
      "/artist-main.jpg",
      "/artist-3.jpg",
      "/artist-4.jpg"
    ]
  },
  {
    id: 2,
    headerText: {
      main: "MBF 25",
      sub: "音乐 节日"
    },
    title: "Mumbai Bass Festival",
    dateRange: "22 June - 20 July",
    time: "05:00 PM",
    location: "SoundSpace - Marine Drive, Mumbai",
    price: 4999,
    artists: [
      "/artist-5.jpg",
      "/artist-6.jpg",
      "/artist-7.jpg",
      "/artist-8.jpg",
      "/artist-9.jpg"
    ]
  },
  {
    id: 3,
    headerText: {
      main: "BLR 25",
      sub: "电子 音乐"
    },
    title: "Bangalore Electronic Music Fest",
    dateRange: "01 July - 25 July",
    time: "06:00 PM",
    location: "TechHub - Whitefield, Bangalore",
    price: 6299,
    artists: [
      "/artist-10.jpg",
      "/artist-11.jpg",
      "/artist-12.jpg",
      "/artist-13.jpg",
      "/artist-14.jpg"
    ]
  },
  {
    id: 4,
    headerText: {
      main: "CHN 25",
      sub: "说唱 大赛"
    },
    title: "Chennai Hip-Hop Battle",
    dateRange: "10 July - 30 July",
    time: "04:00 PM",
    location: "Urban Arena - T.Nagar, Chennai",
    price: 3799,
    artists: [
      "/artist-15.jpg",
      "/artist-16.jpg",
      "/artist-17.jpg",
      "/artist-18.jpg",
      "/artist-19.jpg"
    ]
  },
  {
    id: 5,
    headerText: {
      main: "KOL 25",
      sub: "文化 音乐"
    },
    title: "Kolkata Cultural Music Meet",
    dateRange: "15 July - 05 August",
    time: "07:00 PM",
    location: "Heritage Hall - Park Street, Kolkata",
    price: 4499,
    artists: [
      "/artist-20.jpg",
      "/artist-21.jpg",
      "/artist-22.jpg",
      "/artist-23.jpg",
      "/artist-24.jpg"
    ]
  }
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = [
    "All",
    "ForYou",
    "Online",
    "Today",
    "This Week",
    "Academic",
    "Free",
    "Food drink",
    "Charity"
  ];
  return (
    <div className="w-full  flex-col items-center flex justify-center">
      <div className="w-full flex  flex-col max-w-[1400px]">
        <div>
        <Navbar />
        </div>
 
 {/* hero section  */}

        <div className="w-full flex">
          <Ticket />
        </div>
        <div className="w-full ">
      
        </div>

      {/* event cards   */}
      {/* <div className="w-full px-4 border-b border-[#ADADAD40] py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 max-w-[1400px] mx-auto">
            {cards.map((card) => (
              <TypeCard
                key={card.id}
                name={card.name}
                Image={card.img}
                className="w-full   max-w-[120px] "
              />
            ))}
        </div>
      </div> */}

      {/* Latest Events in Lucknow */}

      <div className="w-full py-6 border-b border-t border-[#E2E4E9] ">
        <h2 className="font-[500] text-[28px] text-[#000000]">Latest Events in Lucknow</h2>
      </div>

      <div className="py-8">
        <ul className="flex gap-[18px] font-[500] text-[14px] text-[#868C98] ">
          {tabs.map((tab) => (
            <Link href="" key={tab}>
              <li
                className={
                  (activeTab === tab ? "text-red-500 " : "") + "cursor-pointer"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>


        </div>

    </div>
  );
};

export default Page;
