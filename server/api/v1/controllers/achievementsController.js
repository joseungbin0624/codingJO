const achievementsService = require('../services/achievementsService');

exports.getAllAchievements = async (req, res) => {
    try {
        const achievements = await achievementsService.getAllAchievements();
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAchievementById = async (req, res) => {
    try {
        const achievement = await achievementsService.getAchievementById(req.params.achievementId);
        if (!achievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }
        res.status(200).json(achievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAchievement = async (req, res) => {
    try {
        const newAchievement = await achievementsService.createAchievement(req.body);
        res.status(201).json(newAchievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAchievement = async (req, res) => {
    try {
        const updatedAchievement = await achievementsService.updateAchievement(req.params.achievementId, req.body);
        if (!updatedAchievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }
        res.status(200).json(updatedAchievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// controllers/achievementsController.js 또는 해당 경로의 파일

// controllers/achievementsController.js

exports.deleteAchievement = async (req, res) => {
    try {
      // achievementsService를 사용하여 달성도 삭제
      await achievementsService.deleteAchievement(req.params.achievementId);
      return res.status(200).json({ message: 'Achievement deleted successfully' });
    } catch (error) {
      if (error.message === 'Achievement not found') {
        return res.status(404).json({ message: error.message });
      }
      // 일반적인 서버 내부 에러 처리
      return res.status(500).json({ message: 'Internal server error', error: error.toString() });
    }
};

  
  

exports.getUserAchievements = async (req, res) => {
    try {
        const userAchievements = await achievementsService.getUserAchievements(req.params.userId);
        if (!userAchievements) {
            return res.status(404).json({ message: 'User achievements not found' });
        }
        res.status(200).json(userAchievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
