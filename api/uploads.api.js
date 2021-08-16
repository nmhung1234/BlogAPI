const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const cloudinary = require('./../config/Cloudinary');
const { db } = require('./../repositories');

router.post('/upload', async function (req, res) {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    await cloudinary.uploader.upload(files.file.path, (error, result) => {
      res.send(result.url)
    });
  });
})
router.get('/upload/tag', async (req, res) => {
  const resp =  db.tag.find({});
  const tag = await resp.toArray();
  res.send(tag)
})
module.exports = router