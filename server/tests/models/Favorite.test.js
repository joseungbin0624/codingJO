const mongoose = require('mongoose');
const Favorite = require('../../api/v1/models/Favorite');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Favorite 모델', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('즐겨찾기에 코스 추가', async () => {
    const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'test' });
    const course = await Course.create({ title: 'Node.js 기초', description: 'Node.js 설명', category: '프로그래밍', instructor: user._id, price: 100 });

    const favorite = new Favorite({ user: user._id, courses: [course._id] });
    await favorite.save();

    const foundFavorite = await Favorite.findOne({ user: user._id }).populate('courses');
    expect(foundFavorite.courses).toHaveLength(1);
    expect(foundFavorite.courses[0]._id).toEqual(course._id);
  });
});
