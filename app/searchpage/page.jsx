import React from "react";
import Navbar from "@/components/navbar";
const page = () => {
  // widthsetup
  // Define a CSS variable for max-width that can be used throughout the component
  const containerStyle = {
    "--max-container-width": "1400px", // Change this value to update all container widths
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="w-full max-w-[var(--max-container-width)]"
        style={containerStyle}
      >
        <Navbar />

        <div className="w-full flex flex-col gap-4">
          <ul className="flex items-center gap-4">
            <li className="border-r pr-4">home</li>
            <li className="border-r pr-4">india</li>
            <li className="border-r pr-4">kochi</li>
            <li>TechEvents</li>
          </ul>

          <h1 className="text-[32px] font-[600]">
          Tech events in Kochi, India
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
