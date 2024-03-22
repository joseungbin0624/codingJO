const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/feedbackService');
const feedbackService = require('../../api/v1/services/feedbackService');

describe('Feedback Controller Tests', () => {
  beforeEach(() => {
    feedbackService.submitFeedback.mockResolvedValue({
      id: 'feedbackId',
      userId: 'userId',
      courseId: 'courseId',
      content: 'Great course!',
      rating: 5
    });
    feedbackService.getAllFeedbacks.mockResolvedValue([{
      id: 'feedbackId',
      userId: 'userId',
      courseId: 'courseId',
      content: 'Great course!',
      rating: 5
    }]);
    feedbackService.getFeedbackById.mockResolvedValue({
      id: 'feedbackId',
      userId: 'userId',
      courseId: 'courseId',
      content: 'Great course!',
      rating: 5
    });
  });

  test('Submit feedback', async () => {
    const feedbackData = {
      userId: 'userId',
      courseId: 'courseId',
      content: 'Great course!',
      rating: 5
    };
    const response = await request(app)
      .post('/api/feedback')
      .send(feedbackData);
    expect(response.statusCode).toBe(201);
    expect(feedbackService.submitFeedback).toHaveBeenCalledWith(feedbackData);
  });

  test('Get all feedbacks', async () => {
    const response = await request(app)
      .get('/api/feedback');
    expect(response.statusCode).toBe(200);
    expect(feedbackService.getAllFeedbacks).toHaveBeenCalled();
  });

  test('Get feedback by ID', async () => {
    const feedbackId = 'feedbackId';
    const response = await request(app)
      .get(`/api/feedback/${feedbackId}`);
    expect(response.statusCode).toBe(200);
    expect(feedbackService.getFeedbackById).toHaveBeenCalledWith(feedbackId);
  });
});
