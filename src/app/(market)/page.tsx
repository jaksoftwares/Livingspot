"use client";

import { FaSearch, FaHome, FaStar, FaCheckCircle, FaUsers, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-5"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 md:p-10 rounded-xl text-white max-w-3xl w-full mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Find Your Ideal Home Easily
          </h1>
          <p className="mt-3 text-base md:text-lg">
            Explore verified rental homes across Kenya, with advanced search filters and real-time availability.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center">
            <input
              type="text"
              placeholder="Search location..."
              className="p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:w-64 focus:outline-none text-black"
            />
            <button className="bg-red-500 text-white p-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-red-600">
              <FaSearch />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            {
              icon: FaSearch,
              title: "Search",
              description: "Find houses available near your preferred area with advanced filters.",
            },
            {
              icon: FaHome,
              title: "Visit",
              description: "View house details, images, and schedule visits directly.",
            },
            {
              icon: FaStar,
              title: "Move In",
              description: "Contact landlords, finalize details, and settle in easily.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="p-5 bg-gray-100 rounded-lg shadow">
              <Icon className="text-red-500 text-4xl mx-auto mb-3" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Why Choose LivingSpot?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: FaCheckCircle,
              title: "Verified Listings",
              description: "All listings are verified for authenticity and quality.",
            },
            {
              icon: FaUsers,
              title: "Community Reviews",
              description: "Read real tenant reviews before making a decision.",
            },
            {
              icon: FaHome,
              title: "Wide Variety",
              description: "Choose from budget-friendly to premium apartments.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="p-5 bg-white rounded-lg shadow text-center">
              <Icon className="text-red-500 text-4xl mx-auto mb-3" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regions Covered Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Regions We Cover</h2>
          <p className="text-gray-600 mt-2">We are currently active in the following regions:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["Nairobi", "Thika", "Juja", "Eldoret", "Mombasa", "Nakuru", "Kisumu"].map((region) => (
            <div key={region} className="px-5 py-2 bg-red-100 text-red-700 font-medium rounded-full shadow">
              {region}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Featured Listings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              img: "/house.jpg",
              title: "2 Bedroom Apartment",
              location: "Nairobi - Westlands",
              price: "Ksh 15,000/month",
              link: "/property/1",
            },
            {
              img: "/luxury2.jpg",
              title: "1 Bedroom Studio",
              location: "Thika Road",
              price: "Ksh 10,000/month",
              link: "/property/2",
            },
            {
              img: "/luxury2.jpg",
              title: "Studio Bedsitter",
              location: "Kisumu CBD",
              price: "Ksh 8,000/month",
              link: "/property/3",
            },
          ].map(({ img, title, location, price, link }, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow">
              <Image src={img} alt="House" width={400} height={250} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600">{location}, {price}</p>
              <Link href={link} className="text-red-500 mt-3 block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">What Our Users Say</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "James K.",
              review: "LivingSpot helped me find the perfect house in Nairobi. Super easy to use!",
            },
            {
              name: "Susan M.",
              review: "I love the verified listings. No more scams and overpriced rentals!",
            },
          ].map(({ name, review }, index) => (
            <div key={index} className="bg-gray-100 p-5 rounded-lg shadow">
              <p className="italic">{review}</p>
              <h4 className="text-right mt-4 font-semibold">- {name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              question: "Is LivingSpot free to use?",
              answer: "Yes! Searching for houses is completely free for tenants.",
            },
            {
              question: "How do I contact a landlord?",
              answer: "You can message landlords directly through our platform.",
            },
          ].map(({ question, answer }, index) => (
            <div key={index} className="p-5 bg-white rounded-lg shadow">
              <h3 className="font-semibold flex items-center">
                <FaQuestionCircle className="mr-2 text-red-500" /> {question}
              </h3>
              <p className="mt-2 text-gray-700">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/faqs">
            <button className="px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-full shadow-md transition duration-300 hover:bg-red-600">
              View All FAQs
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">List Your Property With Us</h2>
        <p className="mt-3 text-lg">Connect with thousands of potential tenants actively looking for homes.</p>
        <Link href="/list-property" className="mt-5 inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
          Get Started
        </Link>
      </section>
    </div>
  );
}
