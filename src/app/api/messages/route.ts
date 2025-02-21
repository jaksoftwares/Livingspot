import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';

export async function GET(req: NextRequest) {
    try {
        // Authenticate user
        let user;
        try {
            user = await authMiddleware(req);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            return NextResponse.json({ error: "Unauthorized: Please log in" }, { status: 401 });
        }

        // Fetch messages where user is sender or receiver
        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: user.id },
                    { receiverId: user.id }
                ]
            },
            orderBy: {
                createdAt: 'desc' // Sorting by timestamp
            }
        });

        return NextResponse.json({ messages }, { status: 200 });

    } catch (error) {
        console.error('🔥 Error fetching messages:', error);
        return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
    }
}
