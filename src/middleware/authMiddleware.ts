import { NextRequest } from 'next/server';
import { verifyToken } from '@/utils/auth';
import prisma from '@/lib/db';
import { JwtPayload } from 'jsonwebtoken';

// Define user structure
interface AuthenticatedUser {
    id: string;
    role: string; // Could be "HOMEOWNER", "TENANT", "ADMIN", etc.
}

/**
 * Middleware to verify user authentication
 * - Throws an error if authentication fails instead of returning null
 */
export async function authMiddleware(req: NextRequest): Promise<AuthenticatedUser> {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("Unauthorized: No valid token provided.");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token) as JwtPayload & { userId: string };

        if (!decoded?.userId) {
            throw new Error("Invalid token payload.");
        }

        // Fetch user from the database
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, role: true }
        });

        if (!user) {
            throw new Error("User not found.");
        }

        return user; // ✅ Successfully authenticated user

    } catch (error) {
        console.error("Authentication failed:", error);
        throw new Error("Unauthorized: Authentication failed.");
    }
}

/**
 * Middleware to check if the user is a Homeowner
 * - Ensures only homeowners can access certain routes
 */
export async function isHomeowner(req: NextRequest): Promise<AuthenticatedUser> {
    const user = await authMiddleware(req);

    if (user.role !== 'HOMEOWNER') {
        throw new Error("Access denied. Only Homeowners are allowed.");
    }

    return user;
}

/**
 * Middleware to check if the user is a Tenant
 * - Ensures only tenants can access certain routes
 */
export async function isTenant(req: NextRequest): Promise<AuthenticatedUser> {
    const user = await authMiddleware(req);

    if (user.role !== 'TENANT') {
        throw new Error("Access denied. Only Tenants are allowed.");
    }

    return user;
}

/**
 * Optional Authentication Middleware
 * - Does not throw an error, returns null if no user is found
 * - Useful for routes that can be accessed publicly but may have an authenticated user
 */
export async function optionalAuthMiddleware(req: NextRequest): Promise<AuthenticatedUser | null> {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null; // No authentication required for this case
    }

    try {
        return await authMiddleware(req);
    } catch (error) {
        console.warn("Optional authentication failed:", error);
        return null;
    }
}
