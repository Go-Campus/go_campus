"use client";

import React from "react";
import { InfoCard } from "@/components/infoCard/index";
import { aboutEventContent, faqs, socialIcons } from "../../constants/aboutEvent";
import Navbar from "@/components/navbar";
import Button from "@/components/button";

import Card from "@/components/card";
import Accordion from "@/components/Accordion";


export default function EventPage() {
    const featuredTitles = [
        "Clay Sculpting",
        "The Universe in a Pot",
        "Zoreko",
        "Music Quiz",
    ];

    const featuredVenues = [
        "Venue to be announced, Delhi",
        "Nojoto Creator Hub, Delhi",
        "Venue to be announced, Delhi",
        "Venue to be announced, Delhi",

    ];

    const featuredPrices = [
        "2499",
        "499",
        "2499",
        "2499",
        "2499",
        "5699",
        "499",
        "5317",
    ];
    const MAxwidth = "1300px";
    return (
        <div className=" flex justify-center items-center bg-white overflow-x-hidden">
            <div className={`w-full  justify-center items-center max-w-[${MAxwidth}]`}>
                <Navbar/>
                {/* Top Grid: Poster and Info Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Poster */}
                    <div className="lg:col-span-2 h-[320px] sm:h-[360px] md:h-[400px] lg:h-[470px] rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                        <img
                            src="/images/eventImage.svg"
                            alt="Event Poster"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-col justify-between space-y-4 h-full">
                        <InfoCard
                            bgColor="bg-red-50"
                            borderColor="border-red-100"
                            iconSrc="/icons/Calendar.svg"
                            title="Sat 24 August 2024"
                            subtitle="Starts 10:00 AM - 14:00 PM, IST"
                            decorativeImageSrc="/images/decorativeCalendar.svg"
                        />
                        <InfoCard
                            bgColor="bg-red-50"
                            borderColor="border-orange-100"
                            iconSrc="/icons/locationWhite.svg"
                            title="Cial Convention Center"
                            subtitle="Athani, Nedumbassery, Cochin"
                            decorativeImageSrc="/images/decorativeLocation.svg"
                        />
                    </div>
                </div>

                {/* Bottom Section: Event Details and Register Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Event Info Section */}
                    <div className="lg:col-span-2 bg-white p-4 sm:p-6">
                        <h1 className="text-2xl sm:text-[32px] lg:text-[42px] font-medium text-gray-900 mb-6 leading-tight sm:leading-[50px] lg:leading-[60px]">
                            Join Biggest Community | Investors
                            <br className="sm:hidden lg:inline" /> Founders | Free Entry
                        </h1>

                        {/* By Tablon Global & Follow */}
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/icons/TablonIcon.svg"
                                            alt="Tablon Global"
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <div className="text-[18px] text-gray-900 font-medium">
                                        By <span className="font-semibold">Tablon Global</span>
                                    </div>
                                </div>

                                <button size="small" className="!w-fit px-5 py-2 text-sm bg-gray-200 text-gray-600 rounded border border-gray-300 rounded-lg ">
                                    Follow
                                </button>
                            </div>
                        </div>

                        <hr className="border-t border-gray-200 mb-6" />

                        {/* About Section */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                                About Event
                            </h3>

                            {aboutEventContent.paragraphs.map((para, index) => (
                                <p
                                    key={index}
                                    className="font-normal text-base sm:text-[18px] leading-relaxed text-gray-700 mb-4"
                                >
                                    {para}
                                </p>
                            ))}

                            <h4 className="font-semibold text-gray-900 mb-2 text-[20px] sm:text-[22px] leading-[32px]">
                                {aboutEventContent.listTitle}
                            </h4>
                            <ul className="list-disc list-inside text-gray-700 text-base leading-[32px] space-y-2">
                                {aboutEventContent.listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Location */}
                        <div className="mt-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Location</h2>
                            <div className="bg-red-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <div className="bg-red-50 p-4">
                                    <div className="flex items-start space-x-3">
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center p-1"
                                            style={{ background: "linear-gradient(to bottom right, #FFC7C7, #FF5F4A)" }}
                                        >
                                            <img
                                                src="/icons/locationWhite.svg"
                                                alt="Icon"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm">CIAL Convention Center</h3>
                                            <p className="text-gray-600 text-xs mt-1">Athani, Nedumbassery, Cochin</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[260px] sm:h-[280px] lg:h-[300px] p-3">
                                    <img
                                        src="/images/map.svg"
                                        alt="Map"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Accordion Section */}
                        <div className="mt-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
                            <div className="space-y-4">
                                {faqs.map((item, index) => (
                                    <Accordion
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="bg-red-50 rounded-lg shadow-sm border border-red-100 p-4 sm:p-6">
  {/* Top Row: Logo + Title + Follow */}
  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
    {/* Left: Logo + Title */}
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center flex-shrink-0">
        <img
          src="/icons/TablonIcon.svg"
          alt="Tablon Global"
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
        By Tablon Global
      </h3>
    </div>

    {/* Right: Follow Button */}
    <div className="self-start sm:self-center">
      <Button size="medium" className="w-full sm:w-auto">
        Follow
      </Button>
    </div>
  </div>

  {/* Description */}
  <div className="mb-4">
    <p className="text-gray-700 text-sm sm:text-[16px] leading-relaxed">
      Tablon is a B2B Networking company to connect Investors & Founders.
      Both Investors & Founders believe meeting in-person is far more
      effective to discuss investment rather than sending emails, cold
      calls & knocking on doors.
    </p>
  </div>

  {/* Footer Row: Website + Social icons */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <a
      href="https://www.tablonglobal.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 text-sm sm:text-[14px] hover:underline break-all"
    >
      www.tablonglobal.com
    </a>

    <div className="flex items-center space-x-2">
      {socialIcons.map((icon, index) => (
        <button
          key={index}
          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label={icon.name}
        >
          {icon.icon}
        </button>
      ))}
    </div>
  </div>
</div>

                    </div>

                    {/* Register Card */}
                    <div className="relative bg-[#FFEDEA] border border-[#FFD4D4] p-4 rounded-[30px] shadow-md w-full h-fit">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src="/images/eventImage.svg"
                                alt="Event"
                                className="w-full h-[230px] object-cover rounded-2xl"
                            />
                        </div>
                        

                        <h4 className="text-center font-semibold text-gray-900 text-base sm:text-lg mb-1">
                            Delhi Beatbox Championship
                        </h4>
                        <p className="text-center text-sm text-gray-700">
                            24 Aug 2024– 28 Aug 2024
                        </p>
                        <p className="text-center text-sm text-gray-600 mb-3">
                            Banasura Mountain View Resort
                        </p>

                        <div className="border-t border-dashed border-gray-400 my-4"></div>

                        <div className="flex justify-center">
                            <Button size="medium">
                                Register Now
                            </Button>
                        </div>
                    </div>
                </div>
                <section className="px-4 pb-16">

                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        More events from this organizer
                    </h2>
                    <div className="w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredTitles.map((t, i) => (
                            <Card
                                key={i}
                                image={`/images/Events/event${(i) + 1}.svg`}
                                date="18 June – 15 July | 03:00 PM"
                                title={t}
                                venue={featuredVenues[i]}
                                price={featuredPrices[i]}
                                badge={i === 0 ? "Save up to 39%" : ""}
                                variant="varient"
                            />
                        ))}
                    </div>
                </section>
                <section className="px-4 pb-16">
                    <div className="max-w-[1320px] mx-auto">
                        {/* Section Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                                Other Events You May Like
                            </h2>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        document.getElementById("other-events-scroll").scrollBy({
                                            left: -300,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition"
                                >
                                    <span className="text-xl font-bold">{'<'}</span>
                                </button>
                                <button
                                    onClick={() => {
                                        document.getElementById("other-events-scroll").scrollBy({
                                            left: 300,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition"
                                >
                                    <span className="text-xl font-bold">{'>'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Event Cards Horizontal Scroll */}
                        <div
                            id="other-events-scroll"
                            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                        >
                            {featuredTitles.map((t, i) => (
                                <div key={i} className="flex-shrink-0 w-[20%]">
                                    <Card
                                        image={`/images/Events/event${i + 1}.svg`}
                                        date="18 June – 15 July | 03:00 PM"
                                        title={t}
                                        venue={featuredVenues[i]}
                                        price={featuredPrices[i]}
                                        badge={i === 0 ? "Save up to 39%" : ""}
                                        variant="latest"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



            </div>
        </div>
    );
}