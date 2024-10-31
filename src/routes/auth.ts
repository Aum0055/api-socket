import express from 'express';
import { auth } from '../controllers/anth-controller';
import { validateLogin } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/auth', validateLogin,auth);

export default router;
