import { ObjectId } from 'mongodb';
import { generateTime, generateKeyString, slug } from '../Utils/index.js';
export default class Post {
    constructor(owner_id, title, coverImg, content, tags) {
        this.owner_id = new ObjectId(owner_id);
        this.title = title;
        this.coverImg = coverImg;
        this.content = content;
        this.comments = [];
        this.like = 0;
        this.views = 0;
        this.tags = tags;
        this.createdAt = generateTime();
        this.lastModified = generateTime();
        this.slug = slug(title) + "-" + generateKeyString();
    }
}
