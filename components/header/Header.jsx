"use client";
import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 border border-gray-200">
            <img
              src="/icons/gonavIcon.svg"
              alt="Event Poster"
              className="w-5 h-5 object-cover"
            />
          </div>
          <span className="text-xl font-bold text-gray-900 ">GoCampus</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xs mx-4 lg:mx-8 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events"
              className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
            Contact Sales
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
            Create Events
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
            Find my ticket
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">
            Help
          </a>
        </nav>

       {/* Location & Profile */}
<div className="flex items-center space-x-2 lg:space-x-4 ml-2 lg:ml-6">
  {/* Location Selector - visible on all screens */}
  <div className="flex items-center space-x-1 text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
    <img
      src="/icons/Location.svg"
      alt="Location"
      className="w-5 h-5 object-cover"
    />
    <span className="text-sm font-medium">Lucknow</span>
    <img
      src="/icons/ChevronDown.svg"
      alt="Chevron"
      className="w-4 h-4 object-cover"
    />
  </div>

  {/* User Avatar */}
  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#FF5F4A] rounded-full flex items-center justify-center">
    <img
      src="/icons/userIcon.svg"
      alt="User"
      className="w-4 h-4 lg:w-5 lg:h-5 object-cover"
    />
  </div>

  {/* Mobile Menu Button */}
  <button className="lg:hidden p-2 text-gray-600 hover:text-red-500 transition-colors bg-gray-50 rounded-full border border-gray-200">
    <Menu size={18} />
  </button>
</div>

      </div>
    </header>
  );
};

export default Header;
