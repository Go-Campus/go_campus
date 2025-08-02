"use client";

import React, { useState } from "react";
import { InfoCard } from "@/components/infoCard/index";
import {
  aboutEventContent,
  faqs,
  socialIcons,
} from "../../constants/aboutEvent";
import { Calendar, ChevronDown, Clock, Facebook, MapPin, MessageCircleMore, Users, Youtube } from "lucide-react";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Card from "../../components/destinationCard/index";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import Footer from "@/components/footer";
import TicketBookingModal from "@/components/modal/TicketBookingModal";
import { EventPAgeboxIcon, LocationMap, SideTicket } from "@/public";
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EventPage() {
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
  const [modalType, setModalType] = useState("register");
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 499;

  const containerStyle = {
    "--max-container-width": "1400px", // Match home page max width
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const closeModal = () => {
    setRegisterModal(false);
    setModalType("register"); // Reset modal type when closing
  };

  const handleCheckout = () => {
    setModalType("checkout");
  };

  // modal function

  const openModal = () => {
    setRegisterModal(true);
  };


  
  const socialIcons = [
    { icon: <FontAwesomeIcon  color="#525866" icon={faFacebookF} />, link: "https://facebook.com" },
    { icon: <FontAwesomeIcon   color="#525866" icon={faWhatsapp} />, link: "https://wa.me" },
    { icon: <FontAwesomeIcon   color="#525866"  icon={faInstagram} />, link: "https://instagram.com" },
    { icon: <FontAwesomeIcon  color="#525866" icon={faYoutube} />, link: "https://youtube.com" },
  ]
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
        className="w-full max-w-[var(--max-container-width)]   flex"
        style={containerStyle}
      >
        {/* Poster */}
        <div className="w-full gap-[34px] py-[68px] px-4 flex md:flex-row flex-col">
          <div className="w-full md:w-[50%]">
            <Image
              src="/images/Events/event2.svg"
              alt="Event 2"
              width={10} // set a large width
              height={100}
              className="w-[100%] h-[600px] rounded-2xl object-cover"
            />
          </div>

          <div className="w-full md:w-[50%] flex h-[100%]    flex-row md:flex-col gap-[20px] ">
            <div className="w-full md:h-[50%]  h-[100%]">
              <InfoCard
                bgColor="bg-red-50"
                borderColor="border-red-100"
                iconSrc="/icons/Calendar.svg"
                decorativeImageSrc="/images/decorativeCalendar.svg"
              />
            </div>
            <div className="w-full md:h-[50%]  h-[100%]">
              <InfoCard
                bgColor="bg-red-50"
                borderColor="border-red-100"
                iconSrc="/icons/Calendar.svg"
                decorativeImageSrc="/images/decorativeCalendar.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details and Register */}

      <div
        style={containerStyle}
        className="  bg-green-300 justify-between w-full px-5 flex md:flex-row flex-col max-w-[var(--max-container-width)]"
      >
        <div className="md:w-[60%] w-full ">
          <div>
            <h1 className="  text-[42px] font-[500] capitalize align-middle">
              Best Comedy Lineup ft. Famous
              <br /> Star Comedians
            </h1>
          </div>

          {/* second  */}
          <div className="flex flex-col w-full  gap-[25px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[18px] font-[400]">About Event</h1>

              <p className="leading-[28px] text-[18px] font-[400] text-[#404040]">
                Kerala's biggest and most awaited dentistry expo is back in full
                force. KEDDA Dental Expo 2023 organized by Kerala Dental Dealers
                Association will be held on the 12th and 13th of August at CIAL
                Convention Center in Nedumbassery, Coachin. Don’t miss out the
                Kerala’s Biggest Dental Trade Fair. Schedule your visit to the
                CIAL Convention Center on the 12th and 13th of August 2023 for
                Kerala's Grand Dental Event, the KEDDA Dental Expo 2023.
              </p>

              <p className="leading-[28px] text-[18px] font-[400] text-[#404040]">
                This expo will feature 100+ National and international
                exhibitors from the reputable dental industry displaying a
                comprehensive range of innovative dental equipments,
                consumables, and accessories. All dentists and dental
                professionals are invited to attend the expo, which is hosted by
                the Kerala Dental Dealers Association and take advantage of the
                exclusive expo discounts offered by the exhibitors.
              </p>
            </div>

            {/* third  */}

            <div>
              <h1 className="text-[22px] font-[500]">Key Features</h1>
              <ul className="list-disc pl-5 flex flex-col gap-[12px]">
                <li className="text-[#292929] text[18px] font-[300]">
                  Submit dessert recipe and photo of the dish.
                </li>
                <li className="text-[#292929] text[18px] font-[300]">
                  Photo should make dessert look appetizing.
                </li>
                <li className="text-[#292929] text[18px] font-[300]">
                  Judges select top 20 based on recipe/photo quality,
                  creativity, and originality.
                </li>
                <li className="text-[#292929] text[18px] font-[300]">
                  Final 120 must prepare dessert in person on May 19th.
                </li>
                <li className="text-[#292929] text[18px] font-[300]">
                  Judging criteria include taste, presentation, creativity, and
                  overall appeal.
                </li>
                <li className="text-[#292929] text[18px] font-[300]">
                  Winner announced at end of competition.
                </li>
              </ul>
            </div>

            {/* location  */}

            <div>
              <h1 className="text-[22px] font-[500] mb-2">Location</h1>
              <div className="bg-[#FDDDD266] flex flex-col gap-[16px] py-[20px] px-[26px]">
                <div className="flex gap-[14px]">
                  <div className="w-[44px] h-[44px]">
                    <Image
                      alt="location"
                      width={100}
                      height={100}
                      src={LocationMap}
                    />
                  </div>
                  <div>
                    <h1 className="text-[16px] font-[500]">
                      Cial Convention Center
                    </h1>
                    <p className="text-[12px] font-[400]">
                      Athani, Nedumbassheri, Cochin
                    </p>
                  </div>
                </div>
                <iframe
                  className="w-full h-[300px] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.985857137017!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c8f0e4a3%3A0x20a0c9e143c1b3ef!2sBangalore!5e0!3m2!1sen!2sin!4v1665678894100!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* dropdown  */}

            <div className="w-full ">
            <p className="w-full flex items-center justify-between py-[26px] text-[#0A0D14] text-[16px] font-[500] border-b border-[#CDD0D5]">
            Who can Join this community?
                <span>
                  <ChevronDown size={16} color="#868C98" />
                </span>
              </p>

              <p className="w-full flex items-center justify-between py-[26px] text-[#0A0D14] text-[16px] font-[500] border-b border-[#CDD0D5]">
              Is joining free?
                <span>
                  <ChevronDown size={16} color="#868C98" />
                </span>
              </p>

              <p className="w-full flex items-center justify-between py-[26px] text-[#0A0D14] text-[16px] font-[500] border-b border-[#CDD0D5]">
              Insert your accordion title here{" "}
                <span>
                  <ChevronDown size={16} color="#868C98" />
                </span>
              </p>

              <p className="w-full flex items-center justify-between py-[26px] text-[#0A0D14] text-[16px] font-[500] border-b border-[#CDD0D5]">
              What if I have more questions?{" "}
                <span>
                  <ChevronDown size={16} color="#868C98" />
                </span>
              </p>
            </div>

            {/* box */}

            <div className="bg-[#FFBABA] p-[28px] rounded-[30px] gap-[36px] flex flex-col w-full">
              <div className="w-full justify-between items-center flex">
                <div className=" flex gap-[22px] items-center ">
                  <div
                    style={{
                      backgroundImage: `url(${EventPAgeboxIcon})`,
                      backgroundPosition: "center",
                    }}
                    className="w-[70px]  object-cover h-[70px] rounded-full flex items-center bg-amber-50 justify-center"
                  >
                    {/* <Image src={EventPAgeboxIcon} /> */}
                  </div>
                  <p className="text-[18px] font-[400]">By Tablon Global</p>
                </div>

                <div>
                  <button className="bg-[#FF5F4A] text-white py-[10px] px-[30px] rounded-[10px]">
                    Follow
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[18px] font-[400] leading-[28px] text-[#404040]">
                  Tablon is B2B Networking company to connect Investors &
                  Founders. Both Investors & Founders believe meeting in-person
                  is far more effective to discuss investment rather than
                  sending emails, cold calls & knocking on doors.
                </p>
              </div>

              <div className="w-full flex items-center justify-between">
                <div>
                  <p className=" text-[14px] font-[400] text-[#404040]">
                    www.tablonglobal.com
                  </p>
                </div>

                <div className="flex gap-4 justify-center items-center">
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-200 transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <div 
        style={{
backgroundImage:`url(${SideTicket})`

        }}
        className="  w-full md:w-[30%]">

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
          {featuredTitles.map((t, i) => (
            <Card
              key={i}
              image={`/images/Events/event${i + 1}.svg`}
              date="18 June – 15 July | 03:00 PM"
              title={t}
              venue={featuredVenues[i]}
              price={featuredPrices[i]}
              badge={i === 0 ? "Save up to 39%" : ""}
              variant="varient"
            />
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
