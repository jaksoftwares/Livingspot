"use client";

import { useState, useEffect } from "react";
import { FaHome, FaChartBar, FaEnvelope, FaStar, FaUsers, FaMoneyBillWave, FaBell } from "react-icons/fa";
import Link from "next/link";

export default function AgentDashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    properties: 0,
    users: 0,
    messages: 0,
    reviews: 0,
    earnings: 0,
    notifications: 0,
  });

  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setDashboardData({
        properties: 12,
        users: 8,
        messages: 3,
        reviews: 5,
        earnings: 4500,
        notifications: 2,
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">🏠 Agent Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Manage your spaces, messages, analytics, and more.
      </p>

      {loading ? (
        <div className="mt-6 text-center text-gray-600 animate-pulse">Loading dashboard...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Properties */}
          <Link href="/dashboard/agent/properties" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaHome className="text-blue-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Spaces</h2>
            <p className="text-gray-600 text-sm">{dashboardData.properties} active listings</p>
          </Link>

          {/* Analytics */}
          <Link href="/dashboard/agent/analytics" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaChartBar className="text-green-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Analytics</h2>
            <p className="text-gray-600 text-sm">Track views, revenue & trends</p>
          </Link>

          {/* Messages */}
          <Link href="/dashboard/agent/messages" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaEnvelope className="text-yellow-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Messages</h2>
            <p className="text-gray-600 text-sm">{dashboardData.messages} new messages</p>
          </Link>

          {/* Reviews */}
          <Link href="/dashboard/agent/reviews" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaStar className="text-red-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Reviews</h2>
            <p className="text-gray-600 text-sm">{dashboardData.reviews} new user reviews</p>
          </Link>

          {/* Users */}
          <Link href="/dashboard/agent/users" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaUsers className="text-purple-500 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Users</h2>
            <p className="text-gray-600 text-sm">{dashboardData.users} interested users</p>
          </Link>

          {/* Earnings */}
          <Link href="/dashboard/agent/analytics/earnings" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaMoneyBillWave className="text-green-600 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Earnings</h2>
            <p className="text-gray-600 text-sm">${dashboardData.earnings} in earnings</p>
          </Link>

          {/* Notifications */}
          <Link href="/dashboard/agent/notifications" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105">
            <FaBell className="text-blue-600 text-4xl" />
            <h2 className="text-lg font-semibold mt-2">Notifications</h2>
            <p className="text-gray-600 text-sm">{dashboardData.notifications} new alerts</p>
          </Link>
        </div>
      )}
    </div>
  );
}
