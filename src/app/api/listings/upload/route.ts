import { NextRequest, NextResponse } from 'next/server';
import { uploadImage } from '@/utils/upload';

export async function POST(req: NextRequest) {
    try {
        const { image } = await req.json();

        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const imageUrl = await uploadImage(image); // Upload image and get URL

        return NextResponse.json({ imageUrl }, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
    }
}
