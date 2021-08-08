const express = require('express');
const router = express.Router();

const Post = require('./../../models/post');
const {db} = require('./../../repositories')

router.post('/post', (req, res) => {
    res.send(req.body);
    const owner_id = req.body.owner_id;
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;
    const newPost = new Post(owner_id, title, content, tags);
    db.post.insertOne(newPost);
})

module.exports = router;