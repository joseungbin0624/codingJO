const mongoose = require('mongoose');
const Feedback = require('../../api/v1/models/Feedback');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Feedback 모델', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('유효한 피드백 저장', async () => {
    const user = await User.create({ username: 'testUser2', email: 'test2@example.com', password: 'test' });
    const course = await Course.create({ title: 'React 기초', description: 'React 설명', category: '프로그래밍', instructor: user._id, price: 200 });

    const feedback = new Feedback({ userId: user._id, courseId: course._id, content: '매우 유익함', rating: 5 });
    await feedback.save();

    const foundFeedback = await Feedback.findOne({ userId: user._id });
    expect(foundFeedback.content).toBe('매우 유익함');
    expect(foundFeedback.rating).toBe(5);
  });
});
