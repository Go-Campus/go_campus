'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EventPageNew() {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 26,
    minutes: 34,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-semibold">GoCampus</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Blog</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Events</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Tickets</a>
        </nav>
        
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Register Now
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            filter: 'blur(1px)'
          }}
        ></div>
        
        <div className="relative z-20 h-full flex items-center justify-between px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Great Indian Famous<br />
              Campus Music<br />
              Concert
            </h1>
          </div>
          
          <div className="text-right text-white">
            <div className="text-2xl font-semibold mb-2">12 January 2025</div>
            <div className="text-lg">Rajagiri Campus, Kochi</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-black mb-8">About</h2>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-purple-500 rounded rotate-45"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                tti dignissim, eget odio non risus est. sodales. libero, libero, tincidunt adipiscing dui viverra non non tincidunt sit urna. Praesent eget vehicula, elit lobortis, nec placerat nec commodo tincidunt placerat. non, ipsum Cras ex Nullam Morbi dignissim, eget odio non risus est. sodales. libero, libero, tincidunt adipiscing dui viverra non non.
              </p>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">20+</div>
              <div className="text-gray-600">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">300+</div>
              <div className="text-gray-600">Delegates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">03+</div>
              <div className="text-gray-600">Stages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-5xl font-bold mb-6 md:mb-0">Events</h2>
            
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium">Jan 22 Mon</button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600">Jan 23 Mon</button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600">Jan 24 Mon</button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600">Jan 25 Mon</button>
            </div>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex-shrink-0 w-80 bg-white rounded-t-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-600 relative">
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    Music Concert
                  </div>
                </div>
                <div className="p-6 bg-white text-black">
                  <h3 className="text-xl font-bold mb-2">Great Indian Famous Campus Music Concert</h3>
                  <p className="text-lg mb-1">Antony Josse</p>
                  <p className="text-gray-500 text-sm mb-4">DJ Artist</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>Sep 15 | 09.00AM</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Conference HII</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guests Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Guests</h2>
          
          <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
            {[
              { name: "Antony Josse", role: "DJ Artist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Micayel Ali", role: "Pop Singer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Beelie Arena", role: "Pop Singer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Arena Jelli", role: "Pop Singer", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
            ].map((guest, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-t-2xl overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white text-black">
                  <h3 className="text-xl font-bold mb-1">{guest.name}</h3>
                  <p className="text-gray-500 text-sm">{guest.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">Events Starts In</h2>
          
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-6xl font-mono font-bold mb-2">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm underline">Days</div>
            </div>
            <div className="text-6xl font-mono font-bold">:</div>
            <div className="text-center">
              <div className="text-6xl font-mono font-bold mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm underline">Hours</div>
            </div>
            <div className="text-6xl font-mono font-bold">:</div>
            <div className="text-center">
              <div className="text-6xl font-mono font-bold mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm underline">Minutes</div>
            </div>
            <div className="text-6xl font-mono font-bold">:</div>
            <div className="text-center">
              <div className="text-6xl font-mono font-bold mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm underline">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-12">Tickets</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Mika Singh Concert", 
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                originalPrice: 49,
                currentPrice: 39
              },
              { 
                title: "Billie Eilish Concert", 
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                originalPrice: 49,
                currentPrice: 39
              },
              { 
                title: "The Band Concert", 
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                originalPrice: 49,
                currentPrice: 39
              }
            ].map((ticket, index) => (
              <div key={index} className="bg-white rounded-t-2xl overflow-hidden shadow-lg border-t-4 border-dashed border-gray-300">
                <div className="h-48 relative">
                  <Image
                    src={ticket.image}
                    alt={ticket.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Great Indian Famous Campus Music Concert</h3>
                  <p className="text-gray-600 text-sm mb-4">12 January 2025 | Rajagiri Campus, Kochi</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through">${ticket.originalPrice}</span>
                      <span className="text-2xl font-bold text-black">${ticket.currentPrice}</span>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                      Get Your Ticket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-5xl font-bold text-black mb-4 md:mb-0">Location</h2>
            <p className="text-gray-700 text-lg">Cial Convention Center, Athani, Nedumbassheri, Cochin</p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841123456789!2d76.2678!3d10.0473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAyJzUwLjMiTiA3NsKwMTYnMDQuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Other Events Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black">Other Event you May like</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span className="text-gray-600">‹</span>
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span className="text-gray-600">›</span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Radhika Das India Tour 2025 | Delhi",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "18 June - 15 July | 03:00 PM",
                location: "Venue to be announced, Delhi",
                price: "₹2,499"
              },
              {
                title: "Delhi Beatbox Championship",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "18 June - 15 July | 03:00 PM",
                location: "IndiOwl - Platform 13, Delhi",
                price: "₹5699"
              },
              {
                title: "Worlds of Wonder (WOW) - Water Park",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "18 June - 15 July | 03:00 PM",
                location: "Worlds of Wonder, Noida",
                price: "₹5317",
                badge: "Save up to 39%"
              },
              {
                title: "Best Comedy Lineup ft. Famous Star Comedians",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                date: "18 June - 15 July | 03:00 PM",
                location: "Nojoto Creator Hub, Delhi",
                price: "₹499"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  {event.badge && (
                    <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                      {event.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-2">{event.date}</p>
                  <h3 className="font-bold text-black mb-2 line-clamp-2">{event.title}</h3>
                  <div className="flex items-center mb-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    <span className="text-gray-500 text-sm">{event.location}</span>
                  </div>
                  <div className="text-xl font-bold text-black">{event.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-400 mb-8">Join Us. Enjoy. Create. Succeed. Shape Your Future.</p>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-semibold">GoCampus</span>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>© Go campus 2025 - Copyright</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">COMPANY</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Us</div>
                <div>Career Guides</div>
                <div>Licensing & Certification</div>
                <div>Backers</div>
                <div>FAQs</div>
                <div>Support</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">FOR RECRUITERS</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Hire Healthcare Professionals</div>
                <div>Why Recruit with Lanstitut?</div>
                <div>Employer Dashboard</div>
                <div>Language & Skill Verification</div>
                <div>Partner with Us</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">FOR CANDIDATES</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Find Jobs</div>
                <div>How It Works</div>
                <div>Language Training</div>
                <div>Visa & Relocation Assistance</div>
                <div>Candidate Dashboard</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
              <span className="text-white text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
              <span className="text-white text-sm">in</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
              <span className="text-white text-sm">📷</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
              <span className="text-white text-sm">𝕏</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
