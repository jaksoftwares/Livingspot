"use client";

import React, { useState } from "react";
import FilterSidebar from "@/components/listings/FilterSidebar";
import ListingCard from "@/components/listings/ListingCard";
import { FaSortAmountDown } from "react-icons/fa";

const ListingsPage = () => {
  // Mock Listings Data
  const listings = [
    { id: 1, image: "/house.jpg", title: "Luxury 2 Bedroom Apartment", location: "Westlands, Nairobi", price: "Ksh 85,000/mo", type: "Apartment", bedrooms: 2, bathrooms: 2, badge: { text: "Hot", color: "bg-red-500" } },
    { id: 2, image: "/house.jpg", title: "Modern Studio", location: "Thika Road, Nairobi", price: "Ksh 25,000/mo", type: "Studio", bedrooms: 1, bathrooms: 1, badge: { text: "New", color: "bg-blue-600" } },
    { id: 3, image: "/house4.jpg", title: "Cozy Bedsitter", location: "Kisumu CBD", price: "Ksh 12,000/mo", type: "Bedsitter", bedrooms: 1, bathrooms: 1 },
    { id: 4, image: "/office1.jpg", title: "Premium Office Suite", location: "Kilimani, Nairobi", price: "Ksh 150,000/mo", type: "Office", badge: { text: "Verified", color: "bg-green-600" } },
    { id: 5, image: "/shop1.jpg", title: "CBD Retail Shop", location: "Moi Avenue, Nairobi", price: "Ksh 45,000/mo", type: "Shop" },
    { id: 6, image: "/warehouse1.jpg", title: "Industrial Warehouse", location: "Mombasa Road", price: "Ksh 200,000/mo", type: "Warehouse" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4">
            <FilterSidebar />
          </div>

          {/* Listings Grid */}
          <div className="w-full lg:w-3/4">
            {/* Header: Title & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">All Properties</h1>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <span className="text-gray-600 text-sm">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 text-sm">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Popularity</option>
                  </select>
                  <FaSortAmountDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={12} />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 border rounded-lg bg-red-600 text-white font-medium">1</button>
                <button className="px-4 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border rounded-lg bg-white text-gray-500 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
