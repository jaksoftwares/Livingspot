"use client";

import React, { useState } from "react";
import SearchBar from "./search";
import Filters from "./filters";
import Properties from "./properties";
import Pagination from "./pagination";

const FindHouses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<{ price: string; bedrooms: string }>({
    price: "",
    bedrooms: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Example values, replace with actual API data
  const totalProperties = 100; // Replace with the total count of properties from your API
  const propertiesPerPage = 10;
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);

  return (
    <div className="container mx-auto p-6 mt-16">
      {/* ✅ Stylish Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Find Your Perfect Home 🏡
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Search, filter, and explore the best properties near you.
        </p>
      </header>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      {/* Property Listings */}
      <Properties
        searchQuery={searchQuery}
        filters={filters}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default FindHouses;
