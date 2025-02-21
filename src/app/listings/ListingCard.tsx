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
