"use client";

interface FiltersProps {
  filters: {
    location: string;
    priceRange: [number, number];
    bedrooms: number;
    bathrooms: number;
    houseType: string;
  };
  setFilters: (filters: {
    location: string;
    priceRange: [number, number];
    bedrooms: number;
    bathrooms: number;
    houseType: string;
  }) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* Location */}
      <div>
        <label className="block text-sm font-semibold text-gray-600">Location</label>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Nakuru">Nakuru</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-gray-600">Max Price: Ksh {filters.priceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="100000"
          step="5000"
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({ ...filters, priceRange: [filters.priceRange[0], Number(e.target.value)] })
          }
          className="w-full cursor-pointer accent-blue-500"
        />
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-sm font-semibold text-gray-600">Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={(e) => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="0">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Bathrooms */}
      <div>
        <label className="block text-sm font-semibold text-gray-600">Bathrooms</label>
        <select
          value={filters.bathrooms}
          onChange={(e) => setFilters({ ...filters, bathrooms: Number(e.target.value) })}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="0">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      </div>

      {/* House Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-600">House Type</label>
        <select
          value={filters.houseType}
          onChange={(e) => setFilters({ ...filters, houseType: e.target.value })}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Studio">Studio</option>
          <option value="Mansion">Mansion</option>
        </select>
      </div>
    </div>
  );
}
