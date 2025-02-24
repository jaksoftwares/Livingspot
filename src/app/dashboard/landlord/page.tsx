"use client";

import { useState, useEffect } from "react";
import { FaHome, FaChartBar, FaEnvelope, FaStar } from "react-icons/fa";

export default function LandlordDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">🏠 Landlord Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Manage your properties, messages, analytics, and more.
      </p>

      {loading ? (
        <div className="mt-6 text-center text-gray-600">Loading dashboard...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <FaHome className="text-blue-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Properties</h2>
            <p className="text-gray-600 text-sm">Manage your property listings.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <FaChartBar className="text-green-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Analytics</h2>
            <p className="text-gray-600 text-sm">View engagement metrics and revenue.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <FaEnvelope className="text-yellow-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Messages</h2>
            <p className="text-gray-600 text-sm">Communicate with tenants.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <FaStar className="text-red-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Reviews</h2>
            <p className="text-gray-600 text-sm">Check tenant feedback.</p>
          </div>
        </div>
      )}
    </div>
  );
}