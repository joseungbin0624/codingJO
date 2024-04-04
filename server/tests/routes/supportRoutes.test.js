const request = require('supertest');
const app = require('../../app');
const SupportTicket = require('../../api/v1/models/SupportTicket');
const User = require('../../api/v1/models/User');

describe('Support Routes Integration Tests', () => {
  let user;

  beforeEach(async () => {
    user = await User.create({
      username: 'supportUser',
      email: 'supportuser@example.com',
      password: 'password',
    });
  });

  afterEach(async () => {
    await SupportTicket.deleteMany({});
    await User.deleteMany({});
  });

  test('POST /api/support 티켓 생성 및 반환', async () => {
    const ticketData = {
      userId: user._id,
      subject: 'Need Help',
      description: 'I am unable to access my course materials.'
    };

    const response = await request(app)
      .post('/api/support')
      .send(ticketData)
      .expect(201);

    expect(response.body.userId).toEqual(ticketData.userId.toString());
    expect(response.body.subject).toEqual(ticketData.subject);
    expect(response.body.description).toEqual(ticketData.description);
  });

  test('GET /api/support 특정 사용자의 모든 티켓 조회', async () => {
    const response = await request(app).get(`/api/support?userId=${user._id}`).expect(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
