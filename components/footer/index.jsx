import React from 'react';
import Link from 'next/link';
import { Facebook, MessageCircle, Instagram, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#313131] text-[#FFFFFF] px-6 py-12 relative">
      <div className="w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col justify-between">
            <div className='flex flex-col gap-[20px]'>
            <div className="flex items-center pb-7 border-b border-[#FFFFFF]/20">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-white text-2xl font-semibold">GoCampus</span>
            </div>
            <div>
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
          <div className='flex flex-col gap-[24px]'>
            <h3 className="text-[#FFFFFF] text-[14px] font-[400] uppercase tracking-wider">Company</h3>
            <ul className=" flex flex-col gap-[8px] text-[#FFFFFF]/70 font-[400] text-[14px]">
              <li><Link href="#" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Career Guides</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Licensing & Certification</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Backers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* For Recruiters Links */}
          <div className='flex flex-col gap-[24px]'>
            <h3 className="text-[#FFFFFF] text-[14px] font-[400] uppercase tracking-wider">For Recruiters</h3>
            <ul className="flex flex-col gap-[8px] text-[#FFFFFF]/70 font-[400] text-[14px]">
              <li><Link href="#" className="hover:text-white transition-colors">Why Recruit with Lanstitut?</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Employer Dashboard</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hire Healthcare Professionals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Language & Skill Verification</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partner with Us</Link></li>
            </ul>
          </div>

          {/* For Candidates Links */}
          <div className='flex flex-col gap-[24px]'>
            <h3 className="text-[#FFFFFF] text-[14px] font-[400] uppercase tracking-wider">For Candidates</h3>
            <ul className="flex flex-col gap-[8px] text-[#FFFFFF]/70 font-[400] text-[14px]">
              <li><Link href="#" className=" hover:text-white transition-colors">Find Jobs</Link></li>
              <li><Link href="#" className=" hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#" className=" hover:text-white transition-colors">Language Training</Link></li>
              <li><Link href="#" className=" hover:text-white transition-colors">Visa & Relocation Assistance</Link></li>
              <li><Link href="#" className=" hover:text-white transition-colors">Candidate Dashboard</Link></li>
            </ul>
          </div>
        </div>

        {/* social media */}
        <div className="flex items-end space-x-4 mt-4">
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
                <MessageCircle size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer">
                <Youtube size={18} />
              </div>
            </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-[10px] font-[500] text-[#FFFFFF]/40">
            <span>© Go campus 2025 — Copyright</span>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="absolute bottom-6 right-6 w-12 h-12 border border-[#FFFFFF]/20 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
        <ArrowUp size={20} className="text-gray-400" />
      </button>
    </footer>
  );
}