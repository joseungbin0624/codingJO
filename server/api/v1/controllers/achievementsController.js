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
        const achievement = await achievementsService.getAchievementById(req.params.id);
        res.status(200).json(achievement);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.createAchievement = async (req, res) => {
    try {
        const achievement = await achievementsService.createAchievement(req.body);
        res.status(201).json(achievement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateAchievement = async (req, res) => {
    try {
        const updatedAchievement = await achievementsService.updateAchievement(req.params.id, req.body);
        res.status(200).json(updatedAchievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAchievement = async (req, res) => {
    try {
        await achievementsService.deleteAchievement(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserAchievements = async (req, res) => {
    try {
        const achievements = await achievementsService.getUserAchievements(req.params.userId);
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
