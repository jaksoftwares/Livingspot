"use client"

import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      {/* Sidebar Toggle & Branding */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onSidebarToggle}>
          <Menu className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold">LivingSpot Dashboard</h1>
      </div>
      
      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6" />
        </Button>
        
        {/* Profile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback><User /></AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

