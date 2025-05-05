"use client";
import { useState } from "react";

interface DropdownMenuProps {
  options: { label: string; onClick: () => void }[];
}

export function DropdownMenu({ options }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="px-3 py-1 bg-gray-200 rounded">
        Menu ▼
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-40">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                option.onClick();
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
