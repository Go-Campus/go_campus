"use client";
import Card from "../../components/destinationCard/index";
import React from "react";
import {
  CardImage,
  PartyImage,
  TechnologyIcon,
  CareerIcon,
  entertaimentIcon,
  SportIcon,
  CultureIcon,
  WorkshopesIcon,
  AcadamicIcon,
  PlaceImage,
  UkImage,
  DubaiImage,
  ProfleColorIcon,
  LockColorIcon,
  SearchColorIcon,
} from "@/public";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  MoveUpRight,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
const HomePage = () => {
  // State for carousel scroll position

  // widthsetup
  // Define a CSS variable for max-width that can be used throughout the component
  const containerStyle = {
    "--max-container-width": "1400px", // Change this value to update all container widths
  };

  const carouselRef = React.useRef(null);

  // Function to handle carousel navigation
  const handleCarouselScroll = (direction) => {
    console.log(`Scrolling carousel ${direction}`);

    if (!carouselRef.current) return;

    const scrollAmount = 300; // Adjust this value based on your needs
    const currentScroll = carouselRef.current.scrollLeft;

    carouselRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  // banner datas
  const heroBanners = [
    {
      image: PartyImage,
      title: ["From Pop", "Ballads to Emo", "Encores"],
      description:
        "Experience the magic as pop ballads transform into emo encores, showcasing.",
      buttonText: "Get Into Music",
    },
  ];
  //  section two categories datas
  const categories = [
    { icon: AcadamicIcon, label: "Academic" },
    { icon: TechnologyIcon, label: "Technology" },
    { icon: entertaimentIcon, label: "Entertainment" },
    { icon: CareerIcon, label: "Career" },
    { icon: SportIcon, label: "Sports" },
    { icon: CultureIcon, label: "Culture" },
    { icon: WorkshopesIcon, label: "Workshops" },
  ];

  const featuredTitles = [
    "Clay Sculpting",
    "The Universe in a Pot",
    "Zoreko",
    "Music Quiz",
    "Radhika Das India Tour 2025 | Delhi",
    "Delhi Beatbox Championship",
    "Weekend Comedy Night",
    "Worlds of Wonder (WOW) – Water Park",
  ];

  const featuredVenues = [
    "Venue to be announced, Delhi",
    "Nojoto Creator Hub, Delhi",
    "Venue to be announced, Delhi",
    "Venue to be announced, Delhi",
    "Venue to be announced, Delhi",
    "IndiOwl – Platform 13, Delhi",
    "Nojoto Creator Hub, Delhi",
    "Worlds of Wonder, Noida",
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

  const howItWorksItems = [
    {
      icon: SearchColorIcon,
      heading: "Discover Events",
      text: "Browse through hundreds of campus events or search for specific interests",
      bgColor: "bg-green-50",
    },
    {
      icon: LockColorIcon,
      heading: "Register & Save",
      text: "Sign up for events with just a click and save them to your personal calendar",
      bgColor: "bg-red-50",
    },
    {
      icon: ProfleColorIcon,
      heading: "Attend & Connect",
      text: "Join the events, meet new people, and make the most of your campus experiences",
      bgColor: "bg-purple-50",
    },
  ];

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

  const popularCities = [
    "Things to do in Abilene",
    "Things to do in Kochi",
    "Things to do in Kannur",
    "Things to do in Coimbatore",
    "Things to do in Calicut",
    "Things to do in Indianapolis",
    "Things to do in Antarctica",
  ];

  const topDestinations = [
    { id: 'mumbai-1', img: CardImage, name: "Mumbai" },
    { id: 'london-1', img: DubaiImage, name: "London" },
    { id: 'dubai-1', img: DubaiImage, name: "Dubai" },
    { id: 'mumbai-2', img: CardImage, name: "Mumbai" },
    { id: 'london-2', img: DubaiImage, name: "London" },
    { id: 'dubai-2', img: DubaiImage, name: "Dubai" },
    { id: 'mumbai-3', img: CardImage, name: "Mumbai" },
    { id: 'london-3', img: DubaiImage, name: "London" },
    { id: 'dubai-3', img: DubaiImage, name: "Dubai" },
  ];

  return (
    <div className=" bg-white w-full flex flex-col gap-[98px] items-center justify-center">
      <div className="w-full  px-5 flex gap-5 flex-col items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <div
            className="w-full max-w-[var(--max-container-width)]"
            style={containerStyle}
          >
            <Navbar />
          </div>
        </div>

        {/* HERO SECTION */}
        <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          {heroBanners.map((banner, index) => (
            <div key={index} className="w-full my-6 ">
              {/* Desktop Layout */}
              <div className="hidden lg:flex relative">
                {/* Left: Image + Content */}
                <div className="relative flex-1 h-[400px] rounded-tr-[38px] rounded-br-[38px] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                  <Image
                    src={banner.image}
                    alt="Hero"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex items-center px-8 py-16">
                    <div className="max-w-lg">
                      <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                        {banner.title.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </h1>
                      <p className="text-gray-300 text-lg mb-6">
                        {banner.description}
                      </p>
                      <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        {banner.buttonText}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Barcode */}
                <div className="relative w-[130px] h-[400px] bg-[#E9E6E6] rounded-tl-[36px] z-10  rounded-bl-[36px]">
                  <div className="absolute top-0 left-[-6px] h-full flex flex-col justify-between py-3 z-20">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full my-[2px]"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex justify-center items-center z-30">
                    <Image
                      width={50}
                      height={200}
                      src="/images/barcode.svg"
                      alt="Barcode"
                      className="w-[50px] h-[200px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block lg:hidden bg-white rounded-[36px] overflow-hidden shadow-md">
                <div className="relative h-[400px]">
                  <Image
                    width={50}
                    height={200}
                    src={banner.image}
                    alt="Hero"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end px-5 pb-6 z-20">
                    <h1 className="text-3xl font-bold text-white leading-snug mb-2">
                      {banner.title.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </h1>
                    <p className="text-white text-sm mb-4">
                      {banner.description}
                    </p>
                    <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full w-fit">
                      {banner.buttonText}
                    </button>
                  </div>
                </div>

                <div className="relative h-[20px] bg-white">
                  <div className="absolute inset-0 border-t border-dotted border-gray-300" />
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-gray-200" />
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-gray-200" />
                </div>

                {/* Mobile Barcode */}
                <div className="bg-white py-4 flex justify-center items-center lg:hidden">
                  <Image
                    width={140}
                    height={60}
                    src="/images/barcode1.svg"
                    alt="Barcode"
                    className="w-[140px] h-[60px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* CATEGORY SECTION */}
        <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <div className="w-full   flex ">
            <div className="flex flex-wrap w-full   gap-4 items-center justify-between">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center  w-[146px] h-[146px] justify-center border border-[#ADADAD40] rounded-[26px] text-center cursor-pointer"
                >
                  <div className="w-10  h-10 ">
                    <Image
                      width={28}
                      height={28}
                      src={category.icon}
                      alt={category.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">
                    {category.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST EVENTS SECTION */}
        <div className="w-full flex  flex-col  gap-[50px]">
          <section className=" w-full">
            <div className=" w-full ">
              <div className=" w-full border-b border-t  flex justify-center items-center border-gray-200">
                <div
                  className="w-full justify-center items-center max-w-[var(--max-container-width)]"
                  style={containerStyle}
                >
                  <h2 className="text-xl    py-[28px] sm:text-2xl font-semibold text-gray-800 ">
                    Latest Events in Lucknow
                  </h2>
                </div>
              </div>
              {/* Filter buttons with horizontal scroll on mobile */}
              <div className=" w-full py-[36px]  flex justify-center items-center border-gray-200">
                <div
                  className="w-full justify-center items-center max-w-[var(--max-container-width)]"
                  style={containerStyle}
                >
                  <div className="flex gap-3  overflow-x-auto scrollbar-hide mb-6 sm:flex-wrap ">
                    {filterLabels.map((label, i) => (
                      <button
                        key={i}
                        className={`flex-shrink-0 px-[13px] py-[3px] text-[14px] rounded-[6px] border ${
                          i === 0
                            ? "bg-[#CDD0D5] text-black  border-none"
                            : "text-[#868C98] hover:bg-gray-100 border-gray-300"
                        } transition`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event cards */}
              <div className="w-full items-center flex justify-center">
                <div
                  className="w-full justify-center items-center max-w-[var(--max-container-width)]"
                  style={containerStyle}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full h-full">
                    {featuredTitles.map((t, i) => (
                      <Card
                        key={i}
                        image={CardImage}
                        date="18 June – 15 July | 03:00 PM"
                        title={t}
                        venue={featuredVenues[i]}
                        price={featuredPrices[i]}
                        badge={i === 0 ? "Save up to 39%" : ""}
                        variant="latest"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURED EVENTS SECTION */}
          <section className="flex flex-col items-center   w-full ">
            <div
              className="w-full justify-center items-center max-w-[var(--max-container-width)]"
              style={containerStyle}
            >
              <div className="flex w-full py-[36px] justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 ">
                  Featured Events
                </h2>
                <button className="flex gap-2 items-center text-[#FF553F]">
                  See All
                  <span>
                    <ArrowRight className="w-4 h-4 " />
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full h-full">
                {featuredTitles.map((t, i) => (
                  <Card
                    key={i}
                    image={CardImage}
                    date="18 June – 15 July | 03:00 PM"
                    title={t}
                    venue={featuredVenues[i]}
                    price={featuredPrices[i]}
                    badge={i === 0 ? "Save up to 39%" : ""}
                    variant="featured"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* TOP DESTINATIONS SECTION */}
          <section className="w-full  items-center flex justify-center">
            <div
              className="w-full justify-center items-center max-w-[var(--max-container-width)]"
              style={containerStyle}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Top destinations
                </h2>
                <div className="hidden sm:flex gap-3">
                  <button
                    onClick={() => handleCarouselScroll("left")}
                    className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition"
                  >
                    <span className="text-xl font-bold">
                      <ChevronLeft className="text-gray-500" />
                    </span>
                  </button>
                  <button
                    onClick={() => handleCarouselScroll("right")}
                    className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition"
                  >
                    <span className="text-xl font-bold">
                      <ChevronRight className="text-gray-500" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <div
                  ref={carouselRef}
                  className="flex gap-4 overflow-x-auto no-scrollbar"
                >
                  {topDestinations.map((destination, i) => (
                    <div
                      key={i}
                      className="group relative min-w-[274px] h-[390px] rounded-[30%]  cursor-pointer transition-transform duration-300 hover:translate-x-2 flex-shrink-0"
                    >
                      <Link 
                        href={`/destination/${destination.id}?name=${encodeURIComponent(destination.name)}&image=${encodeURIComponent(destination.img.src)}`}
                        className="block absolute inset-0"
                        onClick={() => {
                          console.log('Navigating to destination:', {
                            id: destination.id,
                            name: destination.name,
                            image: destination.img.src
                          });
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "35%",
                            backgroundImage: `url(${destination.img.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                          className="absolute inset-0 transition-transform duration-300"
                        />
                      </Link>
                      {/* <div className="absolute inset-0  rounded-[40%] bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                      <div className="absolute bottom-16 left-0 right-0 text-center text-white transform translate-y-full  transition-transform duration-300">
                        <h3 className="text-xl font-semibold">
                          {destination.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
              </div>
            </div>
          </section>

          {/* POPULAR CITIES SECTION */}
          <div className="w-full  gap-[50px] flex flex-col items-center justify-center">
            <section
              className="w-full justify-center items-center max-w-[var(--max-container-width)]"
              style={containerStyle}
            >
              <div className="w-full  flex gap-[24px] flex-col">
                <h2 className="text-[28px] font-[500] text-gray-800 ">
                  Popular Cities
                </h2>
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-[16px]">
                  {popularCities.map((city, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-[10px] py-[6px] px-[14px] text-[14px] font-medium bg-[#F6F8FA] text-[#31353F] hover:bg-gray-100 transition rounded-lg border border-gray-200"
                    >
                      <span className="truncate">{city}</span>
                      <ArrowUpRight className="w-4 h-4 " />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className=" w-full  items-center flex justify-center">
              <div
                className="w-full flex justify-center items-center max-w-[var(--max-container-width)] gap-[24px] flex-col"
                style={containerStyle}
              >
                <h2 className="text-[28px] text-start w-full font-[500]  text-gray-800 ">
                  Things to do Around Calicut
                </h2>
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-[16px]">
                  {popularCities.map((city, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-[10px] py-[6px] px-[14px] text-[14px] font-medium bg-[#F6F8FA] text-[#31353F] hover:bg-gray-100 transition rounded-lg border border-gray-200"
                    >
                      <span className="truncate">{city}</span>
                      <ArrowUpRight className="w-4 h-4 " />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
   
      {/* FOOTER SECTION */}
      <div className=" w-full">
        <section className=" w-full px-0 md:px-[98px]   pt-[35px] pb-[98px] bg-[#F6F8FA]  ">
          <div className="  ">
            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-black mb-12">
              How GoCampus Works
            </h2>

            {/* Items row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {howItWorksItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  {/* Icon */}
                  <div className="min-w-[88px] w-[88px] h-[88px] justify-center items-center flex rounded-full">
                    <Image
                      width={20}
                      height={20}
                      src={item.icon}
                      alt={item.heading}
                      className="   w-[50px] md:w-[86px] object-contain"
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {item.heading}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
