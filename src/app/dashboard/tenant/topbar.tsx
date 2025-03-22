"use client";

import { useState, useEffect } from "react";
import { FaUserCircle, FaBell, FaSignOutAlt, FaCog, FaCoins, FaBars } from "react-icons/fa";

const TenantTopbar = () => {
  const [time, setTime] = useState(new Date());
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [credits] = useState(120); // Placeholder credits balance

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get a dynamic greeting message
  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between relative w-full">
      {/* Left Section - Greeting & Time */}
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-lg lg:text-xl font-semibold text-gray-800">{getGreeting()}, Tenant!</h1>
          <p className="text-gray-500 text-sm">{time.toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Right Section - Notifications, Credits & Profile */}
      <div className="hidden lg:flex items-center space-x-6">
        {/* Credits Section */}
        <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
          <FaCoins className="text-yellow-500 mr-2 text-lg" />
          <span className="text-gray-800 font-semibold">{credits} Credits</span>
        </div>

        {/* Notifications Bell */}
        <div className="relative">
          <FaBell
            className="text-gray-600 text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => setNotificationsOpen(!isNotificationsOpen)}
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            2
          </span>

          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              <h3 className="text-gray-800 font-semibold">Notifications</h3>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="py-2 border-b">📩 Reply from your landlord</li>
                <li className="py-2">💳 Upcoming rent payment reminder</li>
              </ul>
              <button className="text-blue-500 text-sm mt-3 w-full text-center">
                View all notifications
              </button>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <FaUserCircle
            className="text-gray-600 text-3xl cursor-pointer hover:text-blue-500"
            onClick={() => setProfileOpen(!isProfileOpen)}
          />

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
              <h3 className="text-gray-800 font-semibold">Jane Doe</h3>
              <p className="text-gray-500 text-sm">Tenant</p>
              <hr className="my-2" />
              <button className="flex items-center w-full py-2 text-gray-700 hover:text-blue-500">
                <FaCog className="mr-2" /> Account Settings
              </button>
              <button className="flex items-center w-full py-2 text-gray-700 hover:text-red-500">
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button (Right-Aligned) */}
      <button
        className="lg:hidden text-gray-700 text-2xl absolute right-4"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </button>

      {/* Mobile Menu (Appears on the Right) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-60 bg-white shadow-md z-50 p-4">
          {/* Credits */}
          <div className="flex items-center justify-between py-2">
            <FaCoins className="text-yellow-500 text-lg" />
            <span className="text-gray-800 font-semibold">{credits} Credits</span>
          </div>

          {/* Notifications */}
          <button
            className="flex items-center w-full py-2 text-gray-700 hover:text-blue-500"
            onClick={() => setNotificationsOpen(!isNotificationsOpen)}
          >
            <FaBell className="mr-2" /> Notifications (2)
          </button>

          {/* Profile */}
          <button
            className="flex items-center w-full py-2 text-gray-700 hover:text-blue-500"
            onClick={() => setProfileOpen(!isProfileOpen)}
          >
            <FaUserCircle className="mr-2" /> Profile
          </button>

          {/* Logout */}
          <button className="flex items-center w-full py-2 text-gray-700 hover:text-red-500">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default TenantTopbar;
