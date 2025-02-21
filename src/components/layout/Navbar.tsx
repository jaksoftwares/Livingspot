"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = null; // Replace this with actual authentication logic

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            LivingSpot
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/search" className="text-gray-700 hover:text-blue-500">
              Find Houses
            </Link>
            <Link href="/listings" className="text-gray-700 hover:text-blue-500">
              Listings
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>

            {user ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-500">
                  Account
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2 w-40">
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
                className="text-blue-600 border px-4 py-1 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-2">
          <Link href="/search" className="block text-gray-700 hover:text-blue-500">
            Find Houses
          </Link>
          <Link href="/listings" className="block text-gray-700 hover:text-blue-500">
            Listings
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-500">
            Contact
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
              className="block text-blue-600 border px-4 py-1 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
