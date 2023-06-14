import express from 'express';
import interactController from '../controllers/interactController.js';

const router = express.Router();

router.post('/:id', interactController.addABook);
router.get('/:id', interactController.getAllBook);
router.delete('/:id', interactController.deleteABook);

export default router;
