const express = require('express');
const router = express.Router();
const UserServices = require('./../../../services/user.service')
const UserSv = new UserServices();``

router.post('/register', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = await UserSv.register(email, username, password);
    res.send(newUser);
})

module.exports = router;