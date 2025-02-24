"use client"

import React from "react";
import PropertyCard from "./propertycard";

// Define Property Type
interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    image: string;
  }
  
// Define Props Type
interface PropertiesProps {
  searchQuery: string;
  filters: { price: string; bedrooms: string };
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const mockProperties: Property[] = [
    { id: 1, title: "Modern 2-Bedroom Apartment", location: "Nairobi", price: 75000, bedrooms: 2, image: "/house.jpg" },
    { id: 2, title: "Luxurious Villa with Pool", location: "Mombasa", price: 200000, bedrooms: 3, image: "/house3.jpg" },
    { id: 3, title: "Affordable 1-Bedroom Flat", location: "Kisumu", price: 30000, bedrooms: 1, image: "/house4.jpg" },
    { id: 4, title: "Cozy Studio Apartment", location: "Eldoret", price: 25000, bedrooms: 1, image: "/housee.jpg" },
    { id: 5, title: "Spacious 3-Bedroom Bungalow", location: "Nakuru", price: 90000, bedrooms: 3, image: "/house3.jpg" },
    { id: 6, title: "Elegant Penthouse", location: "Nairobi", price: 180000, bedrooms: 4, image: "/house.jpg" },
    { id: 7, title: "Beachfront Condo", location: "Mombasa", price: 150000, bedrooms: 2, image: "/house4.jpg" },
    { id: 8, title: "Townhouse with Garden", location: "Kisumu", price: 85000, bedrooms: 3, image: "/housee.jpg" },
    { id: 9, title: "Luxury Mansion", location: "Karen, Nairobi", price: 500000, bedrooms: 6, image: "/house3.jpg" },
    { id: 10, title: "Modern Duplex", location: "Westlands", price: 120000, bedrooms: 3, image: "/house.jpg" },
    { id: 11, title: "Simple Family Home", location: "Kakamega", price: 45000, bedrooms: 2, image: "/house4.jpg" },
    { id: 12, title: "Executive 4-Bedroom House", location: "Runda", price: 300000, bedrooms: 4, image: "/housee.jpg" },
    { id: 13, title: "Affordable Bedsitter", location: "Thika", price: 15000, bedrooms: 1, image: "/house.jpg" },
    { id: 14, title: "Lakeview Villa", location: "Naivasha", price: 175000, bedrooms: 3, image: "/house3.jpg" },
    { id: 15, title: "Furnished Apartment", location: "Nairobi CBD", price: 100000, bedrooms: 2, image: "/house4.jpg" },
    { id: 16, title: "Luxury Serviced Apartment", location: "Westlands", price: 200000, bedrooms: 3, image: "/housee.jpg" },
    { id: 17, title: "Classic Townhouse", location: "Lang'ata", price: 130000, bedrooms: 4, image: "/house3.jpg" },
    { id: 18, title: "Peaceful Countryside Home", location: "Nyeri", price: 70000, bedrooms: 3, image: "/house.jpg" },
    { id: 19, title: "Budget Apartment", location: "Kisii", price: 28000, bedrooms: 1, image: "/house4.jpg" },
    { id: 20, title: "Elegant 2-Bedroom Flat", location: "Meru", price: 60000, bedrooms: 2, image: "/housee.jpg" },
    { id: 21, title: "High-End Studio Apartment", location: "Westlands", price: 90000, bedrooms: 1, image: "/house3.jpg" },
    { id: 22, title: "Affordable Home for Rent", location: "Machakos", price: 35000, bedrooms: 2, image: "/house.jpg" },
    { id: 23, title: "Luxurious 5-Bedroom Villa", location: "Kilimani", price: 450000, bedrooms: 5, image: "/house4.jpg" },
    { id: 24, title: "Urban Loft Apartment", location: "Nairobi CBD", price: 110000, bedrooms: 2, image: "/housee.jpg" },
    { id: 25, title: "Modern Student Housing", location: "Ruiru", price: 18000, bedrooms: 1, image: "/house3.jpg" },
    { id: 26, title: "Exclusive Family Mansion", location: "Karen, Nairobi", price: 600000, bedrooms: 7, image: "/house.jpg" },
    { id: 27, title: "Serene 3-Bedroom Home", location: "Kitale", price: 78000, bedrooms: 3, image: "/house4.jpg" },
    { id: 28, title: "Classic 4-Bedroom Apartment", location: "Parklands", price: 250000, bedrooms: 4, image: "/housee.jpg" },
    { id: 29, title: "Sunny Beachfront House", location: "Diani", price: 220000, bedrooms: 3, image: "/house3.jpg" },
    { id: 30, title: "Budget-Friendly Bedsitter", location: "Githurai", price: 12000, bedrooms: 1, image: "/house.jpg" },
  ];
const Properties: React.FC<PropertiesProps> = ({ searchQuery, filters }) => {
  // Filter Properties Based on Search & Filters
  const filteredProperties = mockProperties.filter((property) => {
    const matchesSearch = searchQuery
      ? property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesPrice = filters.price
      ? (() => {
          const [min, max] = filters.price.split("-").map(Number);
          return property.price >= min && property.price <= max;
        })()
      : true;

    const matchesBedrooms = filters.bedrooms ? property.bedrooms === Number(filters.bedrooms) : true;

    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)
      ) : (
        <p className="text-gray-500">No properties found matching your criteria.</p>
      )}
    </div>
  );
};

export default Properties;
