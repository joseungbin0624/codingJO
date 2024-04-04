const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Visualization = require('../../api/v1/models/Visualization');
const visualizationService = require('../../api/v1/services/visualizationService');

describe('Visualization Service Tests', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Visualization.deleteMany({});
    });

    it('createVisualization should create a new visualization', async () => {
        const visualizationData = { title: 'New Visualization', description: 'Visualization Description', data: { chartType: 'bar' }, createdBy: new mongoose.Types.ObjectId() };
        const visualization = await visualizationService.createVisualization(visualizationData);
        
        expect(visualization.title).toBe(visualizationData.title);
        expect(visualization.description).toBe(visualizationData.description);
        expect(visualization.data.chartType).toBe(visualizationData.data.chartType);
    });

    it('getAllVisualizations should retrieve all visualizations', async () => {
        await visualizationService.createVisualization({ title: 'Visualization 1', description: 'Description 1', data: { chartType: 'bar' }, createdBy: new mongoose.Types.ObjectId() });
        await visualizationService.createVisualization({ title: 'Visualization 2', description: 'Description 2', data: { chartType: 'line' }, createdBy: new mongoose.Types.ObjectId() });
        
        const visualizations = await visualizationService.getAllVisualizations();
        expect(visualizations.length).toBe(2);
    });

    it('getVisualizationById should retrieve a visualization by ID', async () => {
        const visualization = await visualizationService.createVisualization({ title: 'New Visualization', description: 'Visualization Description', data: { chartType: 'bar' }, createdBy: new mongoose.Types.ObjectId() });
        
        const foundVisualization = await visualizationService.getVisualizationById(visualization._id);
        expect(foundVisualization._id.toString()).toBe(visualization._id.toString());
    });
});
