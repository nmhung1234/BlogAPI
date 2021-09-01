import express from 'express';
import UserServices from './../../../services/user.service.js';
const router = express.Router();
const UserSv = new UserServices();

router.post('/register', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = await UserSv.register(email, username, password);
    res.send(newUser);
})

export default router;