const express = require('express');
const router = express.Router();
const { db } = require('./../../../repository')
const { checkPassword } = require('./../../../Utils')

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(password);
    const userFound = await findUser(username);
    if (userFound) {
        let checkpass = checkPassword(password, userFound.salt, userFound.password);
        console.log(checkpass);
        if (checkpass) {
            console.log("đăng nhập thành công");
        } else {
            console.log("Mật khẩu không chính xác");
        }

    } else {
        console.log("Tên tài khoản không không chính xác");
    }

    function findUser(username) {
        const user = db.user.findOne({ username: username });
        return user;
    }
});

module.exports = router