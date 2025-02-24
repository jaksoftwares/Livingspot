"use client";

import { useState } from "react";

const AddPropertyPage = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    status: "Available",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Property added successfully!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Add Property</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          {/* Property Name */}
          <div>
            <label className="block text-gray-600 font-medium">Property Name</label>
            <input type="text" name="name" className="w-full p-2 border rounded-lg mt-1" value={form.name} onChange={handleChange} required />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-600 font-medium">Location</label>
            <input type="text" name="location" className="w-full p-2 border rounded-lg mt-1" value={form.location} onChange={handleChange} required />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-600 font-medium">Price (Per Month)</label>
            <input type="text" name="price" className="w-full p-2 border rounded-lg mt-1" value={form.price} onChange={handleChange} required />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-600 font-medium">Status</label>
            <select name="status" className="w-full p-2 border rounded-lg mt-1" value={form.status} onChange={handleChange}>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Occupied">Occupied</option>
            </select>
          </div>

          {/* Upload Image */}
          <div className="col-span-2">
            <label className="block text-gray-600 font-medium">Property Image</label>
            <input type="file" name="image" className="w-full p-2 border rounded-lg mt-1" />
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
