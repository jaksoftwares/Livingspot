import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';
type MulterFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});

const bufferToStream = (buffer: Buffer) => {
  const readable = new Readable();
  readable._read = () => {};
  readable.push(buffer);
  readable.push(null);
  return readable;
};

export const uploadImage = (file: MulterFile): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'livingspot' },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result);
      }
    );
    bufferToStream(file.buffer).pipe(stream);
  });
};
