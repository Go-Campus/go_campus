"use client";
import Card from "../../components/destinationCard/index";
import React from "react";
import {
  CardImage,
  TechnologyIcon,
  CareerIcon,
  entertaimentIcon,
  SportIcon,
  CultureIcon,
  WorkshopesIcon,
  AcadamicIcon,
} from "@/public";
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
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [destinationsLoading, setDestinationsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const containerStyle = {
    "--max-container-width": "1400px",
  };

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
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL ;
    return `${cdnUrl}/${imagePath}`;
  };

  // Get event pricing display
  const getEventPricing = (event) => {
    if (!event) return 'Contact for price';
    
    // If multiple ticket pricing is enabled
    if (event.isMultiTicketPrizing) {
      if (event.ticketStartingPrice && event.ticketEndingPrice) {
        return `₹${event.ticketStartingPrice} - ₹${event.ticketEndingPrice}`;
      } else if (event.ticketStartingPrice) {
        return `₹${event.ticketStartingPrice}+`;
      } else if (event.ticketEndingPrice) {
        return `₹${event.ticketEndingPrice}`;
      }
    }
    
    // Single ticket pricing
    if (event.ticketPrizing && event.ticketPrizing > 0) {
      return `₹${event.ticketPrizing}`;
    }
    
    // Fallback to event.price if available
    if (event.price) {
      return `₹${event.price}`;
    }
    
    return 'Free';
  };

  // Fetch categories data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const response = await getData('/event-category/select');
        if (response && Array.isArray(response)) {
          // Map categories with icons
          const categoryIconMap = {
            'Academic': AcadamicIcon,
            'Technology': TechnologyIcon,
            'Entertainment': entertaimentIcon,
            'Career': CareerIcon,
            'Sports': SportIcon,
            'Culture': CultureIcon,
            'Workshops': WorkshopesIcon,
          };
          
          const mappedCategories = response.map(category => ({
            ...category,
            icon: categoryIconMap[category.value] || TechnologyIcon // Default icon
          }));
          
          setCategories(mappedCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch destinations data
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setDestinationsLoading(true);
        const response = await getData('/destination/top');
        if (response && Array.isArray(response)) {
          setDestinations(response);
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setDestinationsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        let url = `/event?skip=${currentPage * 50}&limit=50`;
        if (selectedCategory) {
          url += `&eventCategory=${selectedCategory.id}`;
        }
        if (searchQuery.trim()) {
          url += `&searchkey=${encodeURIComponent(searchQuery.trim())}`;
        }
        if (selectedLocation) {
          url += `&nearbyCity=${selectedLocation._id}`;
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

    fetchEvents();
  }, [currentPage, selectedCategory, searchQuery, selectedLocation]);

  // Category selection handler
  const handleCategorySelect = (category) => {
    if (category.id === 'all') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setCurrentPage(0); // Reset to first page when changing category
  };

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setCurrentPage(0); // Reset to first page when searching
    // The useEffect will handle the actual search
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setCurrentPage(0);
  };

  // Location selection handler
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setCurrentPage(0);
  };

  // Clear location filter
  const clearLocation = () => {
    setSelectedLocation(null);
    setCurrentPage(0);
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

  // Create filter labels with "All" option plus categories
  const getFilterLabels = () => {
    const allOption = { id: 'all', value: 'All', isSpecial: true };
    return [allOption, ...categories];
  };

  return (
    <div className="bg-white w-full flex flex-col gap-[50px] items-center justify-center">
      <div className="w-full px-5 flex gap-5 flex-col items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <div
            className="w-full max-w-[var(--max-container-width)]"
            style={containerStyle}
          >
            <Navbar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handleSearch}
            />
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
                {searchQuery ? `Search Results for "${searchQuery}"` : 
                 selectedCategory ? `${selectedCategory.value} Events` : 
                 selectedLocation ? `Events in ${selectedLocation.title}` :
                 'All Events'}
              </h1>
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
              {!searchQuery && (
                <div className="flex gap-3 overflow-x-auto scrollbar-hide mb-6 sm:flex-wrap justify-center">
                  {categoriesLoading ? (
                    // Loading skeleton for categories
                    Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 px-[13px] py-[3px] text-[14px] rounded-[6px] border border-gray-300 bg-gray-200 animate-pulse h-8 w-20"
                      />
                    ))
                  ) : (
                    getFilterLabels().map((filter, i) => (
                      <button
                        key={filter.id || i}
                        onClick={() => handleCategorySelect(filter)}
                        className={`flex-shrink-0 px-[13px] py-[3px] text-[14px] rounded-[6px] border transition ${
                          (filter.id === 'all' && !selectedCategory) || 
                          (selectedCategory && selectedCategory.id === filter.id)
                            ? "bg-[#CDD0D5] text-black border-none"
                            : "text-[#868C98] hover:bg-gray-100 border-gray-300"
                        }`}
                      >
                        {filter.value}
                      </button>
                    ))
                  )}
                </div>
              )}
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
                    <Link key={event._id} href={`/event-details?slug=${event.slug}`}>
                      <Card
                        image={getImageUrl(event.banner)}
                        date={formatEventDate(event.startDate, event.endDate)}
                        title={event.title}
                        venue={event.venue}
                        price={getEventPricing(event)}
                        badge={i === 0 ? "Save up to 39%" : ""}
                        variant="latest"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-500 text-lg mb-2">
                    {searchQuery ? `No events found for "${searchQuery}"` : 
                     selectedCategory ? `No ${selectedCategory.value} events found` : 
                     selectedLocation ? `No events found in ${selectedLocation.title}` :
                     'No events found'}
                  </div>
                  {(searchQuery || selectedLocation) && (
                    <div className="flex gap-2 justify-center">
                      {searchQuery && (
                        <button
                          onClick={clearSearch}
                          className="text-[#FF553F] hover:text-[#FF553F]/80 transition-colors"
                        >
                          Clear search
                        </button>
                      )}
                      {selectedLocation && (
                        <button
                          onClick={clearLocation}
                          className="text-[#FF553F] hover:text-[#FF553F]/80 transition-colors"
                        >
                          Clear location
                        </button>
                      )}
                    </div>
                  )}
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
