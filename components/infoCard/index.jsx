"use client";
import Image from "next/image";

export const InfoCard = ({
    bgColor = "bg-red-50",
    borderColor = "border-red-100",
    iconSrc,
    decorativeImageSrc,
  
  }) => {
    return (
      <div
        className={`rounded-2xl p-4 border relative overflow-hidden flex flex-col justify-between h-full ${bgColor} ${borderColor}`}
      >
        {/* Top-left Icon */}
        {iconSrc && (
          <div className="flex items-center gap-2 mb-4 z-10">
            <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center p-1"
                                        style={{
                                            background: "linear-gradient(to bottom right, #FFC7C7, #FF5F4A)",
                                        }}
                                    >
                                        <Image
                                            src={"/icons/locationWhite.svg"}
                                            alt="Icon"
                                            width={50}
                                            height={30}
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>
          </div>
        )}

      

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