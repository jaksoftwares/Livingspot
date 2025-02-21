import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';

export async function POST(req: NextRequest) {
    try {
        const user = await authMiddleware(req);

        // ✅ Ensure user is authenticated
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { receiverId, content } = await req.json();

        // ✅ Validate request body
        if (!receiverId || !content) {
            return NextResponse.json({ error: 'Receiver and content are required' }, { status: 400 });
        }

        // ✅ Create message
        const message = await prisma.message.create({
            data: {
                senderId: user.id,
                receiverId,
                content
            }
        });

        return NextResponse.json({ message: 'Message sent successfully', data: message }, { status: 201 });

    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
