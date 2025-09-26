"use client";
import Card from "../../components/destinationCard/index";
import React from "react";
import { CardImage } from "@/public";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getData } from "@/utils/api";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const containerStyle = {
    "--max-container-width": "1400px",
  };

  const filterLabels = [
    "All",
    "For You",
    "Online",
    "Today",
    "This Week",
    "Academic",
    "Free",
    "Food & Drink",
    "Charity",
  ];

  // Format date function
  const formatEventDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startDay = start.getDate();
    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const startYear = start.getFullYear();
    const startTime = start.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    
    const endDay = end.getDate();
    const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
    const endYear = end.getFullYear();
    
    if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
      return `${startDay} ${startMonth} ${startYear} | ${startTime}`;
    } else {
      return `${startDay} ${startMonth} – ${endDay} ${endMonth} | ${startTime}`;
    }
  };

  // Get image URL with CDN
  const getImageUrl = (imagePath) => {
    if (!imagePath) return CardImage;
    
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // Use CDN URL from environment or fallback to API URL
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    return `${cdnUrl}/${imagePath}`;
  };

  // Fetch events data
  const fetchEvents = async (skip = 0, category = "All") => {
    try {
      setLoading(true);
      let url = `/event?skip=${skip}&limit=50`;
      
      // Add category filter if not "All"
      if (category !== "All") {
        url += `&category=${encodeURIComponent(category)}`;
      }

      const response = await getData(url);
      if (response.success && response.response) {
        setEvents(response.response);
        setTotalCount(response.totalCount || response.count || 0);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(currentPage * 50, selectedCategory);
  }, [currentPage, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to first page when changing category
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * 50 < totalCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="bg-white w-full flex flex-col gap-[50px] items-center justify-center">
      <div className="w-full px-5 flex gap-5 flex-col items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <div
            className="w-full max-w-[var(--max-container-width)]"
            style={containerStyle}
          >
            <Navbar />
          </div>
        </div>

        {/* HEADER SECTION */}
        <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <div className="w-full border-b border-t flex justify-center items-center border-gray-200">
            <div className="w-full justify-center items-center max-w-[var(--max-container-width)]">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 py-[28px] text-center">
                All Events
              </h1>
            </div>
          </div>
        </section>

        {/* SEARCH SECTION */}
        <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <div className="w-full py-[36px] flex justify-center items-center">
            <div className="w-full justify-center items-center max-w-[var(--max-container-width)]">
              <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF553F] focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FILTER SECTION */}
        <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <div className="w-full py-[36px] flex justify-center items-center border-gray-200">
            <div className="w-full justify-center items-center max-w-[var(--max-container-width)]">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-6 sm:flex-wrap justify-center">
                {filterLabels.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => handleCategoryChange(label)}
                    className={`flex-shrink-0 px-[13px] py-[3px] text-[14px] rounded-[6px] border transition ${
                      selectedCategory === label
                        ? "bg-[#CDD0D5] text-black border-none"
                        : "text-[#868C98] hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS GRID SECTION */}
        <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <div className="w-full items-center flex justify-center">
            <div className="w-full justify-center items-center max-w-[var(--max-container-width)]">
              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full h-full">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 animate-pulse">
                      <div className="w-full h-48 bg-gray-200"></div>
                      <div className="p-4 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : events.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full h-full">
                  {events.map((event, i) => (
                    <Link key={event._id} href={`/event-page?slug=${event.slug}`}>
                      <Card
                        image={getImageUrl(event.banner)}
                        date={formatEventDate(event.startDate, event.endDate)}
                        title={event.title}
                        venue={event.venue}
                        price={event.ticketType === 'free' ? 'Free' : '499'}
                        badge={i === 0 ? "Save up to 39%" : ""}
                        variant="latest"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No events found for the selected category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PAGINATION SECTION */}
        {!loading && events.length > 0 && (
          <section
            className="w-full max-w-[var(--max-container-width)]"
            style={containerStyle}
          >
            <div className="w-full py-[36px] flex justify-center items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="text-gray-500" />
                </button>
                
                <span className="text-sm text-gray-600">
                  Page {currentPage + 1} of {Math.ceil(totalCount / 50)}
                </span>
                
                <button
                  onClick={handleNextPage}
                  disabled={(currentPage + 1) * 50 >= totalCount}
                  className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="text-gray-500" />
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* FOOTER SECTION */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default EventsPage;
