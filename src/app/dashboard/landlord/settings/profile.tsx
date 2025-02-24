"use client";

import { useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Experienced landlord with multiple properties.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🏠 Edit Profile</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" className="w-full p-3 border rounded-lg" />
        <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-lg" />
        <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" className="w-full p-3 border rounded-lg" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
