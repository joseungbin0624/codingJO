const request = require('supertest');
const app = require('../../app'); // Make sure this path is correct for your app
const User = require('../../api/v1/models/User');
const authService = require('../../api/v1/services/authService');

describe('Authentication Routes Integration Tests', () => {
    // 각 테스트 사이에 데이터베이스를 초기화합니다.
    beforeEach(async () => {
        await User.deleteMany({});
    });

    it('registerUser should create a new user successfully', async () => {
        const userData = { username: 'testUser', email: 'test@example.com', password: 'password123' };
        const response = await request(app)
            .post('/api/auth/register')
            .send(userData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
        expect(response.body.user.email).toBe(userData.email);
    });

    it('loginUser should authenticate user successfully', async () => {
        const userData = { username: 'loginUser', email: 'login@example.com', password: 'password' };
        await authService.registerUser(userData);

        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: userData.email, password: userData.password });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
        expect(response.body.user.email).toBe(userData.email);
    });

    it('getUserFromToken should retrieve a user from a token', async () => {
        const userData = { username: 'tokenUser', email: 'token@example.com', password: 'password' };
        const registerResponse = await authService.registerUser(userData);
        const token = registerResponse.token;

        const response = await request(app)
            .get('/api/auth/user-from-token')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.email).toBe(userData.email);
    });
});
