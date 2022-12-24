import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router();

router.post('/', bookController.addABook);
router.get('/', bookController.getAllBook);
router.get('/:id', bookController.getABook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
