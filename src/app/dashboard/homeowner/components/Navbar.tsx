"use client";

import { useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4">
      <button
        className="text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiMenu />
      </button>
      <h1 className="text-xl font-semibold text-gray-800">Homeowner Dashboard</h1>
      <div className="relative">
        <button className="text-gray-700 text-2xl">
          <FiUser />
        </button>
        {/* Future dropdown for user settings */}
      </div>
    </nav>
  );
};

export default Navbar;
