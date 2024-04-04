const request = require('supertest');
const app = require('../../app');
const Tutorial = require('../../api/v1/models/Tutorial');

describe('Tutorials Routes Integration Tests', () => {
  afterEach(async () => {
    await Tutorial.deleteMany({});
  });

  test('POST /api/tutorials 새로운 튜토리얼 생성 및 반환', async () => {
    const tutorialData = {
      title: 'New Tutorial',
      description: 'Tutorial description',
      published: false,
    };

    const response = await request(app)
      .post('/api/tutorials')
      .send(tutorialData)
      .expect(201);

    expect(response.body.title).toEqual(tutorialData.title);
    expect(response.body.description).toEqual(tutorialData.description);
    expect(response.body.published).toEqual(tutorialData.published);
  });

  test('GET /api/tutorials 모든 튜토리얼 조회', async () => {
    const response = await request(app).get('/api/tutorials').expect(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
