'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getData } from '@/utils/api';

export default function EventPageNew() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moreEvents, setMoreEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Build image URL via CDN or API base
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/Events/event2.svg";
    if (typeof imagePath !== 'string') return "/images/Events/event2.svg";
    // If it's a public asset path, return as-is
    if (imagePath.startsWith('/')) return imagePath;
    // If it's already a full URL, return as-is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://event-manager.syd1.cdn.digitaloceanspaces.com';
    // Ensure single slash between base and path
    return `${cdnUrl.replace(/\/$/, '')}/${imagePath.replace(/^\//, '')}`;
  };

  const formattedDateRange = useMemo(() => {
    if (!event?.startDate || !event?.endDate) return null;
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const startDay = start.getDate();
    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const startYear = start.getFullYear();
    const startTime = start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const endDay = end.getDate();
    const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
    if (startYear === end.getFullYear() && startMonth === endMonth && startDay === endDay) {
      return `${startDay} ${startMonth} ${startYear} | ${startTime}`;
    }
    return `${startDay} ${startMonth} – ${endDay} ${endMonth} | ${startTime}`;
  }, [event]);

  // Calculate countdown from event start date
  useEffect(() => {
    if (!event?.startDate) return;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const eventTime = new Date(event.startDate).getTime();
      const difference = eventTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [event?.startDate]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const evRes = await getData(`/event?slug=${encodeURIComponent(slug)}&limit=1`);
        const ev = evRes?.response?.[0] || null;
        setEvent(ev);
        
        if (ev?._id) {
          const tkRes = await getData(`/ticket?event=${encodeURIComponent(ev._id)}`);
          setTickets(tkRes?.response || []);

          // Fetch more events from the same franchise (organizer)
          const franchise = tkRes?.response?.[0]?.event?.franchise || tkRes?.response?.[0]?.event?.franchise?._id || null;
          if (franchise) {
            const moreRes = await getData(`/event?franchise=${encodeURIComponent(franchise)}&limit=8&skip=0`);
            const list = (moreRes?.response || []).filter((e) => e._id !== ev._id);
            setMoreEvents(list);
          } else {
            setMoreEvents([]);
          }
        } else {
          setTickets([]);
          setMoreEvents([]);
        }
      } catch (e) {
        console.error('Failed to load event details', e);
        setEvent(null);
        setTickets([]);
        setMoreEvents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [slug]);

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
        {loading ? (
          <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${getImageUrl(event?.banner || event?.logo || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')}")`,
              filter: 'blur(1px)'
            }}
          ></div>
        )}
        
        <div className="relative z-20 h-full flex items-center justify-between px-6">
          <div className="max-w-2xl">
            {loading ? (
              <div className="space-y-4">
                <div className="h-16 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-16 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-16 bg-gray-600 rounded animate-pulse"></div>
              </div>
            ) : (
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                {event?.title || 'Event Title'}
              </h1>
            )}
          </div>
          
          <div className="text-right text-white">
            {loading ? (
              <div className="space-y-2">
                <div className="h-8 w-40 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-6 w-32 bg-gray-600 rounded animate-pulse"></div>
              </div>
            ) : (
              <>
                <div className="text-2xl font-semibold mb-2">
                  {formattedDateRange || 'Date to be announced'}
                </div>
                <div className="text-lg">{event?.venue || 'Venue to be announced'}</div>
              </>
            )}
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
              {loading ? (
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
                </div>
              ) : (
                <div className="text-gray-700 text-lg leading-relaxed">
                  {event?.description ? (
                    <div dangerouslySetInnerHTML={{ __html: event.description }} />
                  ) : (
                    <p>Event description will be available soon. Stay tuned for more details about this exciting event!</p>
                  )}
                </div>
              )}
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
            
            {/* Date filters - keeping design but will be functional when API is available */}
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium">Jan 22 Mon</button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600">Jan 23 Mon</button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600">Jan 24 Mon</button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600">Jan 25 Mon</button>
            </div>
          </div>
          
          {loading ? (
            <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex-shrink-0 w-80 bg-gray-700 rounded-t-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-600"></div>
                  <div className="p-6 bg-gray-700">
                    <div className="h-6 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded mb-1"></div>
                    <div className="h-4 bg-gray-600 rounded mb-4 w-2/3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : moreEvents.length > 0 ? (
            <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
              {moreEvents.slice(0, 4).map((ev) => (
                <div key={ev._id} className="flex-shrink-0 w-80 bg-white rounded-t-2xl overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src={getImageUrl(ev.banner || ev.logo)}
                      alt={ev.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                      {ev.category || 'Event'}
                    </div>
                  </div>
                  <div className="p-6 bg-white text-black">
                    <h3 className="text-xl font-bold mb-2">{ev.title}</h3>
                    <p className="text-lg mb-1">{ev.franchise?.name || 'Organizer'}</p>
                    <p className="text-gray-500 text-sm mb-4">Event Organizer</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="mr-2">🕐</span>
                        <span>{ev.startDate ? new Date(ev.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' | ' + new Date(ev.startDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : 'TBA'}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span>{ev.venue || 'Venue TBA'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p>No other events from this organizer available at the moment.</p>
            </div>
          )}
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
          <h2 className="text-3xl font-semibold mb-12">Event Starts In</h2>
          
          {loading ? (
            <div className="flex justify-center space-x-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center">
                  <div className="text-6xl font-mono font-bold mb-2 h-16 bg-gray-700 rounded animate-pulse"></div>
                  <div className="text-orange-500 text-sm underline h-4 w-12 bg-gray-700 rounded animate-pulse mx-auto"></div>
                </div>
              ))}
            </div>
          ) : event?.startDate ? (
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
          ) : (
            <div className="text-gray-400">
              <p>Event date will be announced soon</p>
            </div>
          )}
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-12">Tickets</h2>
          
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-t-2xl overflow-hidden shadow-lg border-t-4 border-dashed border-gray-300 animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-12 bg-gray-200 rounded"></div>
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                      </div>
                      <div className="h-8 w-32 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : tickets.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {tickets.map((ticket, index) => (
                <div key={ticket._id || index} className="bg-white rounded-t-2xl overflow-hidden shadow-lg border-t-4 border-dashed border-gray-300">
                  <div className="h-48 relative">
                    <Image
                      src={getImageUrl(event?.banner || event?.logo || "/images/Events/event2.svg")}
                      alt={event?.title || "Event"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{event?.title || 'Event Title'}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {formattedDateRange || 'Date TBA'} | {event?.venue || 'Venue TBA'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {ticket.enablePricing && ticket.paymentAmount && (
                          <>
                            <span className="text-gray-400 line-through">₹{ticket.paymentAmount + 10}</span>
                            <span className="text-2xl font-bold text-black">₹{ticket.paymentAmount}</span>
                          </>
                        )}
                        {!ticket.enablePricing && (
                          <span className="text-2xl font-bold text-green-600">Free</span>
                        )}
                        {ticket.enablePricing && !ticket.paymentAmount && (
                          <span className="text-2xl font-bold text-black">Paid</span>
                        )}
                      </div>
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                        {ticket.enablePricing ? 'Get Your Ticket' : 'Get Free Ticket'}
                      </button>
                    </div>
                    {ticket.title && (
                      <p className="text-sm text-gray-500 mt-2">{ticket.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>Ticket information will be available soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-5xl font-bold text-black mb-4 md:mb-0">Location</h2>
            {loading ? (
              <div className="h-6 w-80 bg-gray-200 rounded animate-pulse"></div>
            ) : (
              <p className="text-gray-700 text-lg">{event?.venue || 'Venue to be announced'}</p>
            )}
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {loading ? (
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841123456789!2d76.2678!3d10.0473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAyJzUwLjMiTiA3NsKwMTYnMDQuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
      </section>

      {/* Other Events Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black">Other Events You May Like</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span className="text-gray-600">‹</span>
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span className="text-gray-600">›</span>
              </button>
            </div>
          </div>
          
          {loading ? (
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : moreEvents.length > 0 ? (
            <div className="grid md:grid-cols-4 gap-6">
              {moreEvents.slice(0, 4).map((ev) => (
                <div key={ev._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 relative">
                    <Image
                      src={getImageUrl(ev.banner || ev.logo)}
                      alt={ev.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">
                      {ev.startDate ? new Date(ev.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' | ' + new Date(ev.startDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : 'Date TBA'}
                    </p>
                    <h3 className="font-bold text-black mb-2 line-clamp-2">{ev.title}</h3>
                    <div className="flex items-center mb-3">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                      <span className="text-gray-500 text-sm">{ev.venue || 'Venue TBA'}</span>
                    </div>
                    <div className="text-xl font-bold text-black">
                      {ev.ticketType === 'paid' ? (ev.price ? `₹${ev.price}` : 'Paid') : 'Free'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>No other events available at the moment.</p>
            </div>
          )}
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
