const request = require('supertest');
const app = require('../../app');
const Visualization = require('../../api/v1/models/Visualization');

describe('Visualization Routes Test', () => {
    afterEach(async () => {
        await Visualization.deleteMany({});
    });

    test('Should create a new visualization', async () => {
        const visualizationData = {
            title: 'New Visualization',
            description: 'Description of the new visualization',
            data: { chartType: 'bar' },
            createdBy: 'someUserId',
        };

        const response = await request(app)
            .post('/api/visualizations')
            .send(visualizationData)
            .expect(201);

        const visualization = await Visualization.findById(response.body._id);
        expect(visualization).not.toBeNull();
    });

    test('Should fetch all visualizations', async () => {
        const response = await request(app).get('/api/visualizations').expect(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
