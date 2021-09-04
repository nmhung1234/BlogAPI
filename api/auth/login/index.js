import express from 'express';
import UserServices from './../../../services/user.service.js';

const UserSv = new UserServices();
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let logedIn = await UserSv.login(username, password);
    res.send(logedIn);

});

export default router;