import { Book } from '../model/model.js';
import { paginatedResults } from '../utils/pagination.js';
import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router();

router.post('/', bookController.addABook);
router.get('/', bookController.getAllBook);
router.get('/:id', bookController.getABook);
router.get('/:genre', bookController.getABook);
router.get('/', paginatedResults(Book), (req, res) => {
    res.json(res.paginatedResults);
});
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
