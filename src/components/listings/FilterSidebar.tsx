"use client";

import { useState } from "react";
import { FaFilter, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function FilterSidebar() {
    const [priceRange, setPriceRange] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [bedrooms, setBedrooms] = useState("");

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-gray-900 flex items-center">
                    <FaFilter className="mr-2 text-red-600" /> Filters
                </h3>
                <button className="text-sm text-gray-500 hover:text-red-600">Reset</button>
            </div>

            <div className="space-y-6">
                {/* Search */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location / Keyword</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="e.g. Westlands, Apartment"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                        />
                        <FaSearch className="absolute left-3.5 top-3.5 text-gray-400" />
                    </div>
                </div>

                {/* Property Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    >
                        <option value="">All Types</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="office">Office</option>
                        <option value="shop">Shop</option>
                        <option value="hall">Business Hall</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                {/* Price Range */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (Ksh)</label>
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    >
                        <option value="">Any Price</option>
                        <option value="0-10000">Under 10,000</option>
                        <option value="10000-30000">10,000 - 30,000</option>
                        <option value="30000-50000">30,000 - 50,000</option>
                        <option value="50000-100000">50,000 - 100,000</option>
                        <option value="100000+">100,000+</option>
                    </select>
                </div>

                {/* Bedrooms */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <div className="flex gap-2">
                        {["Any", "1", "2", "3", "4+"].map((num) => (
                            <button
                                key={num}
                                onClick={() => setBedrooms(num)}
                                className={`flex-1 py-2 text-sm border rounded-lg transition-all ${bedrooms === num
                                        ? "bg-red-600 text-white border-red-600"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-red-300"
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition">
                    Apply Filters
                </button>
            </div>
        </div>
    );
}
