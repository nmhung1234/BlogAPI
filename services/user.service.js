
const { db } = require('../repositories')
const Post = require('./../models/post.model');


class UserServices {
    async upPost(owner_id, title, titleImg, content, tags) {
        const newPost = new Post(owner_id, title, titleImg, content, tags);
        const ss = await db.post.insertOne(newPost);
        if (ss) {
            return newPost;
        } else {
            let err = "Lỗi khi đăng bài viết";
            return err
        }
    }

    async getPost(page, limit) {
        //trả về thông tin của chủ sở hữu bài viết
        const ss = await db.post.aggregate([
            {
                $skip: page * limit
            },
            {
                $limit: limit
            },
            {
                $lookup: {
                    from: 'tag',
                    localField: 'tags',
                    foreignField: 'name',
                    as: 'tag'
                }
            },
            {
                $unwind: {
                    path: '$tag'
                }
            },
            {
                $group: {
                    _id: "$_id",
                    tags: {
                        $push: "$tag"
                    }
                }
            },
            {
                $lookup: {
                    from: 'post',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'postData'
                }
            },
            {
                $unwind: {
                    path: "$postData"
                }
            },
            {
                $sort: {
                    postData: -1
                }
            },
            {
                $lookup: {
                    from: 'user',
                    localField: 'postData.owner_id',
                    foreignField: '_id',
                    as: 'ownerData'
                }
            },
            {
                $unwind: {
                    path: '$ownerData'
                }
            },
            {
                $unset: ['ownerData.password', 'ownerData.salt', "_id"]
            },

        ]).toArray();

        if (ss) {
            const dataRes = { data: ss, status: "Success", statusCode: 200 };
            return dataRes;
        } else {
            let err = "Lỗi khi đăng bài viết";
            return err
        }
    }
    // asyn uploadImg(){

    // }
}
module.exports = UserServices;