const tutorialsService = require('../services/tutorialsService');

// 튜토리얼 생성
exports.createTutorial = async (req, res) => {
    try {
        const tutorial = await tutorialsService.createTutorial(req.body);
        res.status(201).json(tutorial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 모든 튜토리얼 조회
exports.getAllTutorials = async (req, res) => {
    try {
        const tutorials = await tutorialsService.getAllTutorials();
        res.status(200).json(tutorials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 특정 튜토리얼 조회
exports.getTutorialById = async (req, res) => {
    try {
        const tutorial = await tutorialsService.getTutorialById(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ message: 'Tutorial not found' });
        }
        res.status(200).json(tutorial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 튜토리얼 업데이트
exports.updateTutorial = async (req, res) => {
    try {
        const updatedTutorial = await tutorialsService.updateTutorial(req.params.id, req.body);
        res.status(200).json(updatedTutorial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 튜토리얼 삭제
exports.deleteTutorial = async (req, res) => {
    try {
        await tutorialsService.deleteTutorial(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 태그별 튜토리얼 조회
exports.getTutorialsByTags = async (req, res) => {
    try {
        const tags = req.query.tags.split(',');
        const tutorials = await tutorialsService.getTutorialsByTags(tags);
        res.status(200).json(tutorials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
