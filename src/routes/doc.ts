import express from 'express';
import { document } from '../controllers/doc-controller';
import { authMiddleware } from '../middleware/doc-middleware';

const router = express.Router();

router.get('/doc',authMiddleware, document);

export default router;
