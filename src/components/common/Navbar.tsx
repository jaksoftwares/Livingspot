// import { Avatar } from "./avatar";

"use client"
export function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold">LivingSpot</h1>
      <div className="flex items-center gap-4">
        {/* <Avatar src="/profile.jpg" /> */}
        <button className="px-3 py-1 bg-blue-500 text-white rounded">Logout</button>
      </div>
    </div>
  );
}
