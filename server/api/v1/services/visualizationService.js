const Visualization = require('../models/Visualization');

// 데이터 시각화 정보 생성
async function createVisualization(visualizationData) {
    const visualization = new Visualization(visualizationData);
    await visualization.save();
    return visualization;
}

// 모든 데이터 시각화 정보 조회
async function getAllVisualizations() {
    return await Visualization.find({});
}

// 특정 데이터 시각화 정보 조회
async function getVisualizationById(id) {
    const visualization = await Visualization.findById(id);
    if (!visualization) {
        throw new Error('Visualization not found');
    }
    return visualization;
}

module.exports = {
    createVisualization,
    getAllVisualizations,
    getVisualizationById,
};

