"use client";

import { useState ,useRef,useEffect} from "react";
export const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [content]);
  
    return (
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
        >
          <span className="text-gray-900 font-medium text-sm">{title}</span>
          <img
          src="/icons/ChevronDown.svg"
          alt="Toggle"
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        </button>
  
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isOpen ? `${height}px` : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div 
            ref={contentRef}
            className="px-6 pb-4 text-gray-700 text-sm sm:text-[15px] leading-relaxed"
          >
            {content}
          </div>
        </div>
      </div>
    );
  };