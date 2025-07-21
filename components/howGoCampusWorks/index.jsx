import React from "react";

export default function HowGoCampusWorks() {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#c8f5d6] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      ),
      title: "Discover Events",
      description: "Browse through hundreds of campus events or search for specific interests"
    },
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#ff7d7d] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>
      ),
      title: "Register & Save",
      description: "Sign up for events with just a click and save them to your personal calendar."
    },
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center ">
          <div className="w-10 h-10 rounded-full bg-[#d8c5ff] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
      ),
      title: "Attend & Connect",
      description: "Join the events, meet new people, and make the most of your campus experience."
    }
  ];

  return (
    <div className=" w-full py-16 px-4 mt-4">
      <div className="w-full">
        <h2 className="text-center text-2xl font-[500] pb-14">How GoCampus Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              {feature.icon}
              <h3 className="text-gray-300 text-xl font-medium mt-6 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-center md:text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
