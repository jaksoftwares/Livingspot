"use client";

import {
  FaSearch,
  FaHome,
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-8 md:p-12 rounded-2xl text-white max-w-3xl w-full mx-auto shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Dream Home with LivingSpot
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover verified rentals, land deals, and real estate listings across Kenya.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Search location..."
              className="p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:w-64 focus:outline-none text-black shadow-md"
            />
            <button className="bg-red-500 text-white p-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-red-600 transition">
              <FaSearch />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {[
            {
              icon: FaSearch,
              title: "Search",
              description:
                "Browse homes, land, and rentals with filters for pricing, location, and more.",
            },
            {
              icon: FaHome,
              title: "Inspect",
              description:
                "Explore property details, view photos, and arrange visits with ease.",
            },
            {
              icon: FaStar,
              title: "Secure",
              description:
                "Contact owners or agents directly to finalize your ideal space.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition text-center">
              <Icon className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Why Choose LivingSpot?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {[
            {
              icon: FaCheckCircle,
              title: "Verified Listings",
              description:
                "All properties are reviewed for authenticity and accuracy before publishing.",
            },
            {
              icon: FaUsers,
              title: "User Reviews",
              description:
                "Make confident decisions based on community feedback and ratings.",
            },
            {
              icon: FaHome,
              title: "Diverse Options",
              description:
                "From studio bedsitters to premium apartments, we’ve got you covered.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <Icon className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Regions We Cover</h2>
        <p className="text-gray-600 mb-10">
          Expanding rapidly — currently available in these major towns and cities:
        </p>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {[
            "Nairobi",
            "Thika",
            "Juja",
            "Eldoret",
            "Mombasa",
            "Nakuru",
            "Kisumu",
          ].map((region) => (
            <div
              key={region}
              className="px-5 py-2 bg-red-100 text-red-700 font-medium rounded-full shadow-sm hover:shadow transition"
            >
              {region}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Featured Listings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
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
            <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
              <Image
                src={img}
                alt="House"
                width={400}
                height={250}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600 mt-1">{location}</p>
              <p className="text-red-500 font-semibold mt-1">{price}</p>
              <Link href={link} className="block mt-3 text-red-600 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

            {/* Real Estate Marketing Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Market Your Property Professionally</h2>
          <p className="mt-2 text-gray-600">
            Whether you&apos;re a landlord, agent, or property owner, LivingSpot helps you reach the right audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              icon: FaHome,
              title: "Upload Listings",
              description: "Easily upload homes, land, or buildings for rent or sale.",
            },
            {
              icon: FaUsers,
              title: "Reach More Clients",
              description: "Get seen by thousands of people actively searching for property.",
            },
            {
              icon: FaCheckCircle,
              title: "Manage Inquiries",
              description: "Respond to interest directly from your dashboard.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <Icon className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </section>

    {/* Land for Sale Section */}
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Land for Sale Across Kenya</h2>
        <p className="mt-2 text-gray-600">Explore verified land listings for farming, residential, or commercial use.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "1/8 Acre Plot",
            location: "Kangundo Road, Machakos",
            price: "Ksh 450,000",
            img: "/land1.jpg",
            link: "/land/1"
          },
          {
            title: "50x100 Plot",
            location: "Ruiru, Kiambu",
            price: "Ksh 850,000",
            img: "/land2.jpg",
            link: "/land/2"
          },
          {
            title: "Prime Commercial Land",
            location: "Mombasa Road",
            price: "Ksh 5,000,000",
            img: "/land3.jpg",
            link: "/land/3"
          },
        ].map(({ title, location, price, img, link }, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg shadow text-center">
            <Image src={img} alt="Land" width={400} height={250} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{location}, {price}</p>
            <Link href={link} className="text-red-500 mt-3 block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* Business Packages */}
<section className="py-16 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold">Choose Your Listing Plan</h2>
    <p className="text-gray-600 mt-2">Flexible plans for individual landlords, agents, and property companies.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {[
      {
        title: "Basic",
        price: "Free",
        features: ["List up to 3 properties", "Email inquiries", "Basic support"],
      },
      {
        title: "Pro",
        price: "Ksh 999/mo",
        features: ["Unlimited listings", "Priority visibility", "Dashboard tools"],
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: ["Custom branding", "Dedicated support", "Agency dashboard"],
      },
    ].map(({ title, price, features }, index) => (
      <div key={index} className="bg-gray-100 p-6 rounded-lg shadow text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-2xl text-red-500 my-4">{price}</p>
        <ul className="text-gray-700 space-y-2">
          {features.map((feature, i) => (
            <li key={i}>✓ {feature}</li>
          ))}
        </ul>
        <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Get Started
        </button>
      </div>
    ))}
  </div>
</section>




      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">What Our Users Say</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {[
            {
              name: "James K.",
              review:
                "LivingSpot helped me find the perfect house in Nairobi. Super smooth experience!",
            },
            {
              name: "Susan M.",
              review:
                "Love the transparency. The verified listings saved me from bad deals.",
            },
          ].map(({ name, review }, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
              <p className="italic text-gray-700">{review}</p>
              <h4 className="text-right mt-4 font-semibold">- {name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-5xl mx-auto space-y-6 px-4">
          {[
            {
              question: "Is LivingSpot free to use?",
              answer:
                "Yes, browsing and contacting landlords is completely free for tenants.",
            },
            {
              question: "How do I get in touch with a property owner?",
              answer:
                "Use the built-in chat or contact features available on every listing.",
            },
          ].map(({ question, answer }, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg flex items-center">
                <FaQuestionCircle className="text-red-500 mr-2" /> {question}
              </h3>
              <p className="mt-2 text-gray-700">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/faqs">
            <button className="px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-full shadow hover:bg-red-600 transition">
              View All FAQs
            </button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Own Property? List It on LivingSpot
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Reach thousands of active home seekers across Kenya.
        </p>
        <Link href="/list-property">
          <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-red-600 transition">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}
