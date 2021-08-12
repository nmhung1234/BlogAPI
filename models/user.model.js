const crypto = require('crypto');
const { generateTime } = require('../Utils');

class User {
    constructor(email, password, username, salt) {
        this.email = email;
        this.username = username;
        this.name = username;
        this.sex = 0;
        this.description = '';
        this.favoriteTopic = null;
        this.avatar = null;
        this.type = 1;
        this.password = password;
        this.salt = salt;
        this.createdAt = generateTime();
    }

}
module.exports = User;