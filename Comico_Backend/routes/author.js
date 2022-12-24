import express from 'express';
import authorController from '../controllers/authorController.js';

const router = express.Router();

router.post('/', authorController.addAuthor);
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAnAuthor);
router.patch('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

export default router;
