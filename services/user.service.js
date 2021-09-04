
import jwt from "jsonwebtoken";
import { ObjectId } from 'mongodb';
import { db } from '../repositories/index.js';
import signUpTemplate from '../template/signUp.template.js';
import User from './../models/user.model.js';
import { generatePassword, checkPassword, sendMail } from './../Utils/index.js';
import { AuthError, CommonError, UserError } from './../common/error/index.js';
import { UserStatus } from './../common/enum.js';
const UserModal = new User();
export default class UserServices {
    async login(username, password) {
        try {
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
                    if (user[0].status == 0) {
                        return UserError.LOGIN_SNS_VERIFY_EMAIL
                    } else if (user[0].status == 1) {
                        const token = UserModal.generateToken(userFound._id, userFound.username, userFound.type)
                        const refreshToken = UserModal.generateRefreshToken(userFound._id, userFound.username, userFound.type)
                        return {
                            user, token, refreshToken
                        }
                    } else {
                        return UserError.ACCOUNT_LOCKED
                    }
                } else {
                    return UserError.LOGIN_WRONG_PASSWORD;
                }
            } else {
                return UserError.LOGIN_WRONG_USERNAME
            }
        } catch (error) {
            return err || UserError.UNKNOWN_ERROR
        }
    }
    async register(email, username, password) {
        try {
            const findEmail = await db.user.findOne({ "email": email });
            const findUsername = await db.user.findOne({ "username": username });

            if (findEmail?.email) {
                return UserError.EMAIL_EXISTING
            } else if (findUsername?.username) {
                return UserError.USER_EXISTING
            } else {
                const genPass = generatePassword(password);
                const newUser = new User(email, genPass.hassedPassword, username, genPass.salt);
                const userInserted = await db.user.insertOne(newUser);
                const token = UserModal.generateToken(userInserted.insertedId.toString(), newUser.username, newUser.type);

                const mailOptions = {
                    from: process.env.EMAIL_SERVER,
                    to: newUser.email,
                    ...signUpTemplate(`${process.env.DOMAIN}/api/verify-account?token=${token}`)
                }

                await sendMail(mailOptions);
                return { message: "Đăng ký thành công. Vui lòng kiểm tra Email" };
            }
        } catch (error) {
            return error || UserError.UNKNOWN_ERROR
        }
    }
    async confirmEmail(tokenParam) {
        jwt.verify(tokenParam, process.env.PRIVATE_KEY, (err, decoded) => {
            if (decoded) {
                try {
                    const id = decoded.id;
                    console.log(id);
                    const username = decoded.username;
                    const type = decoded.type;
                    console.log(id);
                    db.user.updateOne({ _id: ObjectId(id) }, { $set: { status: UserStatus.VERIFY } });
                    return true
                } catch (error) {
                    return err || CommonError.UNKNOWN_ERROR
                }
            } else if (err.message == "jwt expired") {
                return(AuthError.TOKEN_EXPIRED);
            } else {
                return(AuthError.TOKEN_INVALID)
            }
        })
    }
}
