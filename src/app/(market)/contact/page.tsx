"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // You can later connect this to a Next.js API route
      console.log("Form submitted:", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 mt-16">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      
      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
          
          <div className="flex items-center space-x-4 mb-3">
            <FaPhone className="text-red-500 text-xl" />
            <p className="text-gray-700">+254 712 345 678</p>
          </div>

          <div className="flex items-center space-x-4 mb-3">
            <FaEnvelope className="text-red-500 text-xl" />
            <p className="text-gray-700">info@livingspot.com</p>
          </div>

          <div className="flex items-center space-x-4 mb-3">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <p className="text-gray-700">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required
              className="border p-3 w-full rounded-lg"
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required
              className="border p-3 w-full rounded-lg"
            />
            
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required
              rows={4} 
              className="border p-3 w-full rounded-lg"
            ></textarea>
            
            <button 
              type="submit" 
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
            >
              Send Message
            </button>
          </form>
          
          {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
