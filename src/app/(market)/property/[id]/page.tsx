"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ImageGallery from "@/components/listings/ImageGallery";
import ListingCard from "@/components/listings/ListingCard";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCheckCircle, FaWhatsapp, FaPhone } from "react-icons/fa";

// Interface for type safety
interface Property {
  id: number;
  images: string[];
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

// Mock Data
const mockProperties: Record<string, Property> = {
  "1": {
    id: 1,
    images: ["/house.jpg", "/luxury2.jpg", "/house3.jpg", "/house4.jpg"],
    title: "Luxury 2 Bedroom Apartment",
    location: "Westlands, Nairobi",
    price: "Ksh 85,000/mo",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sqft",
    description: "Experience luxury living in the heart of Westlands. This modern 2-bedroom apartment features a spacious open-plan living area, high-end finishes, and stunning city views. The building offers a rooftop pool, gym, and 24/7 security. Perfect for professionals or small families looking for convenience and style.",
    features: ["Swimming Pool", "Gym", "Backup Generator", "High Speed Lifts", "CCTV Surveillance", "Borehole Water", "Ample Parking"],
    agent: {
      name: "Jane Doe",
      phone: "+254 700 000000",
      image: "/agent-placeholder.png" // Ensure this or a placeholder exists
    }
  },
  // Add more mock data if needed for testing id 2, 3 etc. but focusing on 1 for demo
};

export default function ListingDetails() {
  const params = useParams();
  const id = params?.id as string;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    if (id) {
      // Fallback to item 1 if id doesn't exist in mock for demo purposes
      const data = mockProperties[id] || mockProperties["1"];
      setProperty(data);
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!property) return <div className="min-h-screen flex items-center justify-center">Property not found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb / Back Navigation could go here */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <ImageGallery images={property.images} />
            </div>

            {/* Title & Key Specs */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-2 uppercase tracking-wide">{property.type}</span>
                  <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                  <p className="flex items-center text-gray-500 mt-2">
                    <FaMapMarkerAlt className="mr-2 text-red-500" /> {property.location}
                  </p>
                </div>
                <div className="text-2xl font-bold text-red-600 whitespace-nowrap">
                  {property.price}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 border-t border-gray-100 pt-6">
                {property.bedrooms && (
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <FaBed className="text-gray-400 text-xl mb-1" />
                    <span className="font-semibold text-gray-900">{property.bedrooms} Beds</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <FaBath className="text-gray-400 text-xl mb-1" />
                    <span className="font-semibold text-gray-900">{property.bathrooms} Baths</span>
                  </div>
                )}
                {property.area && (
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <FaRulerCombined className="text-gray-400 text-xl mb-1" />
                    <span className="font-semibold text-gray-900">{property.area}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities / Features */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Agent Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Interested in this property?</h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                  {/* Avatar Image would go here */}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{property.agent.name}</p>
                  <p className="text-sm text-gray-500">Property Agent</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
                  <FaPhone /> Call Agent
                </button>
                <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
                  <FaWhatsapp size={20} /> WhatsApp
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-center text-gray-400">
                  Please mention LivingSpot when contacting the agent.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Related Listings Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ListingCard
              id={2}
              image="/luxury2.jpg"
              title="Modern 1BR Apartment"
              location="Kilimani, Nairobi"
              price="Ksh 55,000/mo"
              type="Apartment"
              bedrooms={1}
              bathrooms={1}
            />
            <ListingCard
              id={3}
              image="/house3.jpg"
              title="Spacious Family Home"
              location="Karen, Nairobi"
              price="Ksh 120,000/mo"
              type="House"
              bedrooms={4}
              bathrooms={3}
            />
            <ListingCard
              id={4}
              image="/house4.jpg"
              title="Cozy Studio Layout"
              location="Westlands, Nairobi"
              price="Ksh 35,000/mo"
              type="Studio"
              bedrooms={1}
              bathrooms={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
