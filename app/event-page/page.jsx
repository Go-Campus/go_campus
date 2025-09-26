"use client";

import React,{useState, useEffect, useMemo} from "react";
import { InfoCard } from "@/components/infoCard/index";
import {
  aboutEventContent,
  faqs,
  socialIcons,
} from "../../constants/aboutEvent";
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Card from "../../components/destinationCard/index";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import TicketBookingModal from "@/components/modal/TicketBookingModal";
import { getData } from "@/utils/api";
import { useSearchParams } from "next/navigation";

export default function EventPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moreEvents, setMoreEvents] = useState([]);
  const featuredTitles = [
    "Clay Sculpting",
    "The Universe in a Pot",
    "Zoreko",
    "Music Quiz",
  ];

  const featuredVenues = [
    "Venue to be announced, Delhi",
    "Nojoto Creator Hub, Delhi",
    "Venue to be announced, Delhi",
    "Venue to be announced, Delhi",
  ];

  const featuredPrices = [
    "2499",
    "499",
    "2499",
    "2499",
    "2499",
    "5699",
    "499",
    "5317",
  ];
  const MAxwidth = "1500px";
  const [registerModal, setRegisterModal] = useState(false);
  const [modalType, setModalType] = useState('register');
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 499;

  // Build image URL via CDN or API base
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/Events/event2.svg";
    if (typeof imagePath !== 'string') return "/images/Events/event2.svg";
    // If it's a public asset path, return as-is
    if (imagePath.startsWith('/')) return imagePath;
    // If it's already a full URL, return as-is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL ||'https://event-manager.syd1.cdn.digitaloceanspaces.com';
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

  useEffect(() => {
    const fetchDetails = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const evRes = await getData(`/event?slug=${encodeURIComponent(slug)}&limit=1`);
        const ev = evRes?.response?.[0] || null;
        // const franchise = evRes?.response?.[0]?.franchise?._id || evRes?.response?.[0]?.franchise || null;
        setEvent(ev);
        if (ev?._id) {
          const tkRes = await getData(`/ticket?event=${encodeURIComponent(ev._id)}`);
          setTickets(tkRes?.response || []);
          console.log(tkRes, "tkRes");

          // Fetch more events from the same franchise (organizer)
          // const franchiseId = typeof ev.franchise === 'object' ? ev.franchise?._id : ev.franchise;
          const franchise = tkRes?.response?.[0]?.event?.franchise || tkRes?.response?.[0]?.event?.franchise?._id || null;
          console.log(franchise, "franchise");
          if (franchise) {
            const moreRes = await getData(`/event?franchise=${encodeURIComponent(franchise)}&limit=8&skip=0`);
            console.log(moreRes, "moreRes");
            const list = (moreRes?.response || [])
            .filter((e) => e._id !== ev._id);
            console.log(list, "list");
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
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [slug]);

  const containerStyle = {
    "--max-container-width": "1400px", // Match home page max width
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const closeModal = () => {
    setRegisterModal(false);
    setModalType('register'); // Reset modal type when closing
  };

  const handleCheckout = () => {
    setModalType('checkout');
  };

// modal function 

const openModal = ()=>{
setRegisterModal(true)

}
  return (
    <div className="bg-white w-full flex flex-col  items-center justify-center">
      <div
        className="w-full max-w-[var(--max-container-width)]"
        style={containerStyle}
      >
        <Navbar />
      </div>

      {/* Top Grid */}
      <div
        className="w-full max-w-[var(--max-container-width)] px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-10"
        style={containerStyle}
      >
        {/* Poster */}
        <div className="lg:col-span-2 md:h-[605px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-lg relative ">
          <Image
            src={getImageUrl(event?.banner || event?.logo || "/images/Events/event2.svg")}
            alt={event?.title || "Event"}
            fill
            className="object-cover"
          />
        </div>

        {/* Info Cards */}
        <div className="flex flex-col justify-between space-y-4 h-full">
          <InfoCard
            bgColor="bg-red-50"
            borderColor="border-red-100"
            iconSrc="/icons/Calendar.svg"
            decorativeImageSrc="/images/decorativeCalendar.svg"
          />
          <InfoCard
            bgColor="bg-red-50"
            borderColor="border-orange-100"
            iconSrc="/icons/locationWhite.svg"
            decorativeImageSrc="/images/decorativeLocation.svg"
          />
        </div>
      </div>

      {/* Details and Register */}
      <div
        className=" w-full max-w-[var(--max-container-width)] px-4 grid grid-cols-1 lg:grid-cols-3 gap-6"
        style={containerStyle}
      >
        {/* Details */}
        <div className="lg:col-span-2">
          <h1 className=" font-medium text-[42px] leading-[55px] capitalize align-middle">
            {event?.title || 'Event Title'}
          </h1>

          <div className="border-t border-gray-200 pt-4 ">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/icons/TablonIcon.svg"}
                    alt="Tablon Global"
                    width={50}
                    height={30}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-lg text-gray-900 font-medium">
                  By <span className="font-semibold">Tablon Global</span>
                </div>
              </div>

              <button className="px-5 py-2 text-sm bg-gray-200 text-gray-600 rounded border border-gray-300">
                Follow
              </button>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-2" />

          {/* About Event */}
          <div className="w-ful">
            <h3 className="font-medium text-[22px] leading-[60px] capitalize align-middle">About Event</h3>
            {event?.description ? (
              <div className="text-[18px] leading-[28px] text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: event.description }} />
            ) : (
              aboutEventContent.paragraphs.map((para, index) => (
                <p key={index} className=" text-[18px] leading-[28px] text-gray-700 mb-4">{para}</p>
              ))
            )}
            <h3 className="font-medium text-[22px] leading-[60px] capitalize align-middle">
              {aboutEventContent.listTitle}
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-[18px] leading-[37px] space-y-2">
              {aboutEventContent.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="mt-10">
            <h2 className="font-semibold text-[22px] leading-[60px] capitalize align-middle">
              Location
            </h2>
            <div className="bg-red-50 rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 flex items-start space-x-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center p-1"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #FFC7C7, #FF5F4A)",
                  }}
                >
                  <Image
                    src={"/icons/locationWhite.svg"}
                    alt="Icon"
                    width={50}
                    height={30}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-[16px] leading-[20px] ">{event?.venue || 'Venue to be announced'}</h3>
                </div>
              </div>
              <div
                className="w-full h-[500px] m-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/map.svg')" }}
              ></div>
            </div>
          </div>

          {/* Tickets */}
          {tickets.length > 0 && (
            <div className="mt-10">
              <h2 className="font-semibold text-[22px] leading-[60px] capitalize align-middle">Tickets</h2>
              <ul className="list-disc list-inside text-gray-700 text-[16px] leading-[28px] space-y-1">
                {tickets.map((t) => (
                  <li key={t._id}>
                    <span className="font-medium">{t.title}</span>
                    {" "}- <span className="text-gray-600">{t.enablePricing ? (t.price ? `₹${t.price}` : 'Paid') : 'Free'}</span>
                    {t.status ? ` • ${t.status}` : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs */}
          <div className="mt-10">
            <div className="space-y-4  text-[18px] leading-[37px] ">
              {faqs.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          {/* Organizer Info */}
          <div className="mt-10 bg-red-50 rounded-2xl border border-red-100 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center">
                  <Image
                    src={"/icons/TablonIcon.svg"}
                    alt="Tablon Global"
                    width={50}
                    height={30}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  By Tablon Global
                </h3>
              </div>
              <div className="self-start sm:self-center">
                <button className="w-full sm:w-auto bg-[#FF5F4A] px-3 py-2 text-white rounded-md">
                  Follow
                </button>
              </div>
            </div>

            <p className="text-gray-700 text-[18px] leading=[28px] mb-4">
              Tablon is B2B Networking company to connect Investors & Founders.
              Both Investors & Founders believe meeting in-person is far more
              effective to discuss investment rather than sending emails, cold
              calls & knocking on doors.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <a
                href="https://www.tablonglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-sm hover:underline break-all"
              >
                www.tablonglobal.com
              </a>
              <div className="flex items-center space-x-2">
                {socialIcons.map((icon, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
                    aria-label={icon.name}
                  >
                    {icon.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFEDEA] border border-[#FFD4D4]  rounded-[30px] shadow-md h-fit w-full max-w-sm mx-auto">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden p-5 ">
            <Image
              src={getImageUrl(event?.banner || event?.logo || "/images/Events/event2.svg")}
              alt={event?.title || "Event"}
              width={300}
              height={200}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Title + Details */}
          <h4 className="text-center font-semibold text-gray-900 text-lg mb-1">{event?.title || 'Event Title'}</h4>
          {formattedDateRange && (
            <p className="text-center text-sm text-gray-700">{formattedDateRange}</p>
          )}
          {event?.venue && (
            <p className="text-center text-sm text-gray-600 mb-2">{event.venue}</p>
          )}

          {/* Custom Divider with Notches */}
          <div className="relative flex items-center justify-center my-3">
            {/* Left Notch */}
            <div className="absolute -left-3 w-5 h-5 bg-white rounded-full z-10 border-r border-[#FFD4D4]" />
            {/* Right Notch */}
            <div className="absolute -right-3 w-5 h-5 bg-white rounded-full z-10 border-l border-[#FFD4D4]" />
            {/* Dotted Divider */}
            <div className="w-full border-t border-dotted border-[#FFD4D4]" />
          </div>

          {/* Button */}
          <div className="flex justify-center mb-4">
            <button  onClick={openModal} className="px-5 py-2 text-white bg-[#FF5F4A] rounded-md text-sm font-medium">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* More Events Section */}
      <section
        className="w-full max-w-[var(--max-container-width)] px-4 gap-6 mt-5"
        style={containerStyle}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          More events from this organizer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(moreEvents.length ? moreEvents : []).map((ev) => (
            <Link key={ev._id} href={`/event-page?slug=${ev.slug}`}>
              <Card
                image={getImageUrl(ev.banner)}
                date={formattedDateRange}
                title={ev.title}
                venue={ev.venue}
                price={ev.ticketType === 'paid' ? (ev.price || '—') : 'Free'}
                badge={""}
                variant="varient"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Events */}
      <section
        className="w-full max-w-[var(--max-container-width)] px-4 gap-6 my-10"
        style={containerStyle}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Other Events You May Like
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredTitles.map((t, i) => (
            <Card
              image={`/images/Events/event${i + 1}.svg`}
              date="18 June – 15 July | 03:00 PM"
              title={t}
              venue={featuredVenues[i]}
              price={featuredPrices[i]}
              badge={i === 0 ? "Save up to 39%" : ""}
              variant="latest"
            />
          ))}
        </div>
      </section>

      {/* Ticket Booking Modal */}
      <TicketBookingModal
        isOpen={registerModal}
        onClose={closeModal}
        eventTitle="Best Comedy Lineup ft. Famous Star Comedians"
        eventDateTime="Sat 24 August 2024 · 10:00 AM - 14:00PM IST"
        ticketPrice={ticketPrice}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        onCheckout={handleCheckout}
        type={modalType}
      />

      <Footer />
    </div>
  );
}
