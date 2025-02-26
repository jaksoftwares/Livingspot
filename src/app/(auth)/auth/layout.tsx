import { ReactNode } from "react";
import "@/styles/globals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Authentication | LivingSpot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Login or Register to access LivingSpot." />
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/auth-bg.jpg')" }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Authentication Container */}
          <main className="relative bg-white p-8 shadow-lg rounded-lg w-full max-w-md z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
