import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

// Register User
export const registerUser = async (userData: unknown) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// Login User
export const loginUser = async (userData: unknown) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

// Fetch Listings
export const fetchListings = async () => {
  return await axios.get(`${API_URL}/listings/fetch`);
};

// Show Interest in House
export const expressInterest = async (houseId: string) => {
  return await axios.post(`${API_URL}/houses/interests`, { houseId });
};

// Fetch Messages
export const fetchMessages = async () => {
  return await axios.get(`${API_URL}/messages`);
};
