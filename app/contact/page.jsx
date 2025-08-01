import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search } from "lucide-react";

const page = () => {
  const InputField = ({ placeholder, fullWidth = false, type = "text" }) => (  
    <div className={`${fullWidth ? "col-span-2" : ""}`}>  
      <input  
        type={type}  
        placeholder={placeholder}  
        className="w-full p-2 border-[#E2E4E9] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5F4A]/50 focus:border-[#FF5F4A] transition-all duration-200"
      />  
    </div>  
  );  

  // Define a CSS variable for max-width that can be used throughout the component
  const containerStyle = {
    "--max-container-width": "1300px", // Change this value to update all container widths
  };

  const popularCities = [
    "Things to do in Abilene",
    "Things to do in Kochi",
    "Things to do in Kannur",
    "Things to do in Coimbatore",
    "Things to do in Calicut",
    "Things to do in Indianapolis",
    "Things to do in Antarctica",
  ];

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <Navbar />
        </div>
      </div>

      <section className="w-full px-4">
        <div className="w-full flex justify-center items-center">
          <div
            className="w-full max-w-[var(--max-container-width)]"
            style={containerStyle}
          >
            <div className="flex w-full flex-col  md:flex-row md:items-end">
              <div className="w-full md:w-[50%] rounded-[20px]  bg-gradient-to-r from-red-500 to-red-600 text-white flex flex-col pt-[112px] gap-[144px]">
                <div className="flex flex-col gap-[4px] px-[24px] md:px-[82px]">
                  <h2 className="text-[28px] font-[500] text-white">
                    Reach 90 million unique ticket-buyers on Eventbrite
                  </h2>

                  <p>
                    Tap into the world's largest events marketplace and reach
                    more consumers looking for events like yours with our
                    industry-leading event marketing tools. Ready to bring your
                    next event to life
                  </p>

                  <p>
                    Our dedicated Sales Team is here to show you how Eventbrite
                    can amplify your events and help you achieve your event
                    goals. Reach out to us directly at +1 628-600-1786 to get
                    started, or if you prefer, complete the Contact Us form and
                    someone from our Sales team will be in touch shortly
                  </p>
                </div>
                <div className="px-[24px] md:px-[84px] pb-[112px]">
                  <button className="bg-white/30 px-[34px] py-[10px] rounded-[20px]">
                    Current Eventbrite customers can contact customer support. Your support options are based on your plan or package.
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[50%] py-10 md:py-[56px]">
                <div className="w-full h-full bg-white p-8 rounded-lg">
                  <h2 className="text-[32px] font-[600] mb-6 text-gray-800">
                    Contact Us
                  </h2>
                  <form className="w-full flex flex-col gap-4">
                    <div className="flex w-[70%] gap-[25px]">
                      <InputField placeholder="First Name" />
                      <InputField placeholder="Last Name" />
                    </div>
                    
                    <InputField placeholder="Work Email" fullWidth={true} type="email" />
                    <InputField placeholder="Company Name" fullWidth={true} />
                    <InputField placeholder="Phone Number" fullWidth={true} type="tel" />
                    <InputField placeholder="Country" fullWidth={true} />
                    <InputField placeholder="Organizing Type" fullWidth={true} />
                    <InputField placeholder="On Average What is the Cost" fullWidth={true} />
                    <InputField placeholder="Reason for getting in touch" fullWidth={true} />
                    <InputField placeholder="How Many Paid Tickets do you Plan to Sell" fullWidth={true} />
                    <div className="col-span-2">
                      <button type="submit" className="w-full bg-[#F05537] text-white font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition-colors">
                        Contact
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR CITIES SECTION */}
      <section className="w-full  py-10 px-4">
        <div className="w-full flex justify-center items-center">
          <div
            className="w-full max-w-[var(--max-container-width)]"
            style={containerStyle}
          >
            <div className="w-full flex gap-[24px] flex-col">
              <h2 className="text-[28px] font-[500] text-gray-800">
                Trending searches
              </h2>
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-[16px]">
                {popularCities.map((city, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-[10px] py-[6px] px-[14px] text-[14px] font-medium bg-[#F6F8FA] text-[#31353F] hover:bg-gray-100 transition rounded-lg border border-gray-200"
                  >
                    <Search className="w-4 h-4" />
                    <span className="truncate">{city}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center">
        <div
          className="w-full max-w-[var(--max-container-width)]"
          style={containerStyle}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;