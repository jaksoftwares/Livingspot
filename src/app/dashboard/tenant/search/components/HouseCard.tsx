"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface HouseProps {
    house: {
      id: number;
      title: string;
      location: { city: string; area: string };
      price: number;
      liked: boolean;
      houseType: string;
      bedrooms: number;
      bathrooms: number;
      images: string[]; // Changed from single image to array
    };
}

export default function HouseCard({ house }: HouseProps) {
  const [liked, setLiked] = useState<boolean>(house.liked);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
      {/* House Image */}
      <div className="h-48 bg-gray-200 relative">
        <Image
          src={house.images.length > 0 ? house.images[0] : "/placeholder-house.jpg"} 
          width={100}
          height={100}
          alt={house.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
        >
          {liked ? <FaHeart className="text-red-500 text-xl" /> : <FaRegHeart className="text-gray-600 text-xl" />}
        </button>
      </div>

      {/* House Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{house.title}</h2>
        <p className="text-gray-600 flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-1" /> {house.location.city}, {house.location.area}
        </p>

        {/* House Features */}
        <div className="flex items-center gap-4 mt-2 text-gray-700">
          <p className="flex items-center">
            <FaBed className="text-blue-500 mr-1" /> {house.bedrooms} Beds
          </p>
          <p className="flex items-center">
            <FaBath className="text-blue-500 mr-1" /> {house.bathrooms} Baths
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-1">{house.houseType}</p>

        {/* Price */}
        <p className="text-green-600 font-bold text-lg mt-2">Ksh {house.price.toLocaleString()}</p>

        {/* Actions */}
        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/dashboard/tenant/house/${house.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
