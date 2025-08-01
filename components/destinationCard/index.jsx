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
      <div className="p-4 flex flex-col justify-between flex-1 space-y-2 relative">
        {/* Heart Icon for 'likes' variant */}
        {isLikes && (
          <div className="absolute top-3 right-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#EF233C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
              4.42 3 7.5 3c1.74 0 3.41 0.81 
              4.5 2.09C13.09 3.81 14.76 3 
              16.5 3 19.58 3 22 5.42 22 
              8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z" />
            </svg>
          </div>
        )}

        {/* Date */}
        <p className="text-sm text-[#FF5F4A] font-medium">{date}</p>

       <div>
       <h3 className="text-medium  font-semibold ">{title}</h3>
       <p className="text-sm font-semibold ">{place}</p>
       </div>
        
        {/* Venue */}
        <div className="flex items-start gap-1 text-sm text-gray-500">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[2px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.875 7.12343C8.875 6.08747 8.03557 5.24805 7.00038 5.24805C5.96443 5.24805 5.125 6.08747 5.125 7.12343C5.125 8.15862 5.96443 8.99805 7.00038 8.99805C8.03557 8.99805 8.875 8.15862 8.875 7.12343Z"
              stroke="#868C98"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99963 14.998C6.10078 14.998 1.375 11.1718 1.375 7.17051C1.375 4.03802 3.89283 1.49805 6.99963 1.49805C10.1064 1.49805 12.625 4.03802 12.625 7.17051C12.625 11.1718 7.89849 14.998 6.99963 14.998Z"
              stroke="#868C98"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{venue}</span>

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
