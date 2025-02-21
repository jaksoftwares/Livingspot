import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';

export async function POST(req: NextRequest) {
    try {
        const user = await authMiddleware(req); // Ensure user is authenticated
        if (user.role !== 'TENANT') {
            return NextResponse.json({ error: "Only tenants can show interest in houses." }, { status: 403 });
        }

        const { houseId } = await req.json();
        if (!houseId) {
            return NextResponse.json({ error: "House ID is required." }, { status: 400 });
        }

        // Check if the house exists
        const house = await prisma.listing.findUnique({ where: { id: houseId } });
        if (!house) {
            return NextResponse.json({ error: "House not found." }, { status: 404 });
        }

        // Create an interest record
        await prisma.interest.create({
            data: {
                tenantId: user.id,
                houseId,
                // ownerId: house.ownerId, 
            },
        });

        // TODO: Trigger a notification to the homeowner

        return NextResponse.json({ message: "Interest registered successfully." }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
