const crypto = require('crypto');
const { generateTime } = require('./../../Utils')
class User {
    constructor(email, password, username) {
        this.email = email;
        this.username = username;
        this.name = username;
        this.sex = 0,
        this.description = '',
        this.favoriteTopic = null,
        this.avatar = null,
        this.type = 1,
        this.password = this.generatePassword(password)["hassedPassword"].toString("base64");
        this.salt = this.generatePassword(password)["privateKey"];
        this.createdAt = generateTime();
    }
    generatePassword(password) {
        const salt = crypto.randomBytes(128).toString("base64");
        const hassedPassword = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512");
        return {
            "privateKey": salt,
            "hassedPassword": hassedPassword
        }
    }
}
module.exports = User;