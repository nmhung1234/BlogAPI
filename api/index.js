import express from 'express';
import authAPI from './auth/index.js';
import userAPI from './user.api.js';
import postAPI from './post.api.js';
import uploadfileAPI from './uploads.api.js';
import { authorization } from './../middleware/authorization.js'
const router = express.Router();

router.use('/api', authAPI);
router.use('/api', userAPI);
router.use('/api', postAPI);
router.use('/api', uploadfileAPI);


export default router;