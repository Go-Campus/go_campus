import Card from "@/components/destinationCard";

export default function Likes() {
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
    <main className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-6 space-y-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {likedEvents.map((event, index) => (
            <Card key={index} {...event} />
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto mt-12 mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Trending Searches
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {popularCities.map((city, i) => (
            <button
              key={i}
              className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-100 transition"
            >
              <img src="icons/search.svg" alt="search" className="w-4 h-4" />
              {city}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
