import React from "react";
import Link from "next/link";
import {
  Facebook,
  MessageCircle,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { GoCampusLogo } from "@/public";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#313131] text-[#FFFFFF] p-[80px] w-full  relative">
      <div className="w-full  flex flex-col gap-[34px]  ">
        {/* Main Footer Content */}
        <div className=" flex justify-between ">
          {/* Logo and Description */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-2 items-center ">
                <Image  className="w-[36px] h-[36px]" src={GoCampusLogo} alt="logo" width={32} height={32} />
                <span className="text-white text-[32px] font-semibold">
                  GoCampus
                </span>
              </div>
              <div className="border-[#FFFFFF]/20 border-t pt-[20px]">
                <p className="text-[#FFFFFF] font-[400] text-[12px] leading-[140%]">
                  List your event on GoCampus and reach <br />
                  thousands of students. It's quick, easy, and <br />
                  effective! List your event on GoCampus and <br />
                  reach thousands of students. It's quick, easy, and <br />
                  effective!
                </p>
              </div>
            </div>
            {/* Social Media Icons */}
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-[24px]">
            <h3
             className="text-[#FFFFFF] text-[12px] font-[500] uppercase tracking-wider"
             >
              Company
            </h3>
            <ul className=" flex flex-col gap-[8px] text-[#FFFFFF]/70 font-[400] text-[14px]">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  Career Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  Licensing & Certification
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  Backers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Recruiters Links */}
          <div className="flex flex-col gap-[24px]">
            <h3 
            className="text-[#FFFFFF] text-[12px] font-[500] uppercase tracking-wider"
            >
              For Recruiters
            </h3>
            <ul className="flex flex-col gap-[8px] text-[#FFFFFF]/70 font-[400] text-[14px]">
              <li>
                <Link href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
>                  Why Recruit with Lanstitut?
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
>
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
>
                  Hire Healthcare Professionals
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
>
                  Language & Skill Verification
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="hover:text-white transition-colors text-[14px] font-[400]"
>
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Candidates Links */}
          <div className="flex flex-col gap-[24px]">
            <h3 
            className="text-[#FFFFFF] text-[12px] font-[500] uppercase tracking-wider"
            >
              For Candidates
            </h3>
            <ul className="flex flex-col gap-[8px] text-[#FFFFFF]/70 font-[400] text-[14px]">
              <li>
                <Link href="#"
                  className=" hover:text-white transition-colors text-[14px] font-[400]"
>
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="#"
                  className=" hover:text-white transition-colors text-[14px] font-[400]"
>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#"
                  className=" hover:text-white transition-colors text-[14px] font-[400]"
>
                  Language Training
                </Link>
              </li>
              <li>
                <Link href="#"
                  className=" hover:text-white transition-colors text-[14px] font-[400]"
>
                  Visa & Relocation Assistance
                </Link>
              </li>
              <li>
                  <Link href="#"
                  className=" hover:text-white transition-colors text-[14px] font-[400]"
>
                  Candidate Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* social media */}
        <div className="flex gap-[10px]  ">
          <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
            <Facebook size={18} />
          </div>
          <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
            <MessageCircle size={18} />
          </div>
          <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
            <Instagram size={18} />
          </div>
          <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
            <Youtube size={18} />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-end ">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-[10px] font-[500] text-[#FFFFFF]/40">
            <span>© Go campus 2025 — Copyright</span>
                <Link
              href="#"
              className="hover:text-gray-400 transition-colors text-[10px] font-[500]"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 transition-colors text-[10px] font-[500]"
            >
              Privacy Policy
            </Link>
          </div>
          {/* Scroll to Top Button */}
          <button className=" border border-[#FFFFFF]/20 rounded-full p-[22px] flex items-center justify-center hover:bg-gray-800 transition-colors">
            <ArrowUp size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
