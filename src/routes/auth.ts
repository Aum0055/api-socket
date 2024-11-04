import express from 'express';
import { Login } from '../controllers/anth-controller';
import { validateLogin } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/auth/login', validateLogin, Login);

export default router;


