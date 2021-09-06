import express from 'express';
import UserServices from './../../../services/user.service.js';
const router = express.Router();
const UserSv = new UserServices();

router.post('/register', async function (req, res) {
    const { username, password, email } = req.body;
    const result = await UserSv.register(email, username, password);
    res.send(result);
})
router.get('/verify-account', async function (req, res) {
    const { token } = req.query;
    console.log(token);
    const result = await UserSv.confirmEmail(token);
    res.send(result);
})

export default router;