import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: 'nmhung',
    api_key: process.env.CLOUDINATY_API_KEY,
    api_secret: process.env.CLOUDINATY_SECRET_KEY
});

export default cloudinary
