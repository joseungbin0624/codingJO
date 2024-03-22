const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const feedbackService = require('../../api/v1/services/feedbackService');
const Feedback = require('../../api/v1/models/Feedback');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('피드백 서비스', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Feedback.deleteMany({});
    await User.deleteMany({});
    await Course.deleteMany({});
  });

  it('피드백을 제출해야 한다', async () => {
    const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'password123' });
    // 'category' 필드 추가
    const course = await Course.create({ title: 'New Course', description: 'Course Description', category: 'Programming', instructor: user._id, price: 100 });

    const feedbackData = { userId: user._id, courseId: course._id, content: 'Great course!', rating: 5 };
    const feedback = await feedbackService.submitFeedback(feedbackData);

    expect(feedback.content).toBe(feedbackData.content);
    expect(feedback.userId.toString()).toBe(user._id.toString());
  });

  it('모든 피드백을 검색해야 한다', async () => {
    const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'password123' });
    // 'category' 필드 추가
    const course = await Course.create({ title: 'New Course', description: 'Course Description', category: 'Programming', instructor: user._id, price: 100 });

    await feedbackService.submitFeedback({ userId: user._id, courseId: course._id, content: 'Great course!', rating: 5 });

    const feedbacks = await feedbackService.getAllFeedbacks();
    expect(feedbacks.length).toBeGreaterThan(0);
  });

  it('ID로 피드백을 검색해야 한다', async () => {
    const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'password123' });
    // 'category' 필드 추가
    const course = await Course.create({ title: 'New Course', description: 'Course Description', category: 'Programming', instructor: user._id, price: 100 });

    const createdFeedback = await feedbackService.submitFeedback({ userId: user._id, courseId: course._id, content: 'Great course!', rating: 5 });

    const feedback = await feedbackService.getFeedbackById(createdFeedback._id);
    expect(feedback.id).toEqual(createdFeedback.id);
  });
});
