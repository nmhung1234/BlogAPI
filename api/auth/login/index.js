const express = require('express');
const router = express.Router();
const { db } = require('../../../repositories')
const { checkPassword } = require('./../../../Utils')

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userFound = await findUser(username);
    if (userFound) {
        let checkpass = checkPassword(password, userFound.salt, userFound.password);
        if (checkpass) {
            res.send("đăng nhập thành công");
        } else {
            res.send("Mật khẩu không chính xác");
        }

    } else {
        res.send("Tên tài khoản không không chính xác");
    }

    function findUser(username) {
        const user = db.user.findOne({ username: username });
        return user;
    }
});

module.exports = router