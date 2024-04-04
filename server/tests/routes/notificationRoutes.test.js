const request = require('supertest');
const app = require('../../app');
const Notification = require('../../api/v1/models/Notification');
const User = require('../../api/v1/models/User');

describe('Notification Routes Integration Tests', () => {
  let user;

  beforeEach(async () => {
    user = await User.create({
      username: 'notificationUser',
      email: 'notification@example.com',
      password: 'password'
    });
  });

  afterEach(async () => {
    await Notification.deleteMany({});
    await User.deleteMany({});
  });

  test('POST /api/notifications 새로운 알림 생성 및 반환', async () => {
    const notificationData = {
      userId: user._id,
      message: 'This is a test notification',
    };

    const response = await request(app)
      .post('/api/notifications')
      .send(notificationData)
      .expect(201);

    expect(response.body.userId).toEqual(notificationData.userId.toString());
    expect(response.body.message).toEqual(notificationData.message);
  });

  test('GET /api/notifications 모든 알림 조회', async () => {
    const response = await request(app).get('/api/notifications').expect(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
