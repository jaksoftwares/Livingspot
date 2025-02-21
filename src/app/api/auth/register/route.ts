import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { hashPassword } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, role } = await req.json();

        // Check if email is already registered
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: "Email already in use." }, { status: 400 });
        }

        // Hash the password before storing
        const hashedPassword = await hashPassword(password);

        // Create new user
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword, role }
        });

        return NextResponse.json({ message: "User registered successfully!", user }, { status: 201 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
