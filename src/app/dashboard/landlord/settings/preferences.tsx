"use client";

import { useState } from "react";

const PreferencesPage = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.checked });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🔔 Notification Preferences</h1>
      <div className="mt-4 space-y-3">
        <label className="flex items-center">
          <input type="checkbox" name="emailNotifications" checked={preferences.emailNotifications} onChange={handleChange} className="mr-2" />
          Email Notifications
        </label>
        <label className="flex items-center">
          <input type="checkbox" name="smsNotifications" checked={preferences.smsNotifications} onChange={handleChange} className="mr-2" />
          SMS Notifications
        </label>
        <label className="flex items-center">
          <input type="checkbox" name="pushNotifications" checked={preferences.pushNotifications} onChange={handleChange} className="mr-2" />
          Push Notifications
        </label>
      </div>
    </div>
  );
};

export default PreferencesPage;
