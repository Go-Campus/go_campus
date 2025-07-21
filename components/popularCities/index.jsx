import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function PopularCitiesComponent() {
  const [popularCities] = useState([
    { name: "Abilene", count: 3 },
    { name: "Kochi", count: 1 },
    { name: "Kannur", count: 4 },
    { name: "Radhika Das India", count: 2 },
    { name: "Coimbatore", count: 2 },
    { name: "Indianapolis", count: 2 },
    { name: "Calicut", count: 2 },
    { name: "Antarctica", count: 1 }
  ]);

  const [aroundCalicut] = useState([
    { name: "Kannur", count: 3 },
    { name: "Radhika Das India", count: 1 },
    { name: "Abilene", count: 1 },
    { name: "Coimbatore", count: 1 },
    { name: "Indianapolis", count: 1 }
  ]);

  // Function to render multiple city links based on count
  const renderCityLinks = (city, count) => {
    return Array(count)
      .fill()
      .map((_, index) => (
        <a
          key={`${city}-${index}`}
          href={`/things-to-do-in-${city.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex items-center gap-2 text-sm bg-gray-100 rounded-md py-2 px-4 hover:bg-gray-200 transition-colors"
        >
          <span>Things to do in {city}</span>
          <ArrowUpRight size={16} className="flex-shrink-0" />
        </a>
      ));
  };

  return (
    <div className="w-full flex flex-col gap-6 justify-center flex-wrap">
      <h1 className="text-2xl font-bold mb-6">Popular Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        {popularCities.map(({ name, count }) =>
          renderCityLinks(name, count)
        ).flat()}
      </div>

      <h1 className="text-2xl font-bold mb-6">Things to do Around Calicut</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {aroundCalicut.map(({ name, count }) =>
          renderCityLinks(name, count)
        ).flat()}
      </div>
    </div>
  );
}