const express = require('express');
const userAPI = require('./user');
const authAPI = require('./auth');
const postAPI = require('./post');
const router = express.Router();

router.use('/api', userAPI);
router.use('/api', authAPI);
router.use('/api', postAPI);

module.exports = router;