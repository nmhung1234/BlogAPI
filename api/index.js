const express = require('express');
const router = express.Router();
const authAPI = require('./auth');
const userAPI = require('./user.api.js');
const postAPI = require('./post.api.js');
const uploadfileAPI = require('./uploads.api.js');
const { authorization } = require('./../middleware/authorization')

router.use('/api', authAPI);
router.use('/api', userAPI);
router.use('/api', postAPI);
router.use('/api', uploadfileAPI);


module.exports = router;