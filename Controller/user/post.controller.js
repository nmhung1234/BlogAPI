import PostServices from "../../services/user/post.service.js";

const PostSv = new PostServices();
export default class UserPostController {
    async upPost(req, res) {
        const { owner_id, title, coverImg, content, tags } = req.body;
        const result = await PostSv.upPost(owner_id, title, coverImg, content, tags);
        res.send(result);
    }
    async getListPreviewPost(req, res) {
        const limit = Number(req.query.limit);
        const page = Number(req.query.page) - 1;
        const result = await PostSv.getListPreviewPost(page, limit);
        res.send(result);
    }
    async getDetailPost(req, res) {
        const { username, slug } = req.query;
        const result = await PostSv.getDetailPost(username, slug);
        res.send(result);
    }
}
