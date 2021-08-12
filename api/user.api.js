const express = require('express');
const router = express.Router();

// @param id
// return info of user
router.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})


module.exports = router