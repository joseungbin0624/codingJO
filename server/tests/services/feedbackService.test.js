const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Feedback = require('../../api/v1/models/Feedback');
const feedbackService = require('../../api/v1/services/feedbackService');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Feedback Service Tests', () => {
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
        await Feedback.deleteMany({});
        await User.deleteMany({});
        await Course.deleteMany({});
    });

    it('submitFeedback should create new feedback', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const instructor = await User.create({ username: 'instructor', email: 'instructor@example.com', password: 'password' });
        const course = await Course.create({ title: 'Course Title', description: 'Description', category: 'Programming', instructor: instructor._id, price: 100 });
        const feedbackData = { userId: user._id, courseId: course._id, content: 'Great course!', rating: 5 };

        const feedback = await feedbackService.submitFeedback(feedbackData);
        expect(feedback.content).toBe(feedbackData.content);
        expect(feedback.rating).toBe(feedbackData.rating);
    });

    it('getAllFeedbacks should retrieve all feedbacks', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const instructor = await User.create({ username: 'instructor', email: 'instructor@example.com', password: 'password' });
        const course = await Course.create({ title: 'Another Course Title', description: 'Another Description', category: 'Math', instructor: instructor._id, price: 200 });
        
        await feedbackService.submitFeedback({ userId: user._id, courseId: course._id, content: 'Informative course', rating: 4 });
        await feedbackService.submitFeedback({ userId: user._id, courseId: course._id, content: 'Excellent explanations', rating: 5 });

        const feedbacks = await feedbackService.getAllFeedbacks();
        expect(feedbacks.length).toBe(2);
        expect(feedbacks[0].content).toBe('Informative course');
        expect(feedbacks[1].content).toBe('Excellent explanations');
    });

    it('getFeedbackById should retrieve a feedback by ID', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const instructor = await User.create({ username: 'instructor', email: 'instructor@example.com', password: 'password' });
        const course = await Course.create({ title: 'Course Title', description: 'Description', category: 'Science', instructor: instructor._id, price: 300 });
        const feedback = await feedbackService.submitFeedback({ userId: user._id, courseId: course._id, content: 'Very detailed course', rating: 4 });

        const foundFeedback = await feedbackService.getFeedbackById(feedback._id);
        expect(foundFeedback._id.toString()).toBe(feedback._id.toString());
        expect(foundFeedback.content).toBe('Very detailed course');
    });
});
