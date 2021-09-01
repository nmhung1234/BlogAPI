
import { db } from '../repositories/index.js';
import Post from './../models/post.model.js';
import User from './../models/user.model.js';
import { generatePassword, checkPassword } from './../Utils/index.js';
const UserModal = new User();
export default class UserServices {
    async login(username, password) {

        const userFound = await db.user.findOne({ username: username });
        if (userFound) {
            let checkpass = checkPassword(password, userFound.salt, userFound.password);
            if (checkpass) {
                let user = await db.user.aggregate([
                    {
                        $match: {
                            username: userFound.username
                        }
                    },
                    {
                        $unset: ["password", "salt"]
                    },
                ]).toArray();
                const token = UserModal.generateToken(userFound._id, userFound.username, userFound.type)
                const refreshToken = UserModal.generateRefreshToken(userFound._id, userFound.username, userFound.type)
                return {
                    user, token, refreshToken
                }
            } else {
                return ("Mật khẩu không chính xác");
            }
        } else {
            return ("Tên tài khoản không không chính xác");
        }
    }
    async register(email, username, password) {

        const findEmail = await db.user.findOne({ "email": email });
        const findUsername = await db.user.findOne({ "username": username });

        if (findEmail?.email) {
            return ("Email đã tồn tại")
        } else if (findUsername?.username) {
            return ("Username đã tồn tại")
        } else {
            const genPass = generatePassword(password);
            const newUser = User(email, genPass.hassedPassword, username, genPass.salt);
            await db.user.insertOne(newUser);
            const token = UserModal.generateToken(userFound._id, userFound.username, userFound.type);
            const refreshToken = UserModal.generateRefreshToken(userFound._id, userFound.username, userFound.type)
            return ({ newUser, token, refreshToken });
        }
    }
    async upPost(owner_id, title, coverImg, content, tags) {
        const newPost = new Post(owner_id, title, coverImg, content, tags);
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
}
