import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import {
  MainTicketLeft,
  MainTicketRight,
  PartyImage,
  Barcode,
  Sport,
  AcadamicIcon,
  Career,
  Culture,
  Technology,
  entertaiment,
  Workshopes,
} from "../../public";
import Ticket from "../../components/mainTicket";
import TypeCard from "../../components/typeCard";

const cards = [
  { id: 1, img: AcadamicIcon, name: "Academic" },
  { id: 2, img: Technology, name: "Technology" },
  { id: 3, img: entertaiment, name: "Entertainment" },
  { id: 4, img: Career, name: "Career" },
  { id: 5, img: Culture, name: "Culture" },
  { id: 6, img: Sport, name: "Sport" },
  { id: 7, img: Workshopes, name: "Workshops" },
];

const page = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col max-w-[1400px]">
        <Navbar />

        {/* first section */}
        <div className="w-full flex  justify-center p-4">
          <Ticket />
        </div>
        <div className="w-full py-5 border-b border-[#ADADAD40] px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-items-center">
            {cards.map((card) => (
              <TypeCard
                key={card.id}
                name={card.name}
                Image={card.img}
                className="w-full max-w-[120px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
