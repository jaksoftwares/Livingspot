"use client";

import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { 
  FaHome, FaMoneyBillWave, FaEnvelope, FaBookmark, FaCog, FaSignOutAlt, FaSearch 
} from "react-icons/fa";

const TenantSidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`h-screen bg-white shadow-md ${expanded ? "w-64" : "w-20"} transition-all flex flex-col`}>
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <h1 className={`text-xl font-bold ${expanded ? "block" : "hidden"}`}>LivingSpot</h1>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-gray-600 focus:outline-none"
        >
          {expanded ? "🔽" : "➡"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1">
        <NavItem href="/dashboard/tenant" icon={FaHome} label="Dashboard" expanded={expanded} />
        <NavItem href="/dashboard/tenant/search" icon={FaSearch} label="Search for Houses" expanded={expanded} />
        <NavItem href="/dashboard/tenant/saved-properties" icon={FaBookmark} label="Saved Properties" expanded={expanded} />
        <NavItem href="/dashboard/tenant/messages" icon={FaEnvelope} label="Messages" expanded={expanded} />
        <NavItem href="/dashboard/tenant/payments" icon={FaMoneyBillWave} label="Payments" expanded={expanded} />
        <NavItem href="/dashboard/tenant/settings" icon={FaCog} label="Settings" expanded={expanded} />
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="flex items-center px-4 py-3 w-full text-red-600 hover:bg-red-100">
          <FaSignOutAlt className="text-xl" />
          {expanded && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

// ✅ Define a type for NavItem props
interface NavItemProps {
  href: string;
  icon: IconType;
  label: string;
  expanded: boolean;
}

// ✅ Use the type in NavItem component
const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, expanded }) => (
  <Link href={href} className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200">
    <Icon className="text-xl" />
    {expanded && <span className="ml-3">{label}</span>}
  </Link>
);

export default TenantSidebar;
