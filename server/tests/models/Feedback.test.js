const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Feedback = require('../../api/v1/models/Feedback');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Feedback Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save feedback successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });
    const course = await Course.create({ title: 'Course Title', description: 'Description', category: 'Category', instructor: user._id, price: 100 });

    const feedbackData = { userId: user._id, courseId: course._id, content: 'Great course', rating: 5 };
    const feedback = new Feedback(feedbackData);
    const savedFeedback = await feedback.save();

    expect(savedFeedback._id).toBeDefined();
    expect(savedFeedback.content).toBe('Great course');
    expect(savedFeedback.rating).toBe(5);
  });
});
