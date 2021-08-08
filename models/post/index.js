const { generateTime } = require('./../../Utils')
class Post {
    constructor(owner_id, title, content, tags) {
        this.owner_id = owner_id;
        this.title = title;
        this.content = content;
        this.comments = {};
        this.like = 0;
        this.views = 0;
        this.tags = tags
        this.createdAt = generateTime();
        this.lastmodified = generateTime();
    }
}

module.exports = Post;