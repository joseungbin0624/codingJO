// tutorialsService.js
const Tutorial = require('../models/Tutorial');

async function createTutorial(tutorialData) {
    const tutorial = new Tutorial(tutorialData);
    await tutorial.save();
    return tutorial;
}

async function getAllTutorials() {
    return await Tutorial.find({});
}

async function getTutorialById(id) {
    const tutorial = await Tutorial.findById(id);
    if (!tutorial) {
        throw new Error('Tutorial not found');
    }
    return tutorial;
}

async function updateTutorial(id, updateData) {
    const tutorial = await Tutorial.findByIdAndUpdate(id, updateData, { new: true });
    if (!tutorial) {
        throw new Error('Tutorial not found');
    }
    return tutorial;
}

async function deleteTutorial(id) {
    const tutorial = await Tutorial.findByIdAndDelete(id);
    if (!tutorial) {
        throw new Error('Tutorial not found');
    }
    return tutorial;
}

async function getTutorialsByTags(tags) {
    return await Tutorial.find({ tags: { $in: tags } });
}

module.exports = { createTutorial, getAllTutorials, getTutorialById, updateTutorial, deleteTutorial, getTutorialsByTags };
