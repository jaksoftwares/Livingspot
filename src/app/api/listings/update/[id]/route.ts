import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const user = await authMiddleware(req);

        // ✅ If 'user' is an error response, return it immediately
        if (user instanceof NextResponse) {
            return user;
        }

        // ✅ Now, TypeScript knows 'user' is a valid object with 'id'
        const listing = await prisma.listing.findUnique({ where: { id: params.id } });

        if (!listing || listing.ownerId !== user.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const updatedData = await req.json();
        const updatedListing = await prisma.listing.update({
            where: { id: params.id },
            data: updatedData
        });

        return NextResponse.json(updatedListing, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Failed to update listing" }, { status: 500 });
    }
}
