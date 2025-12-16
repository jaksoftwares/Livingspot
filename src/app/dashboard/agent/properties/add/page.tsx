"use client";

import { useState } from "react";
import Image from "next/image";

const AddPropertyPage = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    amenities: "",
    status: "Available",
    category: "",
    description: "",
    image: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Property added successfully!");
    // Here, you would send `form` data to the backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">🏡 Add a New Space</h1>
      <p className="text-sm text-gray-500 mb-6 bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
        <strong>Note:</strong> Only vacant, built spaces meant for living or working are allowed. Land, plots, and undeveloped property are not permitted.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Space Title */}
          <div>
            <label className="block text-gray-600 font-medium">Space Title</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-600 font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-600 font-medium">Price (Per Month)</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-gray-600 font-medium">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.bedrooms}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-gray-600 font-medium">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.bathrooms}
              onChange={handleChange}
              required
            />
          </div>

          {/* Property Size */}
          <div>
            <label className="block text-gray-600 font-medium">Size (sq ft)</label>
            <input
              type="number"
              name="size"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.size}
              onChange={handleChange}
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-600 font-medium">Status</label>
            <select
              name="status"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Occupied">Occupied</option>
            </select>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-gray-600 font-medium">Amenities (comma separated)</label>
            <input
              type="text"
              name="amenities"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.amenities}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-600 font-medium">Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded-lg mt-1"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <optgroup label="Residential">
                <option value="Apartment">Apartment</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Studio">Studio</option>
                <option value="Mansion">Mansion</option>
                <option value="Villa">Villa</option>
              </optgroup>
              <optgroup label="Commercial">
                <option value="Office">Office</option>
                <option value="Shop">Shop</option>
                <option value="Warehouse">Warehouse</option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 font-medium">Description</label>
          <textarea
            name="description"
            className="w-full p-2 border rounded-lg mt-1 h-24"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-600 font-medium">Upload Space Image</label>
          <input type="file" name="image" className="w-full p-2 border rounded-lg mt-1" onChange={handleImageChange} />
          {imagePreview && (
            <div className="mt-4">
              <Image src={imagePreview} alt="Property Preview" width={400} height={200} className="rounded-lg shadow-md" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition">
          Add Space
        </button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
