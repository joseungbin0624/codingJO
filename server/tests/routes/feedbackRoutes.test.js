const request = require('supertest');
const app = require('../../app');
const Feedback = require('../../api/v1/models/Feedback');
const User = require('../../api/v1/models/User');

describe('Feedback Routes Integration Tests', () => {
  let user;

  beforeEach(async () => {
    user = await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password'
    });
  });

  afterEach(async () => {
    await Feedback.deleteMany({});
    await User.deleteMany({});
  });

  test('POST /api/feedback 새로운 피드백 생성 및 반환', async () => {
    const feedbackData = {
      userId: user._id,
      content: 'This is a test feedback',
    };

    const response = await request(app)
      .post('/api/feedback')
      .send(feedbackData)
      .expect(201);

    expect(response.body.userId).toEqual(feedbackData.userId.toString());
    expect(response.body.content).toEqual(feedbackData.content);
  });

  test('GET /api/feedback 모든 피드백 조회', async () => {
    const response = await request(app).get('/api/feedback').expect(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
