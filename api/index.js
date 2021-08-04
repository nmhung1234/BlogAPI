const express = require('express');
const userAPI = require('./user');
const authAPI = require('./auth');
const router = express.Router();

router.use('/api', userAPI);
router.use('/api', authAPI);

module.exports = router;