import express from 'express';
import formidable from 'formidable';
import cloudinary from './../config/Cloudinary.js';
import { db } from './../repositories/index.js';
const router = express.Router();

router.post('/upload', async function (req, res) {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    await cloudinary.uploader.upload(files.file.path, (error, result) => {
      const compressImg = result.url.replace("upload", "upload/e_blur:50,q_80");
      res.send(compressImg)
    });
  });
})
router.get('/upload/tag', async (req, res) => {
  const resp = db.tag.find({});
  const tag = await resp.toArray();
  res.send(tag)
})
export default router;