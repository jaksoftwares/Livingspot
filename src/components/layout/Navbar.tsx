"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = null; // Replace with actual authentication logic

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/login/ls-logo.jpg" // Ensure the logo is placed in the public/ folder
              alt="LivingSpot Logo"
              width={40} // Adjust width as needed
              height={40} // Adjust height as needed
              priority
            />
            <span className="text-2xl font-extrabold text-blue-700 tracking-wide">
              LivingSpot
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-gray-800">
            {["Find Houses", "Listings", "About Us", "Contact", "FAQs"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-blue-600 transition duration-300"
              >
                {item}
              </Link>
            ))}

            {/* Auth & User Dropdown */}
            {user ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen((prev) => !prev);
                  }}
                  className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  Account <ChevronDown className="ml-1" size={18} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 animate-fadeIn">
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
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  href="/auth/login"
                  className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* ✅ Mobile Menu Button (Fixed) */}
          <button
            className="md:hidden flex items-center"
            onClick={(e) => {
              e.preventDefault(); // Prevent any unintended navigation
              e.stopPropagation(); // Stop event from bubbling up
              setMenuOpen((prev) => !prev);
            }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu (Fixed: Now Expands Correctly) */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg transition-all duration-300">
          <div className="p-6 flex flex-col space-y-5 text-lg font-medium">
            {["Find Houses", "Listings", "About Us", "Contact", "FAQs"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="block text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/dashboard"
                  className="block text-gray-800 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button className="block w-full text-left text-red-600 hover:bg-gray-100">
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link
                  href="/auth/login"
                  className="text-center border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="text-center text-white bg-blue-600 px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
