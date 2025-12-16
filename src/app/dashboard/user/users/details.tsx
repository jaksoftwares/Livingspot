"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const users: Record<number, { name: string; age: number; email: string; phone: string; property: string; status: string }> = {
  1: { name: "Alice Johnson", age: 27, email: "alice@example.com", phone: "123-456-7890", property: "Apartment 101", status: "Pending" },
  2: { name: "Mark Davis", age: 30, email: "mark@example.com", phone: "987-654-3210", property: "Studio 205", status: "Approved" },
  3: { name: "Sarah Lee", age: 25, email: "sarah@example.com", phone: "555-666-7777", property: "Townhouse 12", status: "Pending" },
};

const UserDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get tenant ID from query params and convert to number
  const tenantId = Number(searchParams.get("id"));

  // Ensure `tenantId` is a valid number and exists in `users`
  const user = users[tenantId];

  // Use state correctly (outside conditional checks)
  const [status, setStatus] = useState(user?.status || "");

  if (!user) {
    return <div className="p-6 text-red-500">User not found.</div>;
  }

  const handleAccept = () => {
    setStatus("Approved");
    alert(`User ${user.name} approved!`);
  };

  const handleDecline = () => {
    setStatus("Declined");
    alert(`User ${user.name} declined.`);
    router.push("/dashboard/user/users");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">User Details</h1>
      <p className="text-gray-600 mt-2">Review user details before approving.</p>

      <div className="mt-4 space-y-3">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Property:</strong> {user.property}</p>
        <p><strong>Status:</strong> <span className={`px-3 py-1 rounded-full text-white ${status === "Pending" ? "bg-yellow-500" : status === "Approved" ? "bg-green-500" : "bg-red-500"}`}>{status}</span></p>
      </div>

      {status === "Pending" && (
        <div className="mt-6 flex space-x-4">
          <button onClick={handleAccept} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Approve</button>
          <button onClick={handleDecline} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Decline</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
