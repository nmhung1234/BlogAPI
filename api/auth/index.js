const express = require('express');
const register = require('./register');
const login = require('./login');

const router = express.Router();

router.use(register);
router.use(login);

module.exports = router;
