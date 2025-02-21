import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Hash user passwords before storing
export async function hashPassword(password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

// Verify password during login
export async function comparePasswords(plainPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

// Generate JWT Token
export function generateToken(userId: string) {
    return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: '7d' // Token expires in 7 days
    });
}

// Verify JWT Token
export function verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET as string);
}
