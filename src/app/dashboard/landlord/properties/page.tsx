"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus, Pencil, Trash2 } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Luxury Apartment",
    location: "Nairobi, Kenya",
    status: "Available",
    price: "$500/month",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    name: "Studio Apartment",
    location: "Mombasa, Kenya",
    status: "Occupied",
    price: "$300/month",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    name: "Furnished House",
    location: "Kisumu, Kenya",
    status: "Booked",
    price: "$700/month",
    image: "/placeholder.jpg",
  },
];

const PropertiesPage = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Properties</h1>
        <Link href="/dashboard/landlord/properties/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus size={18} className="mr-2" /> Add Property
        </Link>
      </div>

      {/* Properties List */}
      <div className="grid grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 shadow-md rounded-lg">
            <Image 
              src={property.image} 
              alt={property.name} 
              width={400} 
              height={160} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-blue-600 font-semibold">{property.price}</p>
            <p className={`text-sm font-bold mt-1 ${property.status === "Available" ? "text-green-500" : "text-red-500"}`}>
              {property.status}
            </p>

            {/* Actions */}
            <div className="flex justify-between mt-4">
              <Link href={`/dashboard/landlord/properties/edit?id=${property.id}`} className="text-blue-600 hover:underline flex items-center">
                <Pencil size={16} className="mr-1" /> Edit
              </Link>
              <Link href={`/dashboard/landlord/properties/delete?id=${property.id}`} className="text-red-600 hover:underline flex items-center">
                <Trash2 size={16} className="mr-1" /> Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
