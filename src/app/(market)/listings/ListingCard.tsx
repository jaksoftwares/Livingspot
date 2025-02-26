"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ id, title, price, location, imageUrl }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={300} 
        height={200} 
        className="rounded-lg object-cover"
      />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{location}</p>
      <p className="text-red-500 font-bold">Ksh {price.toLocaleString()}</p>
      <Link href={`/property/${id}`} className="text-blue-500 mt-2 block">View Details</Link>
    </div>
  );
};

export default ListingCard;


// import { expressInterest } from "@/services/api";

// const ListingCard = ({ house }) => {
//   const handleInterest = async () => {
//     try {
//       await expressInterest(house.id);
//       alert("Interest submitted successfully!");
//     } catch (error) {
//       console.error("Error showing interest:", error);
//     }
//   };

//   return (
//     <div className="border p-4 rounded-lg shadow">
//       <img src={house.imageUrl} alt={house.title} className="w-full h-40 object-cover rounded" />
//       <h2 className="text-lg font-semibold">{house.title}</h2>
//       <button onClick={handleInterest} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
//         Show Interest
//       </button>
//     </div>
//   );
// };
