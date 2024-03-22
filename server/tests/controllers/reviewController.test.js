const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/reviewService');
const reviewService = require('../../api/v1/services/reviewService');

describe('Review Controller Tests', () => {
  beforeEach(() => {
    reviewService.createReview.mockResolvedValue({
      id: 'reviewId',
      userId: 'userId',
      targetId: 'targetId',
      content: 'Great course!',
      rating: 5
    });
    reviewService.getCourseReviews.mockResolvedValue([{
      id: 'reviewId',
      userId: 'userId',
      targetId: 'targetId',
      content: 'Great course!',
      rating: 5
    }]);
  });

  test('Create review', async () => {
    const reviewData = {
      userId: 'userId',
      targetId: 'targetId',
      content: 'Great course!',
      rating: 5
    };
    const response = await request(app)
      .post('/api/reviews')
      .send(reviewData);
    expect(response.statusCode).toBe(201);
    expect(reviewService.createReview).toHaveBeenCalledWith(reviewData);
  });

  test('Get course reviews', async () => {
    const courseId = 'courseId';
    const response = await request(app)
      .get(`/api/reviews/course/${courseId}`);
    expect(response.statusCode).toBe(200);
    expect(reviewService.getCourseReviews).toHaveBeenCalledWith(courseId);
  });
});
