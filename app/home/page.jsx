import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import {MainTicketLeft, MainTicketRight, PartyImage, Barcode} from "../../public"
import Footer from "@/components/footer";

const page = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col max-w-[1400px]">
        <Navbar />

        {/* first section */}
        <div className="w-full flex  justify-center p-4">
          <div className="relative bg-amber-200  flex w-full">
            {/* Main ticket left image */}
            <Image 
              className="w-[90%] opacity-0 " 
              src={MainTicketLeft}
              alt="Main Ticket Left"
            />
            
            {/* Main ticket right with its own overlay */}
            <div className="absolute r-0  w-[full] flex justify-start bottom-5  mr-[8.5%] right-0 ">
              <Image 
              className="w-[96.1%]  "
                src={MainTicketRight}
                alt="Main Ticket Right"
              />
              
              {/* Barcode overlay positioned on MainTicketRight */}
              <div className="absolute inset-0 w-full flex items-center justify-center">
                <Image 
                  src={Barcode}
                  alt="Barcode"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Party image overlay - positioned absolutely on top of entire section */}
            <div className="absolute inset-0 w-full flex items-center  ">
              <Image 
                src={PartyImage}
                alt="Party Event"
                className="w-[80%] object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;