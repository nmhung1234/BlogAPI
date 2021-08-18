const express = require('express');
const router = express.Router();
const UserServices = require('./../../../services/user.service');
const UserSv = new UserServices();

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let logedIn = await UserSv.login(username, password);
    res.send(logedIn);

});

module.exports = router