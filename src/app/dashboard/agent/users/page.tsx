"use client";

import Link from "next/link";

const userApplications = [
  { id: 1, name: "Alice Johnson", property: "Apartment 101", status: "Pending" },
  { id: 2, name: "Mark Davis", property: "Studio 205", status: "Approved" },
  { id: 3, name: "Sarah Lee", property: "Townhouse 12", status: "Pending" },
];

const UsersPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🏠 User Applications</h1>
      <p className="text-gray-600 mt-2">Review and manage user requests.</p>

      <div className="mt-6 space-y-4">
        {userApplications.map((user) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.property}</p>
            </div>
            <div>
              <span className={`px-3 py-1 rounded-full text-white ${user.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>
                {user.status}
              </span>
              <Link href={`/dashboard/agent/users/details?id=${user.id}`} className="ml-3 text-blue-600 underline">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
