const express = require('express');
const router = express.Router();
const User = require('./../../../models/user');
const { db } = require('../../../repository');
const { generatePassword } = require('../../../Utils')

router.post('/register', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const genPass = generatePassword(password);
    const newUser = new User(email, genPass.hassedPassword, username, genPass.salt);
    
    const findEmail = await db.user.findOne({ "email": email });
    const findUsername = await db.user.findOne({ "username": username });
    if (findEmail?.email) {
        res.send("Email đã tồn tại")
    } else if (findUsername?.username) {
        res.send("Username đã tồn tại")
    } else {
        db.user.insertOne(newUser)
        res.send(newUser);
    }
})

module.exports = router;