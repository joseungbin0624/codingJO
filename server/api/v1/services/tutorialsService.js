// tutorialsService.js
const Tutorial = require('../models/Tutorial');

// tutorialsService.js 파일 내 createTutorial 함수 수정
async function createTutorial(tutorialData) {
    try {
        const tutorial = new Tutorial(tutorialData);
        await tutorial.save();
        return tutorial;
    } catch (error) {
        console.error("Error creating tutorial: ", error.message); // 로그 추가
        throw new Error('Error creating tutorial');
    }
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
