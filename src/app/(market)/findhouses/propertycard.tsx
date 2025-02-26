"use client"

import React from "react";
import Image from "next/image";

// Define property type
interface Property {
  id: number;
  title: string;
  location: string;
  price: number; // Changed to number for consistency with mock data
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Image Wrapper for Styling */}
      <div className="w-full h-48 relative">
        <Image 
          src={property.image} 
          alt={property.title} 
          layout="fill" // Ensures responsive behavior
          objectFit="cover" // Prevents distortion
          className="rounded-md"
          priority
        />
      </div>
      <h3 className="text-lg font-semibold mt-3">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-600 font-bold">KES {property.price.toLocaleString()}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
};

export default PropertyCard;
