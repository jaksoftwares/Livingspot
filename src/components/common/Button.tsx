"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-md transition",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" && "border border-gray-300 text-gray-700 hover:bg-gray-100",
        variant === "ghost" && "text-gray-600 hover:bg-gray-200",
        className
      )}
      {...props}
    />
  );
}
