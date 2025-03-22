"use client";

import Sidebar from "./sidebar";
import TenantTopbar from "./topbar";
import "@/styles/globals.css";
import Footer from "./footer";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed and Full Height */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        <TenantTopbar />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}