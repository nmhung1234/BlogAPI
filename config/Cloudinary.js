const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'nmhung',
    api_key: process.env.CLOUDINATY_API_KEY,
    api_secret: process.env.CLOUDINATY_SECRET_KEY
});

module.exports = cloudinary
