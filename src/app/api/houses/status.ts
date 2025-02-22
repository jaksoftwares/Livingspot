import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';

export async function POST(req: NextRequest) {
    try {
        const user = await authMiddleware(req); // Ensure user is authenticated
        if (user.role !== 'TENANT') {
            return NextResponse.json({ error: "Only tenants can show interest in houses." }, { status: 403 });
        }

        const { listingId } = await req.json(); // Change to listingId
        if (!listingId) {
            return NextResponse.json({ error: "Listing ID is required." }, { status: 400 });
        }

        // Check if the listing exists
        const listing = await prisma.listing.findUnique({ where: { id: listingId } });
        if (!listing) {
            return NextResponse.json({ error: "Listing not found." }, { status: 404 });
        }

        // Create an interest record
        await prisma.interest.create({
            data: {
                tenantId: user.id,
                houseId: listingId, // Change to listingId to match schema
            },
        });

        // TODO: Trigger a notification to the homeowner (listing.ownerId)

        return NextResponse.json({ message: "Interest registered successfully." }, { status: 201 });
    } catch (error) {
        console.error("Error registering interest:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
