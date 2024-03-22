const express = require('express');
const achievementsController = require('../controllers/achievementsController');
const router = express.Router();

router.get('/', achievementsController.getAllAchievements);
router.get('/:id', achievementsController.getAchievementById);
router.post('/', achievementsController.createAchievement);
router.put('/:id', achievementsController.updateAchievement);
router.delete('/:id', achievementsController.deleteAchievement);
router.get('/user/:userId', achievementsController.getUserAchievements);

module.exports = router;
