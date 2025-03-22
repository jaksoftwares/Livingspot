"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import {  
  FaHome, FaMoneyBillWave, FaEnvelope, FaBookmark, FaCog, FaSignOutAlt, FaSearch, FaBars 
} from "react-icons/fa";

const TenantSidebar = () => {
  const [expanded, setExpanded] = useState<boolean | null>(null);

  // Ensure the state is only set on the client to prevent SSR mismatches
  useEffect(() => {
    setExpanded(true);
  }, []);

  if (expanded === null) return null; // Avoid rendering during SSR

  return (
    <div className={`h-screen bg-white shadow-lg border-r transition-all duration-300 ${expanded ? "w-64" : "w-20"} flex flex-col`}>
      
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between border-b">
        {expanded && <h1 className="text-xl font-bold text-gray-800">LivingSpot</h1>}
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-gray-600 hover:text-blue-500 focus:outline-none"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1">
        <NavItem href="/dashboard/tenant" icon={FaHome} label="Dashboard" expanded={expanded} />
        <NavItem href="/dashboard/tenant/search" icon={FaSearch} label="Search for Houses" expanded={expanded} />
        <NavItem href="/dashboard/tenant/saved-houses" icon={FaBookmark} label="Saved Houses" expanded={expanded} />
        <NavItem href="/dashboard/tenant/messages" icon={FaEnvelope} label="Messages" expanded={expanded} />
        <NavItem href="/dashboard/tenant/payments" icon={FaMoneyBillWave} label="Payments" expanded={expanded} />
        <NavItem href="/dashboard/tenant/settings" icon={FaCog} label="Settings" expanded={expanded} />
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="flex items-center px-4 py-3 w-full text-red-600 hover:bg-red-100 transition-all">
          <FaSignOutAlt className="text-xl" />
          {expanded && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

// ✅ NavItem Component
interface NavItemProps {
  href: string;
  icon: IconType;
  label: string;
  expanded: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, expanded }) => (
  <Link href={href} className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-all">
    <Icon className="text-xl" />
    {expanded && <span className="ml-3">{label}</span>}
  </Link>
);

export default TenantSidebar;
