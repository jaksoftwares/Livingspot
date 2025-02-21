"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6 pt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
