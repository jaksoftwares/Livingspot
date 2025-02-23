"use client";

import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FindHouse = () => {
  // Search filters state
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [houseType, setHouseType] = useState("");

  // Sample listings (Replace with API data later)
  const listings = [
    {
      id: 1,
      image: "/house.jpg",
      title: "2 Bedroom Apartment",
      location: "Near JKUAT",
      price: "Ksh 15,000/month",
    },
    {
      id: 2,
      image: "/luxury2.jpg",
      title: "1 Bedroom Studio",
      location: "Near KU",
      price: "Ksh 10,000/month",
    },
    {
      id: 3,
      image: "/housee.jpg",
      title: "3 Bedroom Bungalow",
      location: "Thika",
      price: "Ksh 25,000/month",
    },
    {
    id: 4,
    image: "/house.jpg",
    title: "2 Bedroom Apartment",
    location: "Near JKUAT",
    price: "Ksh 15,000/month",
  },
  {
    id: 5,
    image: "/luxury2.jpg",
    title: "1 Bedroom Studio",
    location: "Near KU",
    price: "Ksh 10,000/month",
  },
  {
    id: 6,
    image: "/housee.jpg",
    title: "3 Bedroom Bungalow",
    location: "Thika",
    price: "Ksh 25,000/month",
  },
  ];

  return (
    <div className="container mx-auto px-4 py-10 mt-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Find Your Perfect Home</h1>

      {/* Search & Filters Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FaFilter className="mr-2" /> Filter Your Search
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter city or area"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring focus:ring-red-300"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block font-medium mb-1">Price Range</label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-red-300"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Any</option>
              <option value="under-10k">Under Ksh 10,000</option>
              <option value="10k-20k">Ksh 10,000 - 20,000</option>
              <option value="20k-30k">Ksh 20,000 - 30,000</option>
              <option value="above-30k">Above Ksh 30,000</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block font-medium mb-1">Bedrooms</label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-red-300"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">Any</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
          </div>

          {/* House Type */}
          <div>
            <label className="block font-medium mb-1">House Type</label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-red-300"
              value={houseType}
              onChange={(e) => setHouseType(e.target.value)}
            >
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio</option>
              <option value="bungalow">Bungalow</option>
              <option value="mansion">Mansion</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button className="mt-4 w-full md:w-auto bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          <FaSearch className="inline-block mr-2" /> Search
        </button>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={listing.image}
              alt={listing.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3">{listing.title}</h3>
            <p className="text-gray-600">{listing.location}</p>
            <p className="text-red-500 font-semibold">{listing.price}</p>
            <Link href={`/property/${listing.id}`} className="text-blue-500 mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindHouse;
