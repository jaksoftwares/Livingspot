import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";

interface ListingCardProps {
    id: string | number;
    title: string;
    location: string;
    price: string;
    image: string;
    bedrooms?: number;
    bathrooms?: number;
    type?: string; // e.g., "Apartment", "Office"
    badge?: { text: string; color: string }; // e.g., { text: "10% OFF", color: "bg-green-600" }
}

export default function ListingCard({
    id,
    title,
    location,
    price,
    image,
    bedrooms,
    bathrooms,
    type,
    badge,
}: ListingCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {badge && (
                    <span className={`absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded shadow-sm ${badge.color}`}>
                        {badge.text}
                    </span>
                )}
                {type && (
                    <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        {type}
                    </span>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1 mb-3">
                    <FaMapMarkerAlt className="mr-1 text-red-500" size={12} />
                    <span className="truncate">{location}</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="text-red-600 font-bold text-lg">{price}</div>
                </div>

                {(bedrooms !== undefined || bathrooms !== undefined) && (
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-600 border-t pt-3">
                        {bedrooms !== undefined && (
                            <div className="flex items-center">
                                <FaBed className="mr-1.5 text-gray-400" />
                                <span>{bedrooms} Beds</span>
                            </div>
                        )}
                        {bathrooms !== undefined && (
                            <div className="flex items-center">
                                <FaBath className="mr-1.5 text-gray-400" />
                                <span>{bathrooms} Baths</span>
                            </div>
                        )}
                    </div>
                )}

                <Link
                    href={`/property/${id}`}
                    className="mt-4 block w-full text-center py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-colors text-sm"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
