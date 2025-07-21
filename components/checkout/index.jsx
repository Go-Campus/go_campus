'use client'

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plus, Minus, X } from 'lucide-react';

export default function Checkout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [language, setLanguage] = useState('English (US)');
  const ticketPrice = 499;

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const subtotal = quantity * ticketPrice;
  const total = subtotal;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Demo Button to Open Modal */}
      <button
        onClick={openModal}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Book Comedy Show Tickets
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
           

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


                {/* Left Section - Booking Form */}
                






                {/* Right Section - Poster & Order Summary */}
                <div className="order-2 lg:order-2 space-y-6">
                  {/* Poster */}
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-[3/4] relative">
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="relative h-full p-6 flex flex-col justify-between text-white">
                        {/* Top Section */}
                        <div className="text-center">
                          <div className="text-3xl lg:text-4xl font-bold mb-2">
                            <span className="block">GAR</span>
                            <span className="block">SE</span>
                          </div>
                          <div className="text-sm opacity-90">COMEDY SHOW</div>
                        </div>
                        
                        {/* Center - Comedian Images Placeholder */}
                        <div className="flex justify-center items-center space-x-4 my-8">
                          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-gray-600" />
                          </div>
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-gray-600" />
                          </div>
                          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-gray-600" />
                          </div>
                        </div>
                        
                        {/* Bottom Section */}
                        <div className="text-center">
                          <div className="text-lg font-bold mb-2">START</div>
                          <div className="text-sm opacity-90">LIVE COMEDY</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{quantity}x General Admission</span>
                        <span className="font-medium">₹{subtotal}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{subtotal}</span>
                      </div>
                      
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>₹{total}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-3">
                      Checkout
                    </button>
                    
                    <button 
                      onClick={closeModal}
                      className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}