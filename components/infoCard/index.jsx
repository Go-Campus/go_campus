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