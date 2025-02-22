import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const user = await authMiddleware(req);

        // ✅ If 'user' is an error response, return it immediately
        if (user instanceof NextResponse) {
            return user;
        }

        // ✅ Now, TypeScript knows 'user' is an object and has 'id'
        const listing = await prisma.listing.findUnique({ where: { id: params.id } });

        if (!listing || listing.ownerId !== user.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        await prisma.listing.delete({ where: { id: params.id } });

        return NextResponse.json({ message: "Listing deleted successfully" }, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete listing" }, { status: 500 });
    }
}
