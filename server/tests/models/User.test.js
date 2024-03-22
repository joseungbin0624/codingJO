const mongoose = require('mongoose');
const User = require('../../api/v1/models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');
const bcrypt = require('bcrypt');

describe('User Model', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  it('create & save user successfully', async () => {
    const userData = { username: 'testUser', email: 'test@example.com', password: 'password123' };
    const validUser = new User(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.email).toBe(userData.email);
    // 비밀번호 검증: 해싱된 비밀번호와 원본이 다름을 확인
    const isMatch = await bcrypt.compare(userData.password, savedUser.password);
    expect(isMatch).toBe(true); // 이제는 `true`가 되어야 합니다.
  });
});
