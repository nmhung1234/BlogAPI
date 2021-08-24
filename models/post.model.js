const { ObjectId } = require('mongodb')
const { generateTime, generateKeyString, slug } = require('../Utils')
class Post {
    constructor(owner_id, title, coverImg, content, tags) {
        this.owner_id = new ObjectId(owner_id);
        this.title = title;
        this.coverImg = coverImg;
        this.content = content;
        this.comments = {};
        this.like = 0;
        this.views = 0;
        this.tags = tags;
        this.createdAt = generateTime();
        this.lastmodified = generateTime();
        this.slugString = slug(title) + "-" + generateKeyString();
    }
}

module.exports = Post;