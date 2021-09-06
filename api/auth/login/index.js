import express from 'express';
import UserServices from './../../../services/user.service.js';

const UserSv = new UserServices();
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await UserSv.login(username, password);
    res.send(result);

});

export default router;