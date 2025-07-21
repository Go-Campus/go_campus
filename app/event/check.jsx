'use client'

import { Calendar, Clock, MapPin, Users, Plus, Minus, X } from 'lucide-react';
import { useState } from 'react';
import { checkImage } from '@/public';
import Image from 'next/image'; 
import EventCard from '@/components/card';

const  check = () => {

    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [language, setLanguage] = useState('English (US)');
    const [currentView, setCurrentView] = useState('default'); // 'default' or 'checkout'
    const ticketPrice = 499;
    
    // Add logging to identify what is happening
    console.log('Current view:', currentView);

    const handleQuantityChange = (action) => {
        if (action === 'increase') {
          setQuantity(prev => prev + 1);
        } else if (action === 'decrease' && quantity > 1) {
          setQuantity(prev => prev - 1);
        }
      };
    
      const subtotal = quantity * ticketPrice;
      const total = subtotal;

  return (
    <div className="flex w-[100%]  flex-col items-center ">
        <div className="w-[60%] max-w-[1400px] flex flex-col items-center border border-red-400 ">
            <div className="w-[100%]  max-w-[1400px] flex flex-col items-center justify-center">

                {/* container */}
                <div className="w-full flex gap-4 py-4 justify-center">



                    {/* left section */}
                    <div className="w-[65%] h-[600px] flex flex-col justify-between">
                      {(() => {
                        switch (currentView) {
                          case 'checkout':
                            return (
                              <div className='w-full h-full flex flex-col'>
                                {/* Header */}
                                <div className="w-full px-4">
                                  <div className="py-3 flex justify-between items-center border-b border-gray-200">
                                    <div className='px-4'>
                                      <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
                                    </div>
                                    <div className="text-red-500 font-semibold">Time Left 07:08</div>
                                  </div>
                                </div>

                                {/* Billing Information */}
                                <div className="flex-1 px-4 py-6">
                                  <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
                                    <div className="space-y-4">
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                          First Name *
                                        </label>
                                        <input
                                          type="text"
                                          defaultValue="Nihia"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                          Last Name *
                                        </label>
                                        <input
                                          type="text"
                                          defaultValue="MJ"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                          Email *
                                        </label>
                                        <input
                                          type="email"
                                          defaultValue="nihilamj@gmail.com"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                      </div>
                                    </div>
                                    
                                    {/* Checkboxes */}
                                    <div className="mt-6 space-y-3">
                                      <div className="flex items-start gap-3">
                                        <input
                                          type="checkbox"
                                          defaultChecked
                                          className="mt-1 w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                        />
                                        <label className="text-sm text-gray-700">
                                          Keep Me Updated On More Events And News From This Event Organizer
                                        </label>
                                      </div>
                                      <div className="flex items-start gap-3">
                                        <input
                                          type="checkbox"
                                          defaultChecked
                                          className="mt-1 w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                        />
                                        <label className="text-sm text-gray-700">
                                          Send Me Emails About The Best Events Happening Nearby Or Online
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Pay With Section */}
                                  <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Pay With</h3>
                                    <div className="space-y-3">
                                      <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-md hover:border-red-500 cursor-pointer">
                                        <div className="w-8 h-6 bg-gray-200 rounded flex items-center justify-center">
                                          <span className="text-xs">💳</span>
                                        </div>
                                        <span className="text-sm font-medium">Credit or Debit Card</span>
                                      </div>
                                      <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-md hover:border-red-500 cursor-pointer">
                                        <div className="w-8 h-6 bg-blue-100 rounded flex items-center justify-center">
                                          <span className="text-xs text-blue-600 font-bold">P</span>
                                        </div>
                                        <span className="text-sm font-medium">PayPal</span>
                                      </div>
                                      <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-md hover:border-red-500 cursor-pointer">
                                        <div className="w-8 h-6 bg-green-100 rounded flex items-center justify-center">
                                          <span className="text-xs text-green-600 font-bold">G</span>
                                        </div>
                                        <span className="text-sm font-medium">Google Pay</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Terms */}
                                  <div className="text-sm text-gray-600 mb-6">
                                    By Selecting Place Order, I Agree To The{' '}
                                    <span className="text-red-500 cursor-pointer">GoCampus Terms And Services</span>
                                  </div>
                                </div>

                                {/* Place Order Button */}
                                <div className='w-full flex items-end justify-end border-t border-gray-200 px-12 py-4'>
                                  <button className='py-3 px-8 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-colors'>
                                    Place Order
                                  </button>
                                </div>
                              </div>
                            );
                          
                          default:
                            return (
                              <div className=''>
                                {/* heading */}
                                <div className="w-full px-4 ">
                                  <div className="py-3 flex justify-between items-center border-b border-gray-200">
                                    <div className='px-4 '>
                                      <h2 className="text-xl font-bold text-gray-900 ">Best Comedy Lineup ft. Famous Star Comedians</h2>
                                      <p>Sat 24 August 2024 . 10:00 aM - 14:00PM IST </p>
                                    </div>
                                    <button
                                      // onClick={closeModal}
                                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                      <X className="w-5 h-5" />
                                    </button>
                                  </div>
                                </div>

                                {/* general admission */}
                                <div className=" order-2 lg:order-1 w-[90%] my-8">
                                  {/* Ticket Selection */}
                                  <div className="">
                                    <div className="border-[1px] border-[#FF5F4A] w-full rounded-[10px] p-4 mb-4">
                                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                          {/* general admission and quantity */}
                                          <div className='w-[500px] py-0 flex items-center justify-between border-b border-gray-200'>
                                            <h2 className="text-lg font-semibold mb-4">General Admission</h2>
                                            <div className="flex items-center gap-3">
                                              {/* quantity */}
                                              <div className="flex items-center">
                                                <button
                                                  onClick={() => handleQuantityChange('decrease')}
                                                  className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                                  disabled={quantity <= 1}
                                                >
                                                  <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="px-4 py-2 font-medium">{quantity}</span>
                                                <button
                                                  onClick={() => handleQuantityChange('increase')}
                                                  className="p-2 hover:bg-gray-100"
                                                >
                                                  <Plus className="w-4 h-4" />
                                                </button>
                                              </div>
                                            </div>
                                          </div>

                                          {/* price */}
                                          <div className='w-[500px] py-2 flex items-center justify-between'>
                                            <div className="text-lg font-bold text-gray-900">
                                              ₹{ticketPrice}
                                              <div className="text-sm text-gray-500">Sales End On Jul 22, 2025</div>
                                            </div>
                                            <div className="text-sm text-gray-600 flex items-center gap-1">
                                              <Users className="w-4 h-4" />
                                              <span>{20 - quantity} Remaining</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Language Selection */}
                                    <div className="w-full flex items-center justify-end gap-2">
                                      <p className="block text-sm font-medium text-gray-700">
                                        Language :
                                      </p>
                                      <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className=" outline-none"
                                      >
                                        <option value="English (US)">English (US)</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Tamil">Tamil</option>
                                        <option value="Telugu">Telugu</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                {/* checkout button */}
                                <div className='w-full flex items-end justify-end border-t border-gray-200 px-12 py-4'>
                                  <button 
                                    onClick={() => setCurrentView('checkout')}
                                    className='py-2 px-8 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors'
                                  >
                                    Checkout
                                  </button>
                                </div>
                              </div>
                            );
                        }
                      })()}
                    </div>



                    {/* right section */}
                  <div className="w-[27%]">
                    <EventCard quantity={quantity} ticketPrice={ticketPrice} subtotal={subtotal} total={total} />
                  </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default check