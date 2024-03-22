const mongoose = require('mongoose');
const Review = require('../../api/v1/models/Review');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Review 모델', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('리뷰 생성 및 저장', async () => {
    const user = await User.create({ username: 'reviewUser', email: 'review@example.com', password: 'password' });
    const course = await Course.create({ title: 'React 기초', description: 'React에 대한 기본적인 내용을 다룹니다.', category: '프로그래밍', instructor: user._id, price: 100 });

    const review = new Review({
      userId: user._id,
      targetId: course._id,
      content: '매우 유익한 코스였습니다.',
      rating: 5
    });

    const savedReview = await review.save();
    expect(savedReview.content).toBe('매우 유익한 코스였습니다.');
    expect(savedReview.rating).toBe(5);
  });
});
