import { Router } from 'express';
import { getCafes, getCafeById, addCafe, updateCafe, deleteCafe } from './controllers.js';

const router = Router();


router.get('/cafes', getCafes);
router.get('/cafes/:id', getCafeById);
router.post('/cafes', addCafe);
router.put('/cafes/:id', updateCafe);
router.delete('/cafes/:id', deleteCafe);

export default router;