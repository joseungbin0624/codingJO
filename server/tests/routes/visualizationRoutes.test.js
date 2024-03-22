const request = require('supertest');
const app = require('../../app'); // Express 앱 경로를 알맞게 수정해주세요.

describe('Visualization Routes Test', () => {
  describe('POST /visualizations', () => {
    it('should create a new visualization', async () => {
      const visualizationData = { title: 'Test Title', description: 'Test Description', data: { chart: 'bar' }, createdBy: 'someUserId' };
      const response = await request(app)
        .post('/api/v1/visualizations')
        .send(visualizationData);

      expect(response.statusCode).toBe(201);
      expect(response.body.title).toBe(visualizationData.title);
    });
  });

  describe('GET /visualizations', () => {
    it('should return all visualizations', async () => {
      const response = await request(app).get('/api/v1/visualizations');

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
    });
  });

  describe('GET /visualizations/:id', () => {
    it('should return a visualization by id', async () => {
      const visualizationId = 'someVisualizationId';
      const response = await request(app).get(`/api/v1/visualizations/${visualizationId}`);

      expect(response.statusCode).toBe(200);
      // 여기서는 실제 ID에 대한 응답을 모의해야 합니다.
    });
  });
});