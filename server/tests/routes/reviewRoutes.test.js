const request = require('supertest');
const app = require('../../app');
const Review = require('../../api/v1/models/Review');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Review Routes Integration Tests', () => {
  let user, course;

  beforeEach(async () => {
    user = await User.create({
      username: 'reviewUser',
      email: 'reviewuser@example.com',
      password: 'password',
    });

    course = await Course.create({
      title: 'Test Course for Review',
      description: 'A course for testing reviews',
      category: 'Testing',
      price: 100,
      instructor: user._id,
    });
  });

  afterEach(async () => {
    await Review.deleteMany({});
    await User.deleteMany({});
    await Course.deleteMany({});
  });

  test('POST /api/reviews 새로운 리뷰 생성 및 반환', async () => {
    const reviewData = {
      userId: user._id,
      courseId: course._id,
      rating: 5,
      comment: 'Excellent course!'
    };

    const response = await request(app)
      .post('/api/reviews')
      .send(reviewData)
      .expect(201);

    expect(response.body.userId).toEqual(reviewData.userId.toString());
    expect(response.body.courseId).toEqual(reviewData.courseId.toString());
    expect(response.body.rating).toEqual(reviewData.rating);
    expect(response.body.comment).toEqual(reviewData.comment);
  });

  test('GET /api/reviews/:courseId 특정 코스의 모든 리뷰 조회', async () => {
    const response = await request(app).get(`/api/reviews/${course._id}`).expect(200);
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});
