"use client";
import Card from "../../../components/destinationCard/index";
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
  DubaiImage ,
  ProfleColorIcon,
  LockColorIcon,
  SearchColorIcon,
} from "@/public";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  Search,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSearchParams } from 'next/navigation';
const DestinationPage = ({ params, searchParams }) => {

  const { id } = params;
  const searchParamsHook = useSearchParams();
  const destinationName = searchParamsHook.get('name') || id;
  const destinationImage = searchParamsHook.get('image');
  
  console.log('Destination page mounted:', {
    id,
    destinationName,
    destinationImage
  });
  const [destinationData, setDestinationData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        console.log('Fetching data for destination:', destinationName);
        setLoading(true);
        // TODO: Replace with your actual API endpoint
        // const response = await fetch(`/api/destinations/${destinationName}`);
        // const data = await response.json();
        
        // For now, using mock data
        const mockData = {
          name: destinationName,
          image: destinationImage,
          events: featuredTitles.map((title, i) => ({
            title,
            venue: featuredVenues[i],
            price: featuredPrices[i],
            date: "18 June – 15 July | 03:00 PM",
            image: CardImage
          })),
          neighborhoods: [
            "Downtown",
            "Historic District",
            "Cultural Quarter",
            "University Area"
          ]
        };
        
        setDestinationData(mockData);
        console.log('Destination data loaded:', mockData);
      } catch (error) {
        console.error('Error fetching destination data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (destinationName) {
      fetchDestinationData();
    }
  }, [destinationName, destinationImage]);

  // widthsetup
  // Define a CSS variable for max-width that can be used throughout the component
  const containerStyle = {
    "--max-container-width": "1400px", // Change this value to update all container widths
  };

  const carouselRef = React.useRef(null);


  // banner datas
  const heroBanners = [
    {
      image: imageSrc || PartyImage,
      title: [
        "Explore",
        destinationName || "Your Destination",
        "Events"
      ],
      description:
        `Discover amazing events and experiences in ${destinationName || "your chosen destination"}.`,
      buttonText: "Explore Events",
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full flex flex-col gap-[98px] items-center justify-center">
      <div className="w-full px-5 flex gap-5 flex-col items-center justify-center">
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
                    src={destinationImage}
                    alt="Hero"
                    width={1200}
                    height={400}
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
                    width={400}
                    height={400}
                    src={typeof banner.image === 'string' ? banner.image : banner.image.src}
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
                  Explore by neighborhood
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
                    {destinationData?.events.map((event, i) => (
                      <Card
                        key={i}
                        image={event.image}
                        date={event.date}
                        title={event.title}
                        venue={event.venue}
                        price={event.price}
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
                      <Search  className="w-4 h-4 " />
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

export default DestinationPage;
