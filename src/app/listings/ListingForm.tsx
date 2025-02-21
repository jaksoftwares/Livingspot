"use client";
import React, { useState } from "react";

const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Listing submitted:", formData);
    // API call logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a Listing</h2>

      <label className="block text-gray-700">Title</label>
      <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleChange} 
        className="border p-2 w-full rounded mb-3"
        required 
      />

      <label className="block text-gray-700">Price (Ksh)</label>
      <input 
        type="number" 
        name="price" 
        value={formData.price} 
        onChange={handleChange} 
        className="border p-2 w-full rounded mb-3"
        required 
      />

      <label className="block text-gray-700">Location</label>
      <input 
        type="text" 
        name="location" 
        value={formData.location} 
        onChange={handleChange} 
        className="border p-2 w-full rounded mb-3"
        required 
      />

      <label className="block text-gray-700">Image URL</label>
      <input 
        type="text" 
        name="image" 
        value={formData.image} 
        onChange={handleChange} 
        className="border p-2 w-full rounded mb-3"
        required 
      />

      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Listing
      </button>
    </form>
  );
};

export default ListingForm;
