"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = null; // Replace with actual authentication logic

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
            🏡 LivingSpot
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/search" className="text-gray-700 hover:text-blue-500 transition">
              Find Houses
            </Link>
            <Link href="/listings" className="text-gray-700 hover:text-blue-500 transition">
              Listings
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">
              Contact
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-blue-500 transition">
              FAQs
            </Link>

            {user ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-500">
                  Account ▼
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-40">
                  <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-transform transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 space-y-3">
          <Link href="/search" className="block text-gray-700 hover:text-blue-500">
            Find Houses
          </Link>
          <Link href="/listings" className="block text-gray-700 hover:text-blue-500">
            Listings
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-500">
            Contact
          </Link>
          <Link href="/faqs" className="block text-gray-700 hover:text-blue-500">
            FAQs
          </Link>
          {user ? (
            <>
              <Link href="/profile" className="block text-gray-700 hover:text-blue-500">
                Profile
              </Link>
              <Link href="/dashboard" className="block text-gray-700 hover:text-blue-500">
                Dashboard
              </Link>
              <button className="block w-full text-left text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="block text-center text-white bg-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
