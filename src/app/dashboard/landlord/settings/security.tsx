"use client";

import { useState } from "react";

const SecurityPage = () => {
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🔒 Security & Password</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input type="password" name="current" value={passwords.current} onChange={handleChange} placeholder="Current Password" className="w-full p-3 border rounded-lg" />
        <input type="password" name="new" value={passwords.new} onChange={handleChange} placeholder="New Password" className="w-full p-3 border rounded-lg" />
        <input type="password" name="confirm" value={passwords.confirm} onChange={handleChange} placeholder="Confirm New Password" className="w-full p-3 border rounded-lg" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Change Password</button>
      </form>
    </div>
  );
};

export default SecurityPage;
