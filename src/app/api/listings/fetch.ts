// New: app/api/listings/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: "Listings API" });
}
