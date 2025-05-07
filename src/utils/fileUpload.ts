import { uploadImage } from './cloudinary';
// Removed incorrect import and directly used Express.Multer.File
type MulterFile = Express.Multer.File;

export const handleImageUpload = async (file: MulterFile): Promise<string> => {
  try {
    const result = await uploadImage(file);
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
