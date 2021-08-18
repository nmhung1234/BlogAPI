const express = require('express');
const register = require('./register');
const login = require('./login');
const refreshToken = require('./refreshToken');

const router = express.Router();

router.use(register);
router.use(login);
router.use(refreshToken);

module.exports = router;
