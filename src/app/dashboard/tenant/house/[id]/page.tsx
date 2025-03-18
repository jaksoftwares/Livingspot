"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Sample house data (Replace with API call later)
const sampleHouses = [
  {
    id: 1,
    title: "Luxury Penthouse with City View",
    location: { city: "Nairobi", area: "Westlands" },
    price: 120000,
    liked: false,
    houseType: "Penthouse",
    bedrooms: 4,
    bathrooms: 3,
    size: 250,
    furnishing: "Fully Furnished",
    condition: "New",
    images: ["/houses/penthouse1.jpg", "/houses/penthouse2.jpg", "/houses/penthouse3.jpg"],
    description:
      "A modern and luxurious penthouse with breathtaking city views, high-end finishes, and world-class amenities.",
    amenities: ["Gym", "Swimming Pool", "24/7 Security", "High-Speed Elevator", "Smart Home System"],
    owner: { name: "David Kimani", phone: "+254 722 345678", email: "david.k@example.com" },
  },
  // Add more house objects...
];

export default function HouseDetails() {
  const { id } = useParams();
  const house = sampleHouses.find((h) => h.id === parseInt(id as string));

  if (!house) {
    return <p className="text-center text-gray-600 mt-10">House not found.</p>;
  }

  // Slider logic
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % house.images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? house.images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Image Slider */}
      <div className="relative w-full h-80 sm:h-[450px] overflow-hidden rounded-lg">
        <Image
          src={house.images[currentImage]}
          alt="House Image"
          width={1200}
          height={600}
          className="w-full h-full object-cover transition-all duration-300"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* House Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{house.title}</h1>
        <p className="text-gray-600">{house.location.city}, {house.location.area}</p>

        {/* Price & Like */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-semibold text-green-600">Ksh {house.price.toLocaleString()}</p>
          <button className="text-red-500 hover:text-red-700">
            <FaHeart size={24} />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <FaBed className="text-blue-600" />
            <span>{house.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-purple-600" />
            <span>{house.bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined className="text-green-600" />
            <span>{house.size} sqm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">{house.houseType}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-600 mt-2">{house.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Amenities</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
            {house.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                ✅ {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Contact Owner</h2>
          <p className="text-gray-700">{house.owner.name}</p>
          <div className="flex items-center gap-4 mt-2">
            <a href={`tel:${house.owner.phone}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <FaPhone /> {house.owner.phone}
            </a>
            <a href={`mailto:${house.owner.email}`} className="flex items-center gap-2 text-green-600 hover:text-green-800">
              <FaEnvelope /> {house.owner.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
