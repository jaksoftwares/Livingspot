import { FaSearch, FaHome, FaStar,  } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-5" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-white max-w-3xl">
          <h1 className="text-4xl font-bold">Find Your Perfect Home Near Campus</h1>
          <p className="mt-3 text-lg">Search for vacant houses near institutions with ease.</p>
          <div className="mt-6 flex justify-center">
            <input type="text" placeholder="Search location..." className="p-3 rounded-l-lg w-72 focus:outline-none" />
            <button className="bg-red-500 text-white p-3 rounded-r-lg hover:bg-red-600">
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
          <div className="p-5 bg-gray-100 rounded-lg shadow">
            <FaSearch className="text-red-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold">Search</h3>
            <p>Find houses available near your institution with advanced filters.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg shadow">
            <FaHome className="text-red-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold">Visit</h3>
            <p>View house details, images, and schedule visits directly.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-lg shadow">
            <FaStar className="text-red-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-bold">Move In</h3>
            <p>Contact landlords, finalize details, and settle in easily.</p>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Featured Listings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Sample Property Card */}
        <div className="bg-white p-5 rounded-lg shadow">
          <Image
            src="/house.jpg"
            alt="House"
            width={400} // Set appropriate width
            height={250} // Set appropriate height
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">2 Bedroom Apartment</h3>
          <p className="text-gray-600">Near JKUAT, Ksh 15,000/month</p>
          <Link href="/property/1" className="text-red-500 mt-3 block">
            View Details
          </Link>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <Image
            src="/luxury2.jpg"
            alt="House"
            width={400} // Set appropriate width
            height={250} // Set appropriate height
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">1 Bedroom Studio</h3>
          <p className="text-gray-600">Near KU, Ksh 10,000/month</p>
          <Link href="/property/2" className="text-red-500 mt-3 block">
            View Details
          </Link>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">List Your Property With Us</h2>
        <p className="mt-3 text-lg">Reach thousands of students searching for housing.</p>
        <Link href="/list-property" className="mt-5 inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">Get Started</Link>
      </section>
    </div>
  );
}
