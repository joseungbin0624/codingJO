const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Review = require('../../api/v1/models/Review');
const reviewService = require('../../api/v1/services/reviewService');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Review Service Tests', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Review.deleteMany({});
    await User.deleteMany({});
    await Course.deleteMany({});
  });

  it('createReview should create a new review', async () => {
    const user = await User.create({ username: 'reviewUser', email: 'user@example.com', password: 'password' });
    const course = await Course.create({ title: 'Test Course', description: 'Test Description', category: 'Test Category', price: 100, instructor: user._id });

    const reviewData = { content: 'Great course!', rating: 5, userId: user._id, targetId: course._id };
    const review = await reviewService.createReview(reviewData);

    expect(review).toHaveProperty('_id');
    expect(review.content).toBe(reviewData.content);
    expect(review.rating).toBe(reviewData.rating);
    expect(review.userId.toString()).toBe(user._id.toString());
    expect(review.targetId.toString()).toBe(course._id.toString());
  });

  it('getCourseReviews should retrieve all reviews for a course', async () => {
    const user = await User.create({ username: 'reviewUser2', email: 'user2@example.com', password: 'password2' });
    const course = await Course.create({ title: 'Test Course 2', description: 'Test Description 2', category: 'Test Category 2', price: 200, instructor: user._id });

    await reviewService.createReview({ content: 'Excellent course', rating: 4, userId: user._id, targetId: course._id });
    await reviewService.createReview({ content: 'Very informative', rating: 5, userId: user._id, targetId: course._id });

    const reviews = await reviewService.getCourseReviews(course._id);
    expect(reviews.length).toBe(2);
    expect(reviews[0].content).toBe('Excellent course');
    expect(reviews[1].content).toBe('Very informative');
  });
});
