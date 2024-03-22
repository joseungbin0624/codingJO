const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const userService = require('../../api/v1/services/userService');
const User = require('../../api/v1/models/User');

describe('사용자 서비스', () => {
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
        await User.deleteMany({});
    });

    it('사용자를 생성해야 한다', async () => {
        const userData = { username: 'testUser', email: 'test@example.com', password: 'Password123!' };
        const user = await userService.createUser(userData);

        expect(user.username).toBe(userData.username);
        expect(user.email).toBe(userData.email);
    });

    it('사용자를 업데이트해야 한다', async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'Password123!' });
        const updatedUserData = { username: 'updatedUser' };

        const updatedUser = await userService.updateUser(user._id, updatedUserData);
        expect(updatedUser.username).toBe(updatedUserData.username);
    });

    it('사용자를 삭제해야 한다', async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'Password123!' });

        await userService.deleteUser(user._id);
        const foundUser = await User.findById(user._id);
        expect(foundUser).toBeNull();
    });
});
