import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
cloudinary.v2.config({
    cloud_name: 'nmhung',
    api_key: Number(process.env.CLOUDINARY_API_KEY),
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});

export default cloudinary
