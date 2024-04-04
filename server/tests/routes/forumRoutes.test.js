const request = require('supertest');
const app = require('../../app');
const Forum = require('../../api/v1/models/Forum');
const User = require('../../api/v1/models/User');

describe('Forum Routes Integration Tests', () => {
  let createdBy;

  beforeEach(async () => {
    createdBy = await User.create({
      username: 'forumCreator',
      email: 'creator@example.com',
      password: 'password'
    });
  });

  afterEach(async () => {
    await Forum.deleteMany({});
    await User.deleteMany({});
  });

  test('POST /api/forums 새로운 포럼 생성 및 반환', async () => {
    const forumData = {
      title: 'New Forum',
      description: 'Forum description',
      createdBy: createdBy._id,
    };

    const response = await request(app)
      .post('/api/forums')
      .send(forumData)
      .expect(201);

    expect(response.body.title).toEqual(forumData.title);
    expect(response.body.description).toEqual(forumData.description);
    expect(response.body.createdBy).toEqual(createdBy._id.toString());
  });

  test('GET /api/forums 모든 포럼 조회', async () => {
    const response = await request(app).get('/api/forums').expect(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
