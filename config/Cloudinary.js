const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'nmhung',
    api_key: '125293126268823',
    api_secret: 'DDckSWBTe_-QcIbB_A7jO1qA7ek'
});

module.exports = cloudinary
