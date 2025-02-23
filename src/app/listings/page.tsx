"use client";

import React, { useState } from "react";
import {  FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ListingsPage = () => {
  // Filter states
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [houseType, setHouseType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 3;

  // Sample listings (Replace with API data later)
  const listings = [
    { id: 1, image: "/house.jpg", title: "2 Bedroom Apartment", location: "Near JKUAT", price: 15000, type: "apartment", bedrooms: 2 },
    { id: 2, image: "/luxury2.jpg", title: "1 Bedroom Studio", location: "Near KU", price: 10000, type: "studio", bedrooms: 1 },
    { id: 3, image: "/house3.jpg", title: "3 Bedroom Bungalow", location: "Thika", price: 25000, type: "bungalow", bedrooms: 3 },
    { id: 4, image: "/house4.jpg", title: "4 Bedroom Mansion", location: "Nairobi", price: 50000, type: "mansion", bedrooms: 4 },
    { id: 5, image: "/house.jpg", title: "2 Bedroom Apartment", location: "Near JKUAT", price: 15000, type: "apartment", bedrooms: 2 },
    { id: 6, image: "/luxury2.jpg", title: "1 Bedroom Studio", location: "Near KU", price: 10000, type: "studio", bedrooms: 1 },
    { id: 7, image: "/house3.jpg", title: "3 Bedroom Bungalow", location: "Thika", price: 25000, type: "bungalow", bedrooms: 3 },
    { id: 8, image: "/house4.jpg", title: "4 Bedroom Mansion", location: "Nairobi", price: 50000, type: "mansion", bedrooms: 4 },

  ];

  // Filter Listings
  const filteredListings = listings.filter((listing) => {
    return (
      (!location || listing.location.toLowerCase().includes(location.toLowerCase())) &&
      (!priceRange ||
        (priceRange === "under-10k" && listing.price < 10000) ||
        (priceRange === "10k-20k" && listing.price >= 10000 && listing.price <= 20000) ||
        (priceRange === "20k-30k" && listing.price >= 20000 && listing.price <= 30000) ||
        (priceRange === "above-30k" && listing.price > 30000)) &&
      (!bedrooms || listing.bedrooms.toString() === bedrooms) &&
      (!houseType || listing.type === houseType)
    );
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);
  const displayedListings = filteredListings.slice((currentPage - 1) * listingsPerPage, currentPage * listingsPerPage);

  return (
    <div className="container mx-auto px-4 py-10 mt-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Available Listings</h1>

      {/* Search & Filter Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FaFilter className="mr-2" /> Filter Listings
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
      </div>

      {/* Listings Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedListings.length > 0 ? (
          displayedListings.map((listing) => (
            <div key={listing.id} className="bg-white shadow-md rounded-lg p-4 transition hover:shadow-lg">
              <Image src={listing.image} alt={listing.title} width={300} height={200} className="rounded-lg" />
              <h3 className="text-lg font-semibold mt-3">{listing.title}</h3>
              <p className="text-gray-600">{listing.location}</p>
              <p className="text-red-500 font-semibold">Ksh {listing.price.toLocaleString()}/month</p>
              <Link href={`/property/${listing.id}`} className="text-blue-500 mt-2 inline-block">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No listings found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"} rounded-md`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListingsPage;
;


// "use client";
// import { useEffect, useState } from "react";
// import { fetchListings } from "@/services/api";

// export default function ListingsPage() {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     const loadListings = async () => {
//       try {
//         const { data } = await fetchListings();
//         setListings(data);
//       } catch (error) {
//         console.error("Error fetching listings:", error);
//       }
//     };
//     loadListings();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">House Listings</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {listings.map((house) => (
//           <div key={house.id} className="border p-4 rounded-lg shadow">
//             <img src={house.imageUrl} alt={house.title} className="w-full h-40 object-cover rounded" />
//             <h2 className="text-lg font-semibold">{house.title}</h2>
//             <p>{house.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

