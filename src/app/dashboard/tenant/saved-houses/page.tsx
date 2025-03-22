"use client";

import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface House {
  id: number;
  title: string;
  location: { city: string; area: string };
  price: number;
  liked: boolean;
  houseType: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
}

export default function SavedHouses() {
  const router = useRouter();
  const [savedHouses, setSavedHouses] = useState<House[]>([
    {
      id: 1,
      title: "Luxury Penthouse in Westlands",
      location: { city: "Nairobi", area: "Westlands" },
      price: 120000,
      liked: true,
      houseType: "Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      images: ["/house1.jpg", "/house2.jpg"],
    },
    {
      id: 2,
      title: "Beachfront Bungalow in Nyali",
      location: { city: "Mombasa", area: "Nyali" },
      price: 95000,
      liked: true,
      houseType: "Bungalow",
      bedrooms: 4,
      bathrooms: 3,
      images: ["/houses1.jpg", "/house3.jpg"],
    },
    {
      id: 3,
      title: "Modern Studio Apartment in Nakuru",
      location: { city: "Nakuru", area: "Milimani" },
      price: 30000,
      liked: true,
      houseType: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      images: ["/house3.jpg", "/house2.jpg"],
    },
  ]);

  // Function to remove a house from saved
  const removeHouse = (id: number) => {
    setSavedHouses(savedHouses.filter((house) => house.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Saved Houses</h1>
            <p className="text-gray-600">Browse and manage your saved houses.</p>
          </div>
          {/* Explore More CTA */}
          <button
            onClick={() => router.push("/search")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Explore More Houses
          </button>
        </div>

        {savedHouses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {savedHouses.map((house) => (
              <div key={house.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={house.images[0]}
                  alt={house.title}
                  width={100}
                  height={48}
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{house.title}</h2>
                  <p className="text-gray-600">
                    {house.location.area}, {house.location.city}
                  </p>
                  <p className="text-blue-600 font-bold">KSh {house.price.toLocaleString()}</p>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => router.push(`/house/${house.id}`)}
                      className="text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      View More
                    </button>
                    <button
                      onClick={() => removeHouse(house.id)}
                      className="text-red-600 flex items-center space-x-1 hover:text-red-800"
                    >
                      <TrashIcon className="w-5 h-5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600 text-lg">You haven’t saved any houses yet.</p>
            <p className="text-gray-500">Browse listings and click the ❤️ to save houses.</p>
            <button
              onClick={() => router.push("/search")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Browse Houses
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
