const request = require('supertest');
const app = require('../../app');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');
const Favorite = require('../../api/v1/models/Favorite');

describe('Favorites Routes Integration Tests', () => {
  let user;
  let course;

  beforeEach(async () => {
    user = await User.create({
      username: 'testUser',
      email: 'testuser@example.com',
      password: 'password',
    });

    course = await Course.create({
      title: 'Test Course',
      description: 'This is a test course',
      category: 'Development',
      price: 100,
      instructor: user._id,
    });
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Course.deleteMany({});
    await Favorite.deleteMany({});
  });

  it('POST /api/favorites/ 즐겨찾기에 코스를 추가한다', async () => {
    const response = await request(app)
      .post('/api/favorites/')
      .send({ userId: user._id, courseId: course._id });

    expect(response.statusCode).toBe(201);
    expect(response.body.user).toEqual(user._id.toString());
    expect(response.body.courses).toContainEqual(expect.any(String));
  });

  it('GET /api/favorites/:userId 사용자의 모든 즐겨찾기를 조회한다', async () => {
    const response = await request(app).get(`/api/favorites/${user._id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('courses');
    expect(response.body.courses.length).toBeGreaterThan(0);
  });

  it('DELETE /api/favorites/:userId/:courseId 즐겨찾기에서 코스를 제거한다', async () => {
    const response = await request(app)
      .delete(`/api/favorites/${user._id}/${course._id}`);

    expect(response.statusCode).toBe(200);
  });
});
