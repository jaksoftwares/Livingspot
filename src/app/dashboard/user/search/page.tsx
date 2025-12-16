"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import HouseList from "./components/HouseList";
import Wishlist from "./components/Wishlist";

// Define filter structure explicitly
interface FiltersType {
  location: string;
  priceRange: [number, number]; // Min & Max price range
  bedrooms: number;
  bathrooms: number;
  houseType: string;
}

export default function SearchPage() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State for filters
  const [filters, setFilters] = useState<FiltersType>({
    location: "",
    priceRange: [0, 100000], // Default range
    bedrooms: 0,
    bathrooms: 0,
    houseType: "",
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🏡 Find Your Next Home</h1>

      {/* Search Bar & Filters */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      {/* House Listings & Wishlist */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* House List takes 3 columns, Wishlist takes 1 */}
        <div className="lg:col-span-3">
          <HouseList searchQuery={searchQuery} filters={filters} />
        </div>
        <div className="lg:col-span-1">
          <Wishlist />
        </div>
      </div>
    </div>
  );
}
