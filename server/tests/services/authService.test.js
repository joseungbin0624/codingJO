const request = require('supertest');
const app = require('../../app'); // 실제 앱 경로로 수정하세요
const User = require('../../api/v1/models/User');
const authService = require('../../api/v1/services/authService');

describe('Authentication Service Tests', () => {

    beforeEach(async () => {
        await User.deleteMany({});
    });

    it('registerUser should create a new user successfully', async () => {
        const userData = { username: 'testUser', email: 'test@example.com', password: 'password123' };
        const { user, token } = await authService.registerUser(userData);

        expect(user).toHaveProperty('_id');
        expect(user.email).toBe(userData.email);
        expect(token).toBeDefined();
    });

    it('loginUser should authenticate user successfully', async () => {
        const userData = { username: 'loginUser', email: 'login@example.com', password: 'password' };
        await authService.registerUser(userData);

        const { user, token } = await authService.loginUser(userData.email, userData.password);

        expect(user.email).toBe(userData.email);
        expect(token).toBeDefined();
    });

    it('getUserFromToken should retrieve a user from a token', async () => {
        const userData = { username: 'tokenUser', email: 'token@example.com', password: 'password' };
        const { user, token } = await authService.registerUser(userData);

        const retrievedUser = await authService.getUserFromToken(token);

        expect(retrievedUser._id.toString()).toBe(user._id.toString());
        expect(retrievedUser.email).toBe(userData.email);
    });
});
