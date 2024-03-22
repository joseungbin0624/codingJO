// achievementsService.js
const Achievement = require('../models/Achievement');

async function createAchievement(achievementData) {
    const achievement = new Achievement(achievementData);
    await achievement.save();
    return achievement;
}

async function getAllAchievements() {
    return await Achievement.find({});
}

async function getAchievementById(id) {
    const achievement = await Achievement.findById(id);
    if (!achievement) {
        throw new Error('Achievement not found');
    }
    return achievement;
}

async function updateAchievement(id, updateData) {
    const achievement = await Achievement.findByIdAndUpdate(id, updateData, { new: true });
    if (!achievement) {
        throw new Error('Achievement not found');
    }
    return achievement;
}

async function deleteAchievement(id) {
    const achievement = await Achievement.findByIdAndDelete(id);
    if (!achievement) {
        throw new Error('Achievement not found');
    }
    return achievement;
}

async function getUserAchievements(userId) {
    return await Achievement.find({ achievedBy: userId });
}

module.exports = { createAchievement, getAllAchievements, getAchievementById, updateAchievement, deleteAchievement, getUserAchievements };
