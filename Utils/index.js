const crypto = require('crypto');
const colors = require('colors');

const generateTime = () => new Date().toISOString();

const generatePassword = (password) => {
    const salt = crypto.randomBytes(128).toString("base64");
    const hassedPassword = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512").toString("base64");
    return { salt, hassedPassword }
};

const checkPassword = (password, salt, passwordInDb) => {
    const hassedPassword = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512").toString("base64");
    if (hassedPassword == passwordInDb) {
        return true;
    } else {
        return false;
    }
}

module.exports = { generateTime, generatePassword, checkPassword }