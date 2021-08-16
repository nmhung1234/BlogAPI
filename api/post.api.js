const express = require('express');
const router = express.Router();
const UserServices = require('./../services/user.service');
const UserSv = new UserServices();

router.post('/post', async (req, res) => {
    const owner_id = req.body.owner_id;
    const title = req.body.title;
    const titleImg = req.body.titleImg;
    const content = req.body.content;
    const tags = req.body.tags;
    let posted = await UserSv.upPost(owner_id, title, titleImg, content, tags);
    res.send(posted);
})

router.get('/post', async (req, res) => {
    const limit = Number(req.query.limit);
    const page = Number(req.query.page) - 1;
    const portRes = await UserSv.getPost(page, limit);
    res.send(portRes);
})

module.exports = router;