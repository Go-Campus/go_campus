import { Heart, MapPin } from "lucide-react";
import React from "react";

const Card = ({
  image,
  date,
  title,
  place,
  venue,
  price,
  badge,
  variant = "latest",
}) => {
  const isLikes = variant === "likes";

  const containerClasses = isLikes
    ? "flex  rounded-xl bg-white shadow-sm border border-gray-200 relative transition w-full p-3"
    : variant === "featured"
    ? "rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition relative border-b-[3px] border-[#FF5F4A]"
    : "rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition relative";

  const imageClasses = isLikes
    ? "w-[100px] h-[100%] object-cover  rounded-xl"
    : "w-full object-cover rounded-2xl";

  return (
    <div className={containerClasses}>
      {/* Image */}
      <img src={image?.src || image} alt={title} className={imageClasses} />

      {/* Content */}
   

<div className="py-[12px] px-[14px] flex flex-col justify-between flex-1 space-y-2 relative">
  {/* Heart Icon for 'likes' variant */}
  {isLikes && (
    <div className="absolute top-3 right-3">
      <Heart className="w-[30px] h-[30px] text-[#EF233C] fill-[#EF233C]" />
    </div>
  )}

  {/* Date */}
  <p className="text-[14px] text-[#FF5F4A] font-[600]">{date}</p>

  <div>
    <h1 className="text-[18px] font-[600]">{title}</h1>
    <p className="text-[14px] font-[500] text-[#868C98]">{place}</p>
  </div>

  {/* Venue */}
  <div className="  flex  gap-1 text-sm text-gray-500 w-full">
    <p className="flex  mt-1  justify-start gap-1 ">
    <MapPin className="w-[14px] text-[#868C98]"/>
    <span>
    {venue}
    </span>
    </p>  
  </div>

  {/* Price */}
  <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
    ₹{price}
  </span>
</div>

    </div>
  );
};

export default Card;
