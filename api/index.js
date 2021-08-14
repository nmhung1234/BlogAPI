const express = require('express');
const authAPI = require('./auth');
const userAPI = require('./user.api.js');
const postAPI = require('./post.api.js');
const uploadfileAPI = require('./uploads.api.js');
const router = express.Router();

router.use('/api', authAPI);
router.use('/api', userAPI);
router.use('/api', postAPI);
router.use('/api', uploadfileAPI);


module.exports = router;