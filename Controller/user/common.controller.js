import formidable from 'formidable';
import cloudinary from "../../config/Cloudinary.js";
import { responseError, responseSuccess } from "../../Utils/index.js";
export default class UserCommonController{
    async uploadFile(req, res) {
        const form = formidable();
        form.parse(req, async (err, fields, files) => {
            try {
                const result = await cloudinary.uploader.upload(files.file.path);
                res.send(responseSuccess(result.url.replace("upload", "upload/e_blur:50,q_80")))

            } catch (error) {
                res.send(responseError(error))
            }
        });
    }
}