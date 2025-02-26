"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center p-5"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-white max-w-3xl">
          <h1 className="text-4xl font-bold">About LivingSpot</h1>
          <p className="mt-3 text-lg">Connecting students and residents with comfortable, affordable housing near institutions.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            LivingSpot is a digital marketplace dedicated to making housing near learning institutions more accessible.
            We bridge the gap between landlords and students by providing a seamless platform for house listings, tenant-landlord communication, and transparent transactions.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-200 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">Our Mission</h3>
            <p className="mt-3 text-gray-700">
              To simplify the search for student housing by offering a reliable and efficient platform where tenants and landlords can connect with ease.
            </p>
          </div>
          {/* Vision */}
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-red-500">Our Vision</h3>
            <p className="mt-3 text-gray-700">
              To be the leading digital marketplace for student and resident housing, transforming the rental experience through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why Choose LivingSpot?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-5 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">User-Friendly</h3>
              <p className="text-gray-700">Easily browse and filter listings based on your preferences.</p>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Verified Listings</h3>
              <p className="text-gray-700">We ensure quality and authenticity in every property listed.</p>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Seamless Communication</h3>
              <p className="text-gray-700">Tenants and landlords can connect instantly through our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-200 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-700">A dedicated group of professionals passionate about solving housing challenges.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Sample team members - replace with real ones */}
            <div className="p-5 bg-white rounded-lg shadow">
              <Image src="/joseph-kirika.jpeg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-3">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="p-5 bg-white rounded-lg shadow">
              <Image src="/joseph-kirika.jpeg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-3">Jane Smith</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="p-5 bg-white rounded-lg shadow">
              <Image src="/joseph-kirika.jpeg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-3">Michael Brown</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">Join LivingSpot Today</h2>
        <p className="mt-3 text-lg">Find your ideal home or list your property with us for maximum reach.</p>
        <a href="/list-property" className="mt-5 inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">Get Started</a>
      </section>
    </div>
  );
}
