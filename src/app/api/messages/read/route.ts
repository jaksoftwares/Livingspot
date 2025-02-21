import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { authMiddleware } from '@/middleware/authMiddleware';
import { Prisma } from '@prisma/client';

export async function PATCH(req: NextRequest) {
    try {
        const user = await authMiddleware(req);

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { messageId } = await req.json();

        if (!messageId) {
            return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
        }

        const existingMessage = await prisma.message.findUnique({
            where: { id: messageId }
        });

        if (!existingMessage || existingMessage.receiverId !== user.id) {
            return NextResponse.json({ error: 'Message not found or unauthorized' }, { status: 404 });
        }

        // ✅ Ensure Prisma recognizes isRead as a valid field
        const message = await prisma.message.update({
            where: { id: messageId },
            data: { isRead: true } as Prisma.MessageUpdateInput
        });

        return NextResponse.json({ message: 'Message marked as read', data: message }, { status: 200 });

    } catch (error) {
        console.error('Error marking message as read:', error);
        return NextResponse.json({ error: 'Failed to mark message as read' }, { status: 500 });
    }
}
