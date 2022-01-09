import { PostError } from '../../common/error/index.js';
import { db } from '../../repositories/index.js';
import { responseError, responseSuccess } from '../../Utils/index.js';
import Post from '../../models/post.model.js';

export default class PostServices {
    async getDetailPost(username, slug) {
        try {
            const result = await db.user.aggregate([
                {
                    '$match': {
                        'username': `${username}`
                    }
                }, {
                    '$unset': [
                        'password', 'salt'
                    ]
                }, {
                    '$lookup': {
                        'from': 'post',
                        'localField': '_id',
                        'foreignField': 'owner_id',
                        'as': 'owner_post'
                    }
                }, {
                    '$unwind': {
                        'path': '$owner_post'
                    }
                }, {
                    '$match': {
                        'owner_post.slug': `${slug}`
                    }
                }, {
                    '$lookup': {
                        'from': 'tag',
                        'localField': 'owner_post.tags',
                        'foreignField': 'name',
                        'as': 'owner_post.tags'
                    }
                }
            ]).toArray();
            if (result.length === 0) {
                return responseError(PostError.POST_NOT_FOUND);
            }
            return responseSuccess(result)
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
    async upPost(owner_id, title, coverImg, content, tags) {
        try {
            const newPost = new Post(owner_id, title, coverImg, content, tags);
            await db.post.insertOne(newPost);
            return responseSuccess(newPost);
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }

    async getListPreviewPost(page, limit) {
        //trả về thông tin của chủ sở hữu bài viết
        try {
            const result = await db.post.aggregate([
                {
                    '$sort': {
                        'createdAt': -1
                    }
                }, {
                    '$skip': page * limit
                }, {
                    '$limit': limit
                }, {
                    '$lookup': {
                        'from': 'tag',
                        'localField': 'tags',
                        'foreignField': 'name',
                        'as': 'tags'
                    }
                }, {
                    '$lookup': {
                        'from': 'user',
                        'localField': 'owner_id',
                        'foreignField': '_id',
                        'as': 'ownerData'
                    }
                }, {
                    '$unwind': {
                        'path': '$ownerData'
                    }
                }, {
                    '$unset': [
                        'ownerData.password', 'ownerData.salt', '_id', 'ownerData.type', 'ownerData.status'
                    ]
                }
            ]).toArray();
            return responseSuccess(result);
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
}
