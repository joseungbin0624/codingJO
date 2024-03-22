const request = require('supertest');
const app = require('../../app'); // app 경로에 맞게 조정

describe('Feedback Routes Tests', () => {
  test('POST /api/feedback 라우트', async () => {
    await request(app)
      .post('/api/feedback')
      .send({
        userId: 'someUserId',
        content: 'This is feedback.',
        rating: 4
      })
      .expect(201);
  });

  test('GET /api/feedback/:userId 라우트', async () => {
    await request(app)
      .get('/api/feedback/someUserId')
      .expect(200);
  });
});
