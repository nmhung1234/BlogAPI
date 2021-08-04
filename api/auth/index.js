const express = require('express');
const register = require('./register');

const router = express.Router();

router.use(register);

module.exports = router;
