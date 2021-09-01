import express from 'express';
const router = express.Router();

// @param id
// return info of user
router.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})


export default router;