"use client";

import { IoSearch, IoClose } from "react-icons/io5"; // Importing better icons

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-lg p-3 shadow-md focus-within:ring-2 focus-within:ring-blue-400 transition">
      {/* Search Icon */}
      <IoSearch className="text-gray-500 text-lg mr-2" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for houses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
        aria-label="Search for houses"
      />

      {/* Clear Search Button */}
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="text-gray-500 hover:text-gray-700 transition"
          aria-label="Clear search"
        >
          <IoClose className="text-lg" />
        </button>
      )}
    </div>
  );
}
