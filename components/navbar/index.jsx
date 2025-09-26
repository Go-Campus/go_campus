"use client"
import { Search, MapPin, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { GoCampusLogo, ProfileIcon } from "../../public";
import Image from "next/image";
import { useState } from "react";

export default function GoCampusHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navBar = [
    {
      id: 1,
      name: " Contact Sales",
      link: "home",
    },
    {
      id: 2,
      name: " Create Events ",
      link: "home",
    }, 
    {
      id: 3,
      name: "Find my ticket ",
      link: "home",
    },
    {
      id: 4,
      name: "Help   ",
      link: "home",
    },
  ];

  return (
    <header className="bg-white w-full py-3">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        {/* First 50%: Logo + Search Bar */}
        <div className="flex items-center w-[40%] rounded-lg">
          {/* Logo */}
          <div className="flex items-center space-x-2 mr-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <Image src={GoCampusLogo} alt="GoCampus logo" />
              </span>
            </div>
            <span className="text-[24px] font-semibold text-gray-900">
              GoCampus
            </span>
          </div>
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events"
                className="w-full pl-4 pr-10 py-2 bg-[#F6F8FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Second 50%: Navigation Links, Location, User */}
        <nav className="flex items-center justify-between space-x-6 w-[60%]">
          <div className="gap-10 justify-center w-[70%] flex">
            {navBar.map((navbar) => (
              <Link 
                key={navbar.id} 
                href={navbar.link}
                className="text-gray-700 hover:text-gray-900 text-[16px] font-medium"
              >
                {navbar.name}
              </Link>
            ))}
          </div>
          
          {/* Location Dropdown */}
          <div className="gap-3 justify-end items-center w-[30%] flex">
            <div className="flex gap-2 items-center space-x-1 text-gray-700 cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Lucknow</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* User Avatar */}
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <Image src={GoCampusLogo} alt="GoCampus logo" />
              </span>
            </div>
            <span className="text-[24px] font-semibold text-gray-900">
              GoCampus
            </span>
          </div>

          {/* Right side: Location, User, Toggle */}
          <div className="flex items-center space-x-3">
            {/* Location */}
            <div className="flex items-center text-gray-700 cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span className="font-medium ml-1">Lucknow</span>
            </div>
            
            {/* User Avatar */}
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
              <User className="w-5 h-5 text-white" />
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 transition-transform duration-200 hover:scale-110"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events"
              className="w-full pl-4 pr-10 py-2 bg-[#F6F8FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 bg-gray-100 border-gray-200 rounded-lg">
            <nav className="flex flex-col ">
              {navBar.map((navbar, index) => (
                <Link 
                  key={navbar.id} 
                  href={navbar.link}
                  className={`text-gray-700 hover:text-gray-900 text-[16px] hover:bg-gray-200 font-medium py-2 px-3 rounded transition-all duration-200 transform ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-[-10px] opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navbar.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}