const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Favorite = require('../../api/v1/models/Favorite');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Favorite Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save favorite successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });
    const course = await Course.create({ title: 'Course Title', description: 'Description', category: 'Category', instructor: user._id, price: 100 });

    const favoriteData = { user: user._id, courses: [course._id] };
    const favorite = new Favorite(favoriteData);
    const savedFavorite = await favorite.save();

    expect(savedFavorite._id).toBeDefined();
    expect(savedFavorite.courses.length).toBe(1);
    expect(savedFavorite.user.toString()).toBe(user._id.toString());
  });
});
