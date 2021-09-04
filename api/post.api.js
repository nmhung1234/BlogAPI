import express from 'express';
import PostServices from './../services/post.service.js';
const router = express.Router();
const PostSv = new PostServices();

router.post('/post', async (req, res) => {
    const owner_id = req.body.owner_id;
    const title = req.body.title;
    const coverImg = req.body.coverImg;
    const content = req.body.content;
    const tags = req.body.tags;
    let posted = await PostSv.upPost(owner_id, title, coverImg, content, tags);
    res.send(posted);
})

router.get('/post', async (req, res) => {
    const limit = Number(req.query.limit);
    const page = Number(req.query.page) - 1;
    const portRes = await PostSv.getPost(page, limit);
    res.send(portRes);
})

router.get('/post/detail', async (req, res) => {
    const username = req.query.username;
    const slugString = req.query.slugString;
    const result = await PostSv.getDetailPost(username, slugString);
    res.send(result);

})

export default router;