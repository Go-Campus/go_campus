import React from "react";

const Card = ({ image, date, title, venue, price, badge, variant = "latest" }) => {
  // Conditional styling based on variant
  const containerClasses =
    variant === "featured"
      ? "rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition relative border-b-[3px] border-[#FF5F4A]"
      : "rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition relative";

  const imageClasses =
    variant === "featured"
      ? "w-full object-cover border-b-[3px] border-[#FF5F4A] rounded-2xl"
      : "w-full object-cover rounded-2xl";

  return (
    <div className={containerClasses}>
      <img src={image?.src || image} alt={title} className={imageClasses + " w-[50%] h-[70%]"} />
      <div className="p-4 space-y-2">
        {/* Date */}
        <p className="text-xs text-red-500 font-medium">{date}</p>

        {/* Title */}
        <h3 className="text-sm font-semibold leading-tight">{title}</h3>

        <div className="flex items-start gap-1 mb-4 text-sm text-gray-500">
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
       

        {/* Price & Badge */}
        <div className="flex justify-between items-center flex-wrap gap-1">
          {/* Price */}
          <span className="text-sm sm:text-base font-medium whitespace-nowrap">
            ₹{price}
          </span>

          {/* Badge */}
          {badge && (
            <span
              className="
                text-[10px] sm:text-xs
                bg-[#FF5F4A]
                text-white
                px-2 py-0.5
                rounded-full
                whitespace-nowrap
                max-w-[100px]
                truncate
              "
            >
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;