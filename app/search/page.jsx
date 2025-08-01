"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Card from "../../components/destinationCard/index";
import Image from "next/image";
import { MoveDownRight, Filter, X } from "lucide-react";

export default function SearchPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const containerStyle = {
    "--max-container-width": "1400px",
  };

  const searchResults = [
    {
      title: "WEEKEND COMEDY NIGHT",
      venue: "Nojoto Creator Hub, Delhi",
      date: "18 June - 15 July | 03:00 PM",
      price: "₹499",
      image: "/images/Events/event1.svg",
      badge: "Save up to 39%",
    },
    {
      title: "WEEKEND COMEDY NIGHT",
      venue: "Nojoto Creator Hub, Delhi",
      date: "18 June - 15 July | 03:00 PM",
      price: "₹499",
      image: "/images/Events/event1.svg",
      badge: "",
    },
    {
      title: "WEEKEND COMEDY NIGHT",
      venue: "Nojoto Creator Hub, Delhi",
      date: "18 June - 15 July | 03:00 PM",
      price: "₹499",
      image: "/images/Events/event1.svg",
      badge: "",
    },
    {
      title: "WEEKEND COMEDY NIGHT",
      venue: "Nojoto Creator Hub, Delhi",
      date: "18 June - 15 July | 03:00 PM",
      price: "₹499",
      image: "/images/Events/event1.svg",
      badge: "",
    },
  ];

  const categories = [
    { name: "Business", icon: "icons/briefcase.svg" },
    { name: "Food and Drink", icon: "icons/fooddrink.svg" },
    { name: "Health", icon: "icons/health.svg" },
    { name: "Music", icon: "icons/music.svg" },
  ];

  const popularCities = [
    "Things to do in Abilene",
    "Things to do in Kochi",
    "Things to do in Kannur",
    "Things to do in Coimbatore",
    "Things to do in Calicut",
    "Things to do in Indianapolis",
    "Things to do in Antarctica",
  ];

  const dates = ["Today", "Tomorrow", "This Weekend", "Pick a Date"];
  const prices = ["This Weekend", "Pick a Date"];
  const formats = ["Class", "Conference", "Festival", "Party"];
  const languages = ["English", "German", "French", "Spanish"];
  const currency = ["U.S. Dollar", "Canadian Dollar", "Euro", "British Pound"];

  return (
    <div className="bg-white w-full flex flex-col items-center justify-center">
      {/* Navbar */}
      <div className="w-full px-3 sm:px-5 flex gap-5 flex-col items-center justify-center">
        <div className="w-full max-w-[var(--max-container-width)]" style={containerStyle}>
          <Navbar />
        </div>
      </div>

      {/* Main content */}
      <div className="w-full px-3 sm:px-5 flex gap-5 flex-col items-center justify-center">
        <div className="w-full max-w-[var(--max-container-width)]" style={containerStyle}>
          {/* Header */}
          <div className="py-2 sm:py-4">
            <p className="text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18px] font-medium text-gray-700"> Home / Kochi / TechEvents</p>
          </div>
          <div className="w-full py-4 sm:py-6">
            <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] font-semibold leading-[28px] sm:leading-[36px] lg:leading-[50px] text-gray-800 mb-2">
              Tech events in Kochi, India
            </h1>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <Filter size={16} />
              Filters
            </button>
          </div>

          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsSidebarOpen(false)}>
              <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-medium text-lg text-gray-900">Filters</h3>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-1">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 overflow-y-auto h-full">
                  {/* Mobile Filter Content */}
                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Category</h4>
                      <div className="space-y-3">
                        {categories.map((category, index) => (
                          <label key={index} className="flex items-center gap-2 text-sm">
                            <Image src={category.icon} alt="icon" width={16} height={16} className="object-contain" />
                            <span className="text-[14px] leading-[15px]">{category.name}</span>
                          </label>
                        ))}
                        <button className="text-[14px] text-red-600 hover:underline">Show more</button>
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Date</h4>
                      <div className="space-y-3">
                        {dates.map((date, index) => (
                          <label key={index} className="flex items-center gap-2 text-sm">
                            <input type="radio" name="date" className="rounded" defaultChecked={index === 0} />
                            <span className="text-[14px] leading-[15px]">{date}</span>
                          </label>
                        ))}
                        <button className="text-sm text-red-600 hover:underline">Show more</button>
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Price</h4>
                      <div className="space-y-3">
                        {prices.map((price, index) => (
                          <label key={index} className="flex items-center gap-2 text-sm">
                            <input type="radio" name="price" className="rounded" />
                            <span className="text-[14px] leading-[15px]">{price}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Format */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Format</h4>
                      <div className="space-y-3">
                        {formats.map((format, index) => (
                          <label key={index} className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="rounded" defaultChecked={index === 0} />
                            <span className="text-[14px] leading-[15px]">{format}</span>
                          </label>
                        ))}
                        <button className="text-sm text-red-600 hover:underline">Show more</button>
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div>
                      <div className="space-y-3">
                        <label className="flex items-start gap-2">
                          <input type="checkbox" className="rounded mt-1" />
                          <span className="text-[14px] leading-[15px]">Only show events from organizers I follow</span>
                        </label>
                        <label className="flex items-start gap-2">
                          <input type="checkbox" className="rounded mt-1" />
                          <span className="text-[14px] leading-[15px]">Search for online events</span>
                        </label>
                      </div>
                    </div>

                    {/* Language */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Language</h4>
                      <div className="space-y-3">
                        {languages.map((language, index) => (
                          <label key={index} className="flex items-center gap-2 text-sm">
                            <input type="radio" name="language" className="rounded" defaultChecked={index === 0} />
                            <span className="text-[14px] leading-[15px]">{language}</span>
                          </label>
                        ))}
                        <button className="text-[14px] text-red-600 hover:underline">Show more</button>
                      </div>
                    </div>

                    {/* Currency */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Currency</h4>
                      <div className="space-y-3">
                        {currency.map((curr, index) => (
                          <label key={index} className="flex items-center gap-2 text-sm">
                            <input type="radio" name="currency" className="rounded" defaultChecked={index === 0} />
                            <span className="text-[14px] leading-[15px]">{curr}</span>
                          </label>
                        ))}
                        <button className="text-[14px] text-red-600 hover:underline">Show more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Left Sidebar - Desktop Only */}
            <div className="hidden lg:block w-60 flex-shrink-0">
              <div className="bg-white border-r border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-[24px] leading-[32px] text-gray-900 mb-3">Filters</h3>

                {/* Category */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-5">Category</h4>
                  <div className="space-y-6">
                    {categories.map((category, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <Image src={category.icon} alt="icon" width={16} height={16} className="object-contain" />
                        <span className="text-[16px] leading-[15px]">{category.name}</span>
                      </label>
                    ))}
                    <button className="text-[16px] text-red-600 hover:underline">Show more</button>
                  </div>
                </div>

                {/* Date */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-5">Date</h4>
                  <div className="space-y-6">
                    {dates.map((date, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="radio" name="date" className="rounded" defaultChecked={index === 0} />
                        <span className="text-[16px] leading-[15px]">{date}</span>
                      </label>
                    ))}
                    <button className="text-sm text-red-600 hover:underline">Show more</button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-5">Price</h4>
                  <div className="space-y-6">
                    {prices.map((price, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="radio" name="price" className="rounded" />
                        <span className="text-[16px] leading-[15px]">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Format */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-5">Format</h4>
                  <div className="space-y-6">
                    {formats.map((format, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" defaultChecked={index === 0} />
                        <span className="text-[16px] leading-[15px]">{format}</span>
                      </label>
                    ))}
                    <button className="text-sm text-red-600 hover:underline">Show more</button>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="mb-6">
                  <div className="space-y-6">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-[16px] leading-[15px]">Only show events from organizers I follow</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-[16px] leading-[15px]">Search for online events</span>
                    </label>
                  </div>
                </div>

                {/* Language */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-5">Language</h4>
                  <div className="space-y-6">
                    {languages.map((language, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="radio" name="language" className="rounded" defaultChecked={index === 0} />
                        <span className="text-[16px] leading-[15px]">{language}</span>
                      </label>
                    ))}
                    <button className="text-[16px] text-red-600 hover:underline">Show more</button>
                  </div>
                </div>

                {/* Currency */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-5">Currency</h4>
                  <div className="space-y-6">
                    {currency.map((curr, index) => (
                      <label key={index} className="flex items-center gap-2 text-sm">
                        <input type="radio" name="currency" className="rounded" defaultChecked={index === 0} />
                        <span className="text-[16px] leading-[15px]">{curr}</span>
                      </label>
                    ))}
                    <button className="text-[16px] text-red-600 hover:underline">Show more</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Two Sections */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              {/* Top Section - Cards and Map */}
              <div className="flex flex-col xl:flex-row gap-4 lg:gap-6">
                {/* Cards */}
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-2 sm:gap-4 mb-4">
                    <p className="text-[12px] sm:text-[14px] leading-[10px] text-gray-600">2 filters applied</p>
                    <button className="text-[12px] sm:text-[14px] leading-[10px] text-gray-500 py-1 sm:py-2 px-2 sm:px-4 bg-[#E2E4E9] rounded-xl">
                      Today ×
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-3 sm:gap-4">
                    {searchResults.map((result, index) => (
                      <Card
                        key={index}
                        image={result.image}
                        date={result.date}
                        title={result.title}
                        venue={result.venue}
                        price={result.price}
                        badge={result.badge}
                        variant="latest"
                      />
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="w-full xl:w-[400px] xl:flex-shrink-0">
                  <div className="bg-white overflow-hidden">
                    <div className="p-2 flex justify-between items-center">
                      <button className="text-xs sm:text-sm text-gray-700 flex items-center gap-1">
                        View map <span className="text-xs">▼</span>
                      </button>
                    </div>
                    <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[591px] bg-gray-100 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/map.svg"
                        alt="Map Screenshot"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 right-2 flex flex-col gap-1">
                        <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center hover:bg-gray-50">
                          <span className="text-sm sm:text-lg font-medium">+</span>
                        </button>
                        <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center hover:bg-gray-50">
                          <span className="text-sm sm:text-lg font-medium">−</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Popular Events */}
              <div className="w-full mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-900">Popular Events</h2>
                  <button className="text-[12px] sm:text-[14px] text-gray-700 hover:underline flex items-center gap-1">
                    Explore more events <span className="text-xs">▼</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {searchResults.slice(0, 3).map((result, index) => (
                    <Card
                      key={index}
                      image={result.image}
                      date={result.date}
                      title={result.title}
                      venue={result.venue}
                      price={result.price}
                      badge={result.badge}
                      variant="latest"
                    />
                  ))}
                </div>
              </div>

              {/* Based on Recent Searches */}
              <div className="w-full mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-gray-900">Based on your most recent searches</h2>
                  <MoveDownRight size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {searchResults.map((result, index) => (
                    <Card
                      key={index}
                      image={result.image}
                      date={result.date}
                      title={result.title}
                      venue={result.venue}
                      price={result.price}
                      badge={result.badge}
                      variant="latest"
                    />
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <section className="w-full mb-6 sm:mb-8">
                <h2 className="text-[16px] sm:text-[18px] lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  Trending Searches
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {popularCities.map((city, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-1 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 rounded bg-[#F6F8FA] transition hover:bg-gray-100"
                    >
                      <img src="icons/search.svg" alt="search" className="w-3 h-3 sm:w-4 sm:h-4" />
                      {city}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
