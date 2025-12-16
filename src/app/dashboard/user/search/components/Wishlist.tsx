"use client";

import { useState } from "react";
import { IoHeartDislike, IoHeart } from "react-icons/io5";

interface House {
  id: number;
  title: string;
  location: string;
  price: number;
}

export default function Wishlist() {
  // Mock wishlist for demo (you can fetch from API or local storage)
  const [wishlist, setWishlist] = useState<House[]>([
    { id: 1, title: "Luxury Apartment", location: "Nairobi", price: 50000 },
    { id: 2, title: "Cozy Bungalow", location: "Mombasa", price: 40000 },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((house) => house.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
        <IoHeart className="text-red-500" /> Wishlist
      </h2>

      {wishlist.length > 0 ? (
        <ul className="space-y-4">
          {wishlist.map((house) => (
            <li
              key={house.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-md font-medium">{house.title}</h3>
                <p className="text-sm text-gray-600">{house.location}</p>
                <p className="text-green-600 font-bold">Ksh {house.price.toLocaleString()}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(house.id)}
                className="text-red-500 hover:text-red-700 transition"
                aria-label="Remove from wishlist"
              >
                <IoHeartDislike size={20} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-3">Your saved houses will appear here.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
            Explore Houses
          </button>
        </div>
      )}
    </div>
  );
}
