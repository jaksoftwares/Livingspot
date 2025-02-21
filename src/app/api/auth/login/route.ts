import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { comparePasswords, generateToken } from '@/utils/auth';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
        }

        // Check if password is correct
        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
        }

        // Generate JWT token
        const token = generateToken(user.id);

        return NextResponse.json({ message: "Login successful", token, user }, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}
