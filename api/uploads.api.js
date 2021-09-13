import express from 'express';
import formidable from 'formidable';
import clouddinary from './../config/Cloudinary.js';
import { db } from './../repositories/index.js';
import { responseError, responseSuccess } from './../Utils/index.js';

const router = express.Router();

router.post('/upload', async function (req, res) {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    try {
      const result = await clouddinary.uploader.upload(files.file.path);
      res.send(responseSuccess(result.url.replace("upload", "upload/e_blur:50,q_80")))

    } catch (error) {
      res.send(responseError(error))
    }
  });
})
router.get('/upload/tag', async (req, res) => {
  const resp = db.tag.find({});
  const result = await resp.toArray();
  res.send(result)
})
export default router;