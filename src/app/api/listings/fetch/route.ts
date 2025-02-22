import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
    try {
        const listings = await prisma.listing.findMany({
            include: { owner: true }
        });

        return NextResponse.json(listings, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
    }
}
