import { NextRequest, NextResponse } from 'next/server';
import { isHomeowner } from '@/middleware/authMiddleware';
import prisma from '@/lib/db';
import { uploadImage } from '@/utils/upload';

export async function POST(req: NextRequest) {
    try {
        const user = await isHomeowner(req); 

        // ✅ Check if 'user' is actually a response (error case)
        if (user instanceof NextResponse) {
            return user; // Return error response immediately
        }

        // Extract request data
        const { title, description, price, location, images } = await req.json();

        if (!images || !Array.isArray(images) || images.length === 0) {
            return NextResponse.json({ error: "At least one image is required" }, { status: 400 });
        }

        // Upload images to Cloudinary and get URLs
        const uploadedImages = await Promise.all(images.map(uploadImage));

        // ✅ Now 'user.id' is guaranteed to exist
        const newListing = await prisma.listing.create({
            data: {
                title,
                description,
                price,
                location,
                imageUrls: { set: uploadedImages },
                ownerId: user.id // ✅ TypeScript now knows 'id' exists
            }
        });

        return NextResponse.json({ message: "Listing created successfully!", listing: newListing }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
