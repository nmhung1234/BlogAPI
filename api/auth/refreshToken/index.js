const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


router.post('/refreshToken', (req, res) => {
    const refreshToken = req.body.refreshToken;
    jwt.verify(refreshToken, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
            console.error(err.toString());
            return res.status(401).json({ "error": true, "message": 'Unauthorized access.', err });
        }

        const id = decoded.id;
        const username = decoded.username;
        const type = decoded.type;
        const token = jwt.sign({
            id, username, type
        }, process.env.PRIVATE_KEY, {
            expiresIn: Number(process.env.TOKEN_LIFE)
        })
        res.send({ token })
    })
})
module.exports = router