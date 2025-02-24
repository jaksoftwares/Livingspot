"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaChartBar, FaEnvelope, FaStar, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`h-screen bg-white shadow-md ${expanded ? "w-64" : "w-20"} transition-all`}>
      <div className="p-4 flex justify-between items-center">
        <h1 className={`text-xl font-bold ${expanded ? "block" : "hidden"}`}>LivingSpot</h1>
        <button onClick={() => setExpanded(!expanded)} className="text-gray-600 focus:outline-none">
          {expanded ? "🔽" : "➡"}
        </button>
      </div>

      <nav className="mt-4">
        <Link href="/dashboard/landlord" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200">
          <FaHome className="text-xl" />
          {expanded && <span className="ml-3">Dashboard</span>}
        </Link>
        <Link href="/dashboard/landlord/properties" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200">
          <FaChartBar className="text-xl" />
          {expanded && <span className="ml-3">Properties</span>}
        </Link>
        <Link href="/dashboard/landlord/messages" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200">
          <FaEnvelope className="text-xl" />
          {expanded && <span className="ml-3">Messages</span>}
        </Link>
        <Link href="/dashboard/landlord/reviews" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200">
          <FaStar className="text-xl" />
          {expanded && <span className="ml-3">Reviews</span>}
        </Link>
        <Link href="/dashboard/landlord/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200">
          <FaCog className="text-xl" />
          {expanded && <span className="ml-3">Settings</span>}
        </Link>
        <button className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 w-full">
          <FaSignOutAlt className="text-xl" />
          {expanded && <span className="ml-3">Logout</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
