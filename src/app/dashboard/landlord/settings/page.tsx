"use client";

import Link from "next/link";

const SettingsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">⚙️ Account Settings</h1>
      <p className="text-gray-600 mt-2">Manage your account settings.</p>

      <div className="mt-6 space-y-4">
        <Link href="/dashboard/landlord/settings/profile" className="block bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200">
          🏠 Edit Profile
        </Link>
        <Link href="/dashboard/landlord/settings/security" className="block bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200">
          🔒 Security & Password
        </Link>
        <Link href="/dashboard/landlord/settings/preferences" className="block bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200">
          🔔 Notification Preferences
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
