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
const categorypage = () => {
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
    { img: CardImage, name: "Mumbai" },
    { img: DubaiImage, name: "London" },
    { img: DubaiImage, name: "Dubai" },
    { img: CardImage, name: "Mumbai" },
    { img: DubaiImage, name: "London" },
    { img: DubaiImage, name: "Dubai" },
    { img: CardImage, name: "Mumbai" },
    { img: DubaiImage, name: "London" },
    { img: DubaiImage, name: "Dubai" },
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
          className="w-full "
     >
        <Image 
        width={1000}
        height={1000}
        src={DubaiImage} alt="hero" className="w-full h-[300px] object-cover" />

        </section>
    

        {/* LATEST EVENTS SECTION */}
        <div className="w-full flex  flex-col  gap-[50px]">
          <section className=" w-full">
            <div className=" w-full ">
              <div className=" w-full border-b  flex justify-center items-center border-gray-200">
                <div
                  className="w-full justify-center items-center max-w-[var(--max-container-width)]"
                  style={containerStyle}
                >
                  <h2 className="text-xl    py-[28px] sm:text-2xl font-semibold text-gray-800 ">
                  Most popular events
                  </h2>
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


    {/* CATEGORY SECTION */}
    <section
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <div className="w-full  flex-col gap-[33px]  flex ">
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

          {/* POPULAR CITIES SECTION */}
          <div className="w-full  gap-[50px] flex flex-col items-center justify-center">
            <section
              className="w-full justify-center items-center max-w-[var(--max-container-width)]"
              style={containerStyle}
            >
              <div className="w-full  flex gap-[24px] flex-col">
                <h2 className="text-[28px] font-[500] text-gray-800 ">
                Trending searches
                </h2>
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-[16px]">
                  {popularCities.map((city, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-[10px] py-[6px] px-[14px] text-[14px] font-medium bg-[#F6F8FA] text-[#31353F] hover:bg-gray-100 transition rounded-lg border border-gray-200"
                    >
                      <Search className="w-4 h-4 " />
                      <span className="truncate">{city}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      {/* HOW IT WORKS SECTION */}

      {/* FOOTER SECTION */}
      <div className=" w-full">
      
        <Footer />
      </div>
    </div>
  );
};

export default categorypage;
