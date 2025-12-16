"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [mainImage, setMainImage] = useState(images[0]);

    // If no images provided, show fallback
    if (!images || images.length === 0) {
        return (
            <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                No Images Available
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Main Large Image */}
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <Image
                    src={mainImage}
                    alt="Property Main View"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 md:gap-4 overflow-x-auto pb-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setMainImage(img)}
                            className={`relative h-20 w-full rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? "border-red-500 opacity-100" : "border-transparent opacity-70 hover:opacity-100"
                                }`}
                        >
                            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
