import express from 'express';
import { Login, Logout } from '../controllers/anth-controller';
import { validateLogin } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/auth/login', validateLogin, Login);
// router.post('/auth/logout', validateLogin, Logout);

export default router;


