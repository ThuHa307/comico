import express from 'express';
import genreController from '../controllers/genreController.js';

const router = express.Router();

router.post('/', genreController.addAGenre);
router.get('/', genreController.getAllGenre);
router.get('/:name', genreController.getBook);
router.get('/:id', genreController.getAGenre);
router.get('/books/:genre', genreController.getBooksByGenre);
router.patch('/:code', genreController.updateAGenre);
router.delete('/:id', genreController.deleteGenre);

export default router;
