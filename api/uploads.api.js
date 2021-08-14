const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const cloudinary = require('./../config/Cloudinary');

router.post('/upload', async function (req, res) {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    await cloudinary.uploader.upload(files.file.path, (error, result) => {
      res.send(result.url)
    });
  });
})
module.exports = router