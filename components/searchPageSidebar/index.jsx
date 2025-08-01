"use client";

import React, { useState, useEffect } from "react";

// Add animation styles
const styles = `
  @keyframes slideRight {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .animate-slide-right {
    animation: slideRight 0.3s ease-out forwards;
  }
  .animate-slide-left {
    animation: slideLeft 0.3s ease-out forwards;
  }
`;
import Image from "next/image";
import { X } from "lucide-react";

// Log message to identify component initialization
console.log("SearchPageSidebar component initialized");

const SearchPageSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  categories,
  dates,
  prices,
  formats,
  languages,
  currency,
}) => {
  // Log when sidebar state changes
  React.useEffect(() => {
    console.log(`Sidebar state changed: ${isSidebarOpen ? "opened" : "closed"}`);
  }, [isSidebarOpen]);

  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsClosing(false);
    }
  }, [isSidebarOpen]);

  const handleClose = () => {
    console.log("Sidebar closing with animation...");
    setIsClosing(true);
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 300); // Match animation duration
  };

  // Mobile Sidebar with enhanced slide animation
  const MobileSidebar = () => (
    <>
      {/* Backdrop with fade effect */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/30 z-50 duration-400 ease-out ${
          isSidebarOpen 
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      >
        {/* Sliding panel with cool left-to-right animation */}
        <div
          className={`absolute left-0 top-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col ${
            isClosing ? 'animate-slide-left' : 'animate-slide-right'
          }`}
          style={{
            // Smooth spring-like animation
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            willChange: 'transform'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-lg text-gray-900">Filters</h3>
            <button 
              onClick={handleClose} 
              className="p-1 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Category */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Category</h4>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                    >
                      <Image
                        src={category.icon}
                        alt="icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span className="text-[14px] leading-[15px]">
                        {category.name}
                      </span>
                    </label>
                  ))}
                  <button className="text-[14px] text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
                    Show more
                  </button>
                </div>
              </div>

              {/* Date */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Date</h4>
                <div className="space-y-3">
                  {dates.map((date, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                    >
                      <input
                        type="radio"
                        name="date"
                        className="rounded"
                        defaultChecked={index === 0}
                      />
                      <span className="text-[14px] leading-[15px]">{date}</span>
                    </label>
                  ))}
                  <button className="text-sm text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
                    Show more
                  </button>
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Price</h4>
                <div className="space-y-3">
                  {prices.map((price, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                    >
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
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                    >
                      <input
                        type="checkbox"
                        className="rounded"
                        defaultChecked={index === 0}
                      />
                      <span className="text-[14px] leading-[15px]">
                        {format}
                      </span>
                    </label>
                  ))}
                  <button className="text-sm text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
                    Show more
                  </button>
                </div>
              </div>

              {/* Additional Options */}
              <div>
                <div className="space-y-3">
                  <label className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                    <input type="checkbox" className="rounded mt-1" />
                    <span className="text-[14px] ">
                      Only show events from organizers I follow
                    </span>
                  </label>
                  <label className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                    <input type="checkbox" className="rounded mt-1" />
                    <span className="text-[14px] leading-[15px]">
                      Search for online events
                    </span>
                  </label>
                </div>
              </div>

              {/* Language */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Language</h4>
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                    >
                      <input
                        type="radio"
                        name="language"
                        className="rounded"
                        defaultChecked={index === 0}
                      />
                      <span className="text-[14px] leading-[15px]">
                        {language}
                      </span>
                    </label>
                  ))}
                  <button className="text-[14px] text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
                    Show more
                  </button>
                </div>
              </div>

              {/* Currency */}
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Currency</h4>
                <div className="space-y-3">
                  {currency.map((curr, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200"
                    >
                      <input
                        type="radio"
                        name="currency"
                        className="rounded"
                        defaultChecked={index === 0}
                      />
                      <span className="text-[14px] leading-[15px]">{curr}</span>
                    </label>
                  ))}
                  <button className="text-[16px] text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
                    Show more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Desktop Sidebar (unchanged but with minor hover improvements)
  const DesktopSidebar = () => (
    <div className="hidden lg:block w-60 flex-shrink-0">
      <div className="bg-white border-r border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-[24px] leading-[32px] text-gray-900 mb-3">
          Filters
        </h3>

        {/* Category */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-5">Category</h4>
          <div className="space-y-6">
            {categories.map((category, index) => (
              <label key={index} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                <Image
                  src={category.icon}
                  alt="icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span className="text-[16px] leading-[15px]">
                  {category.name}
                </span>
              </label>
            ))}
            <button className="text-[16px] text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
              Show more
            </button>
          </div>
        </div>

        {/* Date */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-5">Date</h4>
          <div className="space-y-6">
            {dates.map((date, index) => (
              <label key={index} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                <input
                  type="radio"
                  name="date"
                  className="rounded"
                  defaultChecked={index === 0}
                />
                <span className="text-[16px] leading-[15px]">{date}</span>
              </label>
            ))}
            <button className="text-sm text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
              Show more
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-5">Price</h4>
          <div className="space-y-6">
            {prices.map((price, index) => (
              <label key={index} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200">
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
              <label key={index} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                <input
                  type="checkbox"
                  className="rounded"
                  defaultChecked={index === 0}
                />
                <span className="text-[16px] leading-[15px]">{format}</span>
              </label>
            ))}
            <button className="text-sm text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
              Show more
            </button>
          </div>
        </div>

        {/* Additional Options */}
        <div className="mb-6">
          <div className="space-y-6">
            <label className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors duration-200">
              <input type="checkbox" className="rounded" />
              <span className="text-[16px] ">
                Only show events from organizers I follow
              </span>
            </label>
            <label className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded transition-colors duration-200">
              <input type="checkbox" className="rounded" />
              <span className="text-[16px] leading-[15px]">
                Search for online events
              </span>
            </label>
          </div>
        </div>

        {/* Language */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-5">Language</h4>
          <div className="space-y-6">
            {languages.map((language, index) => (
              <label key={index} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                <input
                  type="radio"
                  name="language"
                  className="rounded"
                  defaultChecked={index === 0}
                />
                <span className="text-[16px] leading-[15px]">{language}</span>
              </label>
            ))}
            <button className="text-[16px] text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
              Show more
            </button>
          </div>
        </div>

        {/* Currency */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-5">Currency</h4>
          <div className="space-y-6">
            {currency.map((curr, index) => (
              <label key={index} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded transition-colors duration-200">
                <input
                  type="radio"
                  name="currency"
                  className="rounded"
                  defaultChecked={index === 0}
                />
                <span className="text-[16px] leading-[15px]">{curr}</span>
              </label>
            ))}
            <button className="text-[16px] text-red-600 hover:underline hover:text-red-700 transition-colors duration-200">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{styles}</style>
      <MobileSidebar />
      <DesktopSidebar />
    </>
  );
};

export default SearchPageSidebar;