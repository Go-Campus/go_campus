'use client'

import React, { useState } from 'react';
import { Check, CreditCard } from 'lucide-react';
import Image from 'next/image';


export default function PlaceOrder() {
  const [formData, setFormData] = useState({
    firstName: 'Nikita',
    lastName: 'M',
    email: 'nikita@gmail.com',
    paymentMethod: 'card',
    keepUpdated: true,
    emailUpdates: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-sm text-red-500 mt-1">Please fill all fields</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 h-fit">
            <div className="space-y-6">
              {/* Billing Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                    required
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="keepUpdated"
                      checked={formData.keepUpdated}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 bg-orange-500 border-orange-500 rounded focus:ring-orange-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-700 leading-5">
                      Keep Me Updated On More Events And News From This Event Organizer
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="emailUpdates"
                      checked={formData.emailUpdates}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 bg-orange-500 border-orange-500 rounded focus:ring-orange-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-700 leading-5">
                      Send Me Emails About The Best Events Happening Nearby Or Online
                    </span>
                  </label>
                </div>
              </div>

              {/* Pay With Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Pay With</h2>
                
                <div className="space-y-3">
                  {/* Credit or Debit Card */}
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Credit or Debit Card</span>
                  </label>

                  {/* PayPal */}
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="w-5 h-5 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">
                      P
                    </div>
                    <span className="text-sm font-medium text-gray-900">PayPal</span>
                  </label>

                  {/* Google Pay */}
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="googlepay"
                      checked={formData.paymentMethod === 'googlepay'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="w-5 h-5 bg-red-500 rounded text-white flex items-center justify-center text-xs font-bold">
                      G
                    </div>
                    <span className="text-sm font-medium text-gray-900">Google Pay</span>
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="text-xs text-gray-500">
                By clicking "Place Order", I agree to the{' '}
                <a href="#" className="text-orange-500 hover:underline">
                  Terms of Service
                </a>
              </div>

              {/* Place Order Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 h-fit">
            {/* Event Poster */}
            <div className="mb-6">
              <div className="w-full h-64 bg-gradient-to-br from-red-600 to-red-800 rounded-lg overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-yellow-400" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-4 h-full flex flex-col">
                  {/* DBC Logo */}
                  <div className="flex justify-center mb-4">
                    <div className="text-yellow-400 text-xs font-bold">
                      DBC
                    </div>
                  </div>
                  
                  {/* Main Title */}
                  <div className="text-center mb-4">
                    <div className="text-yellow-400 text-3xl font-bold leading-none mb-2">
                      DBC '25
                    </div>
                    <div className="text-yellow-400 text-xl font-bold">
                      DO<br />
                      POETRY
                    </div>
                  </div>
                  
                  {/* Artists/Performers */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full max-w-48">
                      {/* Artist Images Placeholder */}
                      <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                      <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                      <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto col-span-2"></div>
                      <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                      <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Bottom Logo */}
                  <div className="flex justify-center mt-4">
                    <div className="bg-white rounded px-2 py-1">
                      <div className="text-black text-xs font-bold">HINDI</div>
                      <div className="text-black text-xs font-bold">GAWL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">1 x General Admission</span>
                  <span className="font-medium">₹499</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹499</span>
                </div>
                
                <hr className="my-3" />
                
                <div className="flex justify-between text-base font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">₹499</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}