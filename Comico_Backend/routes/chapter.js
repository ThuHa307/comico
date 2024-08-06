import express from 'express';
import chapterController from '../controllers/chapterController.js';

const router = express.Router();

router.post('/', chapterController.addAChapter);
router.get('/:id', chapterController.getAChapter);
router.patch('/:id', chapterController.updateChapter);
router.delete('/:id', chapterController.deleteChapter);

export default router;
