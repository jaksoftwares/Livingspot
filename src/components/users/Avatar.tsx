"use client"

import React from "react";
import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="/avatar.png"
      alt="User Avatar"
      width={40} // Matches w-10 (10 * 4px)
      height={40} // Matches h-10 (10 * 4px)
      className="rounded-full"
      priority // Ensures it loads fast
    />
  );
}
