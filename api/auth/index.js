import express from 'express';
import register from './register/index.js';
import login from './login/index.js';
import refreshToken from './refreshToken/index.js';

const router = express.Router();

router.use(register);
router.use(login);
router.use(refreshToken);

export default router;

