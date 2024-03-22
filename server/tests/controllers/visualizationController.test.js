const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/visualizationService');
const visualizationService = require('../../api/v1/services/visualizationService');

describe('Visualization Controller Tests', () => {
  beforeEach(() => {
    visualizationService.createVisualization.mockResolvedValue({
      id: 'visualizationId',
      title: 'Visualization Title',
      description: 'Visualization Description',
      data: {}
    });
    visualizationService.getAllVisualizations.mockResolvedValue([{
      id: 'visualizationId',
      title: 'Visualization Title',
      description: 'Visualization Description',
      data: {}
    }]);
    visualizationService.getVisualizationById.mockResolvedValue({
      id: 'visualizationId',
      title: 'Visualization Title',
      description: 'Visualization Description',
      data: {}
    });
  });

  test('Create visualization', async () => {
    const visualizationData = {
      title: 'Visualization Title',
      description: 'Visualization Description',
      data: {}
    };
    const response = await request(app)
      .post('/api/visualizations')
      .send(visualizationData);
    expect(response.statusCode).toBe(201);
    expect(visualizationService.createVisualization).toHaveBeenCalledWith(visualizationData);
  });

  test('Get all visualizations', async () => {
    const response = await request(app)
      .get('/api/visualizations');
    expect(response.statusCode).toBe(200);
    expect(visualizationService.getAllVisualizations).toHaveBeenCalled();
  });

  test('Get visualization by ID', async () => {
    const visualizationId = 'visualizationId';
    const response = await request(app)
      .get(`/api/visualizations/${visualizationId}`);
    expect(response.statusCode).toBe(200);
    expect(visualizationService.getVisualizationById).toHaveBeenCalledWith(visualizationId);
  });
});
