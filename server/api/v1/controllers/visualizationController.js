const visualizationService = require('../services/visualizationService');

// 시각화 정보 생성
exports.createVisualization = async (req, res) => {
    try {
        const visualization = await visualizationService.createVisualization(req.body);
        res.status(201).json(visualization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 모든 시각화 정보 조회
exports.getAllVisualizations = async (req, res) => {
    try {
        const visualizations = await visualizationService.getAllVisualizations();
        res.status(200).json(visualizations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 특정 시각화 정보 조회
exports.getVisualizationById = async (req, res) => {
    try {
        const visualization = await visualizationService.getVisualizationById(req.params.id);
        if (!visualization) {
            return res.status(404).json({ message: 'Visualization not found' });
        }
        res.status(200).json(visualization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

