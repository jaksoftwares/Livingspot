import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Uploads image to Cloudinary and returns the URL
export async function uploadImage(base64Image: string): Promise<string> {
    try {
        const result = await cloudinary.uploader.upload(base64Image, {
            folder: 'listings'
        });

        return result.secure_url; // Returns URL of the uploaded image
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Image upload failed");
    }
}
