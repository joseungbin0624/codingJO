const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const visualizationService = require('../../api/v1/services/visualizationService');
const Visualization = require('../../api/v1/models/Visualization');

describe('시각화 서비스', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Visualization.deleteMany({});
    });

    it('시각화를 생성해야 한다', async () => {
        const visualizationData = { title: 'New Visualization', description: 'Visualization Description', data: { numbers: [1, 2, 3] } };
        const visualization = await visualizationService.createVisualization(visualizationData);

        expect(visualization.title).toBe(visualizationData.title);
        expect(visualization.description).toBe(visualizationData.description);
    });

    it('모든 시각화를 검색해야 한다', async () => {
        await visualizationService.createVisualization({ title: 'Visualization 1', description: 'Description 1', data: { numbers: [1, 2, 3] } });
        await visualizationService.createVisualization({ title: 'Visualization 2', description: 'Description 2', data: { numbers: [4, 5, 6] } });

        const visualizations = await visualizationService.getAllVisualizations();
        expect(visualizations.length).toBeGreaterThan(0);
    });

    it('ID로 시각화를 검색해야 한다', async () => {
        const createdVisualization = await visualizationService.createVisualization({ title: 'New Visualization', description: 'Description', data: { numbers: [1, 2, 3] } });

        const visualization = await visualizationService.getVisualizationById(createdVisualization._id);
        expect(visualization.id).toEqual(createdVisualization.id);
    });
});
