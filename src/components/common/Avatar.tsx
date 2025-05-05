"use client";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

export function Avatar({ src, alt = "User Avatar", size = 40 }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  );
}
