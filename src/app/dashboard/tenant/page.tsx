"use client";

import { useState, useEffect } from "react";
import { 
  FaHome, FaEnvelope, FaStar, FaMoneyBillWave, FaBell, FaClipboardList, FaSearch 
} from "react-icons/fa";
import Link from "next/link";

export default function TenantDashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    savedProperties: 0,
    messages: 0,
    reviews: 0,
    payments: 0,
    notifications: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setDashboardData({
        savedProperties: 4,
        messages: 2,
        reviews: 3,
        payments: 2,
        notifications: 1,
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">🏠 Tenant Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your saved properties, messages, payments, and more.</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for houses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Dashboard Cards */}
          <DashboardCard href="/dashboard/tenant/saved-properties" icon={FaHome} title="Saved Properties" count={dashboardData.savedProperties} color="text-blue-500" />
          <DashboardCard href="/dashboard/tenant/messages" icon={FaEnvelope} title="Messages" count={dashboardData.messages} color="text-yellow-500" />
          <DashboardCard href="/dashboard/tenant/reviews" icon={FaStar} title="Reviews" count={dashboardData.reviews} color="text-red-500" />
          <DashboardCard href="/dashboard/tenant/payments" icon={FaMoneyBillWave} title="Payments" count={dashboardData.payments} color="text-green-600" />
          <DashboardCard href="/dashboard/tenant/notifications" icon={FaBell} title="Notifications" count={dashboardData.notifications} color="text-blue-600" />
          <DashboardCard href="/dashboard/tenant/lease-agreements" icon={FaClipboardList} title="Lease Agreements" count={null} color="text-purple-500" />
        </div>
      )}
    </div>
  );
}

// ✅ Reusable Dashboard Card Component
interface DashboardCardProps {
  href: string;
  icon: React.ElementType;
  title: string;
  count: number | null;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ href, icon: Icon, title, count, color }) => (
  <Link href={href} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition transform hover:scale-105 flex flex-col items-center">
    <Icon className={`text-4xl ${color}`} />
    <h2 className="text-lg font-semibold mt-2">{title}</h2>
    {count !== null ? <p className="text-gray-600 text-sm">{count} {title.toLowerCase()}</p> : <p className="text-gray-600 text-sm">Manage your {title.toLowerCase()}</p>}
  </Link>
);
