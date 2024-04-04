const express = require('express');
const achievementsController = require('../controllers/achievementsController');
const router = express.Router();

router.get('/', achievementsController.getAllAchievements);
router.get('/:achievementId', achievementsController.getAchievementById);
router.post('/', achievementsController.createAchievement);
router.put('/:achievementId', achievementsController.updateAchievement);
router.delete('/:achievementId', achievementsController.deleteAchievement);
router.get('/user/:userId', achievementsController.getUserAchievements);

module.exports = router;
