// import { ReactNode } from "react";
// import Sidebar from "@/components/layout/Sidebar";
// import Navbar from "@/components/layout/Navbar";
// import { useAuth } from "@/hooks/useAuth";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// export default function DashboardLayout({ children }: DashboardLayoutProps) {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Redirect if not authenticated
//   if (!loading && !user) {
//     router.push("/auth/login");
//     return null;
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar - Collapsible */}
//       <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
//         {/* Main Content Area */}
//         <main className="flex-1 p-6 overflow-auto">{children}</main>
//       </div>
//     </div>
//   );
// }
