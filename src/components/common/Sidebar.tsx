"use client";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <nav>
        <Link href="/dashboard">
          <a className="block px-3 py-2 rounded hover:bg-gray-700">Home</a>
        </Link>
        <Link href="/dashboard/listings">
          <a className="block px-3 py-2 rounded hover:bg-gray-700">Listings</a>
        </Link>
        <Link href="/dashboard/messages">
          <a className="block px-3 py-2 rounded hover:bg-gray-700">Messages</a>
        </Link>
      </nav>
    </div>
  );
}
