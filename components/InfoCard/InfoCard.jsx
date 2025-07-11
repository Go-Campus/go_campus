 export const InfoCard = ({
    bgColor = "bg-red-50",
    borderColor = "border-red-100",
    iconSrc,
    title,
    subtitle,
    decorativeImageSrc,
    textColor = "text-gray-900",
    subTextColor = "text-gray-600",
  }) => {
    return (
      <div
        className={`rounded-2xl p-4 border relative overflow-hidden flex flex-col justify-between h-full ${bgColor} ${borderColor}`}
      >
        {/* Top-left Icon */}
        {iconSrc && (
          <div className="flex items-center gap-2 mb-4 z-10">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center p-1"
              style={{ background: "linear-gradient(to bottom right, #FFC7C7, #FF5F4A)" }}
            >
              <img
                src={iconSrc}
                alt="Icon"
                className="w-full h-full object-contain max-w-full"
              />
            </div>
          </div>
        )}

        {/* Title and Subtitle */}
        <div className="z-10">
          <div className={`font-semibold ${textColor} text-[22px] sm:text-base mb-1`}>
            {title}
          </div>
          <div className={`text-[15px] sm:text-sm ${subTextColor}`}>{subtitle}</div>
        </div>

        {/* Decorative Image */}
        {decorativeImageSrc && (
          <img
            src={decorativeImageSrc}
            alt="Decoration"
            className="absolute bottom-0 right-0 w-28 h-28 opacity-100 max-w-full"
          />
        )}
      </div>
    );
  };
  export const EventCard = ({ image, label, title, venue, price, discount }) => {
    return (
      <div className="w-72 rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
        {/* Event Image */}
        <img src={image} alt={title} className="w-full object-cover" />
  
        {/* Card Content */}
        <div className="p-4">
          {/* Red Label */}
          <p className="text-xs text-red-600 font-medium mb-1">{label}</p>
  
          {/* Title */}
          <h3 className="text-[18px] font-semibold text-gray-800 mb-2">{title}</h3>
  
          {/* Venue */}
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
  
          {/* Price and Discount */}
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-gray-900">₹{price}</p>
            {discount && (
              <span className="text-xs font-semibold text-white bg-[#FF5F4A] px-2 py-1 rounded-lg">
                {discount}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  