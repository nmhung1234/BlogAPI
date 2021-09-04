import jwt from 'jsonwebtoken';
import express from 'express';
import { AuthError } from '../../../common/error/index.js';
const router = express.Router();


router.post('/refreshToken', (req, res) => {
    const { refreshToken } = req.body;
    jwt.verify(refreshToken, process.env.PRIVATE_KEY, (err, decoded) => {
        if (decoded) {
            const { id, username, type } = decoded;
            const token = jwt.sign({
                id, username, type
            }, process.env.PRIVATE_KEY, {
                expiresIn: Number(process.env.TOKEN_LIFE)
            })
            res.send({ token })
        } else if (err.message == "jwt expired") {
            res.send(AuthError.TOKEN_EXPIRED);
        } else {
            res.send(AuthError.TOKEN_INVALID)
        }
    })
})
export default router;