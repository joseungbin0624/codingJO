const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const reviewService = require('../../api/v1/services/reviewService');
const Review = require('../../api/v1/models/Review');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Review Service', () => {
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
        await Review.deleteMany({});
        await User.deleteMany({});
        await Course.deleteMany({});
    });

    it('should create and retrieve course reviews', async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'Password123!' });
        const course = await Course.create({ title: 'New Course', category: 'Programming', description: 'Course Description', instructor: user._id, price: 100 });

        const reviewData = { userId: user._id, targetId: course._id, content: 'Great course!', rating: 5 };
        await reviewService.createReview(reviewData);

        const reviews = await reviewService.getCourseReviews(course._id);
        expect(reviews.length).toBeGreaterThan(0);
        expect(reviews[0].content).toBe(reviewData.content);
    });
});
