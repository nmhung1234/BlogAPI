import jwt from "jsonwebtoken";
import { UserStatus, UserType } from "../common/enum.js";
import { generateTime } from '../Utils/index.js';
export default class User {
    constructor(email, password, username, salt) {
        this.email = email;
        this.username = username;
        this.name = username;
        this.sex = 0;
        this.description = '';
        this.favoriteTopic = null;
        this.avatar = null;
        this.type = UserType.USER;
        this.status = UserStatus.UNVERIFY;
        this.password = password;
        this.salt = salt;
        this.createdAt = generateTime();
        this.updateAt = generateTime();
    }
    generateToken(id, username, type) {
        const token = jwt.sign({
            id, username, type
        }, process.env.PRIVATE_KEY, {
            expiresIn: Number(process.env.TOKEN_LIFE)
        })
        return token
    }
    generateRefreshToken(id, username, type) {
        const refreshToken = jwt.sign({
            id, username, type
        }, process.env.PRIVATE_KEY, {
            expiresIn: Number(process.env.REFRESHTOKEN_LIFE)
        })
        return refreshToken
    }

}
