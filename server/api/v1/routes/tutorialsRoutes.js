const express = require('express');
const tutorialsController = require('../controllers/tutorialsController');
const router = express.Router();

router.post('/', tutorialsController.createTutorial);
router.get('/', tutorialsController.getAllTutorials);
router.get('/:id', tutorialsController.getTutorialById);
router.put('/:id', tutorialsController.updateTutorial);
router.delete('/:id', tutorialsController.deleteTutorial);
router.get('/tags', tutorialsController.getTutorialsByTags);

module.exports = router;
