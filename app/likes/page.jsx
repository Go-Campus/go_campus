"use client";
import Card from "@/components/destinationCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";

export default function Likes() {
  // Define a CSS variable for max-width that can be used throughout the component
  const containerStyle = {
    "--max-container-width": "1400px" // Change this value to update all container widths
  };

  const likedEvents = [
    {
      image: "/images/Events/event1.svg",
      date: "18 June – 15 July | 03:00 PM",
      title: "Radhika Das India Tour 2025 |",
      place: "Delhi",
      venue: "Venue to be announced, Delhi",
      price: "2,499",
      variant: "likes",
    },
    {
      image: "/images/Events/event2.svg",
      date: "10 August | 6:00 PM",
      title: "Weekend Laugh Show | ",
      place: "Mumbai",
      venue: "Juhu Theatre, Mumbai",
      price: "1,999",
      variant: "likes",
    },
    {
      image: "/images/Events/event1.svg",
      date: "18 June – 15 July | 03:00 PM",
      title: "Radhika Das India Tour 2025 |",
      place: "Delhi",
      venue: "Venue to be announced, Delhi",
      price: "2,499",
      variant: "likes",
    },
    {
      image: "/images/Events/event2.svg",
      date: "10 August | 6:00 PM",
      title: "Weekend Laugh Show | ",
      place: "Mumbai",
      venue: "Juhu Theatre, Mumbai",
      price: "1,999",
      variant: "likes",
    },
  ];

  const popularCities = [
    "Food Festival",
    "Free Events",
    "Free Events",
    "Free Events",
    "Job Fare",
    "Things to do in Kochi",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Free Events",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Things to do in Kannur",
    "Food Festival",
  ];

  return (
    <div className="bg-white w-full flex flex-col gap-[98px] items-center justify-center">
      <div className="w-full px-5 flex gap-5 flex-col items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[var(--max-container-width)]" style={containerStyle}>
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[var(--max-container-width)]" style={containerStyle}>
          <div className="w-full flex flex-col gap-[50px]">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 sm:space-x-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-blue-600 transition">
                    Home
                  </a>
                </li>
                <li>/</li>
                <li className="text-gray-800 font-medium">Likes</li>
              </ol>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight">
              Likes
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-auto w-full">
              {likedEvents.map((event, index) => (
                <Card key={index} {...event} />
              ))}
            </div>
          </div>

          {/* Trending Section */}
          <section className="w-full mt-12 mb-8">
            <div className="flex w-full py-[36px] justify-between">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Trending Searches
              </h2>
              <button className="flex gap-2 items-center text-[#FF553F]">
                See All
                <span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {popularCities.map((city, i) => (
                <button
                  key={i}
                  className="flex items-center gap-1 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 rounded bg-[#F6F8FA] transition hover:bg-gray-100"
                >
                  <img src="/icons/search.svg" alt="search" className="w-4 h-4" />
                  {city}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}