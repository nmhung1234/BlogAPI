const express = require('express');
const router = express.Router();
const User = require('./../../../models/user');
const { db } = require('../../../repository')

router.post('/register', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const newUser = new User(email, password, username);
    const findUser = await db.user.findOne({ "email": email });
    if (findUser?._id) {
        res.send("Email đã tồn tại")
    } else {
        db.user.insertOne(newUser)
        res.send(newUser);
    }
})

module.exports = router;