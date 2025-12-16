"use client";

import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedSection from "@/components/home/FeaturedSection";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

export default function LandingPage() {
  const dealsListings = [
    {
      id: "deal-1",
      image: "/house.jpg",
      title: "Spacious 3BR Apartment",
      location: "Kilimani, Nairobi",
      price: "Ksh 65,000/mo",
      bedrooms: 3,
      bathrooms: 2,
      type: "Apartment",
      badge: { text: "10% OFF", color: "bg-green-600" },
    },
    {
      id: "deal-2",
      image: "/office1.jpg",
      title: "Shared Office Space",
      location: "Westlands, Nairobi",
      price: "Ksh 15,000/mo",
      type: "Office",
      badge: { text: "HOT DEAL", color: "bg-red-600" },
    },
    {
      id: "deal-3",
      image: "/shop1.jpg",
      title: "Corner Shop Unit",
      location: "Eastleigh, Nairobi",
      price: "Ksh 30,000/mo",
      type: "Shop",
      badge: { text: "PRICE DROP", color: "bg-orange-500" },
    },
  ];

  const recentListings = [
    {
      id: "recent-1",
      image: "/luxury2.jpg",
      title: "Modern Studio",
      location: "Ruaka, Nairobi",
      price: "Ksh 18,000/mo",
      bedrooms: 1,
      bathrooms: 1,
      type: "Studio",
      badge: { text: "New", color: "bg-blue-600" },
    },
    {
      id: "recent-2",
      image: "/warehouse1.jpg",
      title: "Mini Warehouse",
      location: "Industrial Area",
      price: "Ksh 80,000/mo",
      type: "Warehouse",
      badge: { text: "New", color: "bg-blue-600" },
    },
    {
      id: "recent-3",
      image: "/house4.jpg",
      title: "1BR Garden Flat",
      location: "Karen, Nairobi",
      price: "Ksh 45,000/mo",
      bedrooms: 1,
      bathrooms: 1,
      type: "Apartment",
      badge: { text: "New", color: "bg-blue-600" },
    },
  ];

  const commercialListings = [
    {
      id: "office-1",
      image: "/office1.jpg",
      title: "Premium Office Suite",
      location: "Kilimani, Nairobi",
      price: "Ksh 150,000/mo",
      type: "Office",
    },
    {
      id: "shop-1",
      image: "/shop1.jpg",
      title: "CBD Retail Shop",
      location: "Moi Avenue, Nairobi",
      price: "Ksh 45,000/mo",
      type: "Shop",
    },
    {
      id: "warehouse-1",
      image: "/warehouse1.jpg",
      title: "Industrial Warehouse",
      location: "Mombasa Road",
      price: "Ksh 200,000/mo",
      type: "Warehouse",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Hero />
      <CategoryGrid />

      {/* Deals Section */}
      <FeaturedSection
        title="Deals & Special Offers"
        subtitle="Great spaces at unbeatable prices."
        listings={dealsListings}
        bgColor="bg-red-50"
        viewAllLink="/search?filter=deals"
      />

      {/* Recently Added Section */}
      <FeaturedSection
        title="Recently Added"
        subtitle="The latest vacant spaces just for you."
        listings={recentListings}
        bgColor="bg-white"
        viewAllLink="/search?sort=newest"
      />

      {/* Commercial Spaces */}
      <FeaturedSection
        title="Workspaces & Commercial"
        subtitle="Offices, shops, and warehouses for your business."
        listings={commercialListings}
        bgColor="bg-gray-50"
        viewAllLink="/search?category=commercial"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center px-4 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.png')]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">List Your Property on LivingSpot</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Reach thousands of potential tenants and buyers. Simple, fast, and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/list-property">
              <button className="px-8 py-3.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow-lg w-full sm:w-auto">
                List a Property
              </button>
            </Link>
            <Link href="/agent/register">
              <button className="px-8 py-3.5 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition w-full sm:w-auto">
                Become an Agent
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simplified FAQ Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Common Questions</h2>
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <FaQuestionCircle className="text-red-500 mr-2" /> Is LivingSpot free?
              </h3>
              <p className="text-gray-600">Yes, browsing and contacting agents is completely free for all users.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <FaQuestionCircle className="text-red-500 mr-2" /> How do I verify a listing?
              </h3>
              <p className="text-gray-600">Look for the "Verified" badge on listings, indicating our team has checked it.</p>
            </div>
          </div>
          <Link href="/faqs" className="inline-block mt-8 text-red-600 font-medium hover:underline">
            View all FAQs &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
