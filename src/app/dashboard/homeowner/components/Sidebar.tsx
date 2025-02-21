"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard/homeowner" },
    { name: "Upload House", href: "/dashboard/homeowner/upload" },
    { name: "Messages", href: "/dashboard/homeowner/messages" },
    { name: "Settings", href: "/dashboard/homeowner/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6 fixed">
      <h2 className="text-xl font-bold mb-6">Homeowner Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block p-3 rounded ${
                  pathname === link.href ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
