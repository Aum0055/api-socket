import express from 'express';
import { document, postdocument } from '../controllers/doc-controller';
import { authMiddleware } from '../middleware/doc-middleware';

const router = express.Router();

router.get('/doc',authMiddleware, document);
router.post('/doc/test',authMiddleware, postdocument);

export default router;
