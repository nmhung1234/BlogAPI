const jwt = require("jsonwebtoken")
const { generateTime } = require('../Utils');
require('dotenv').config();
class User {
    constructor(email, password, username, salt) {
        this.email = email;
        this.username = username;
        this.name = username;
        this.sex = 0;
        this.description = '';
        this.favoriteTopic = null;
        this.avatar = null;
        this.type = 0;
        this.password = password;
        this.salt = salt;
        this.createdAt = generateTime();
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
module.exports = User;