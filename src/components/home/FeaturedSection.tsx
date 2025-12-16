import ListingCard from "../listings/ListingCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface FeaturedSectionProps {
    title: string;
    subtitle?: string;
    listings: Array<{
        id: number | string;
        title: string;
        location: string;
        price: string;
        image: string;
        bedrooms?: number;
        bathrooms?: number;
        type?: string;
        badge?: { text: string; color: string };
    }>;
    viewAllLink?: string;
    bgColor?: string;
}

export default function FeaturedSection({
    title,
    subtitle,
    listings,
    viewAllLink = "/search",
    bgColor = "bg-gray-50"
}: FeaturedSectionProps) {
    return (
        <section className={`py-16 ${bgColor}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
                    </div>
                    <Link
                        href={viewAllLink}
                        className="flex items-center text-red-600 font-semibold hover:text-red-700 hover:underline transition group"
                    >
                        View All <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((listing) => (
                        <ListingCard key={listing.id} {...listing} />
                    ))}
                </div>
            </div>
        </section>
    );
}
