const { ObjectId } = require('mongodb')
const { generateTime } = require('../Utils')
class Post {
    constructor(owner_id, title, titleImg, content, tags) {
        this.owner_id = new ObjectId(owner_id);
        this.title = title;
        this.titleImg = titleImg;
        this.content = content;
        this.comments = {};
        this.like = 0;
        this.views = 0;
        this.tags = tags;
        this.createdAt = generateTime();
        this.lastmodified = generateTime();
    }
}

module.exports = Post;