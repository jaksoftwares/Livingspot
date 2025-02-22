"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  description: string;
}

// Mock Data (Replace with API later)
const mockListings: Property[] = [
  {
    id: 1,
    image: "/house.jpg",
    title: "2 Bedroom Apartment",
    location: "Near JKUAT",
    price: 15000,
    type: "Apartment",
    bedrooms: 2,
    description: "A modern 2-bedroom apartment located near JKUAT, featuring spacious rooms and secure surroundings.",
  },
  {
    id: 2,
    image: "/luxury2.jpg",
    title: "1 Bedroom Studio",
    location: "Near KU",
    price: 10000,
    type: "Studio",
    bedrooms: 1,
    description: "A cozy 1-bedroom studio near KU with great amenities.",
  },
  {
    id: 3,
    image: "/house3.jpg",
    title: "3 Bedroom Bungalow",
    location: "Thika",
    price: 25000,
    type: "Bungalow",
    bedrooms: 3,
    description: "Spacious 3-bedroom bungalow located in Thika, perfect for families.",
  },
];

const ListingDetails = () => {
  const [property, setProperty] = useState<Property | null>(null);

  // Get the property ID from URL using App Router
  const params = useParams();
  const propertyId = Number(params.id); // Convert to number

  useEffect(() => {
    if (propertyId) {
      const foundProperty = mockListings.find((listing) => listing.id === propertyId);
      setProperty(foundProperty || null);
    }
  }, [propertyId]);

  if (!property) {
    return <div className="text-center py-10">Loading property details...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Image src={property.image} alt={property.title} width={800} height={500} className="rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-red-500 font-semibold text-lg">Ksh {property.price.toLocaleString()}/month</p>
        <p className="mt-4">{property.description}</p>
        <p className="mt-2"><strong>Type:</strong> {property.type}</p>
        <p className="mt-2"><strong>Bedrooms:</strong> {property.bedrooms}</p>
      </div>
    </div>
  );
};

export default ListingDetails;
