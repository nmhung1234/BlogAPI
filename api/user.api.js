import express from 'express';
import UserServices from './../services/user.service.js';
const router = express.Router();
const UserSv = new UserServices();
// @param id
// return info of user
router.get('/user', async (req, res) => {
    const { username } = req.query;
    const result = await UserSv.getUserData(username);
    res.send(result)
})


export default router;