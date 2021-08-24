const { db } = require('../repositories');

class PostServices {

    async getDetailPost(username, slugString) {
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
                    'owner_post.slugString': `${slugString}`
                }
            }, {
                '$lookup': {
                    'from': 'tag',
                    'localField': 'owner_post.tags',
                    'foreignField': 'name',
                    'as': 'tags'
                }
            }
        ]).toArray();

        if (result) {
            return result
        } else {
            return { status: 404, message: 'Không tìm thấy bài viết' }
        }
    }
}

module.exports = PostServices;