"use client"

import React, { useState } from "react";

interface FiltersProps {
  filters: { price: string; bedrooms: string };
  setFilters: (filters: { price: string; bedrooms: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-3">Filter Houses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Price Range */}
        <select
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            handleFilterChange(e);
          }}
          className="p-3 border border-gray-300 rounded-lg w-full"
        >
          <option value="">Select Price Range</option>
          <option value="0-50000">Up to KES 50,000</option>
          <option value="50000-100000">KES 50,000 - KES 100,000</option>
          <option value="100000-200000">KES 100,000 - KES 200,000</option>
        </select>

        {/* Number of Bedrooms */}
        <select
          name="bedrooms"
          value={bedrooms}
          onChange={(e) => {
            setBedrooms(e.target.value);
            handleFilterChange(e);
          }}
          className="p-3 border border-gray-300 rounded-lg w-full"
        >
          <option value="">Select Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
