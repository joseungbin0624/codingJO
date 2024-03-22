// E:\project\codingJO\server\tests\controllers\authenticationController.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../../app'); // 앱의 실제 경로를 확인하세요.
jest.mock('../../api/v1/services/authService');
const authService = require('../../api/v1/services/authService');

describe('Authentication Controller Tests', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = await mongoServer.getUri();
    console.log("MongoDB Memory Server URI:", uri); // URI 로그 출력
    await mongoose.connect(uri); 
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });


    beforeEach(async () => {
        await User.deleteMany({});
    });

    it('registerUser should create a new user successfully', async () => {
        const userData = { username: 'testUser', email: 'test@example.com', password: 'password' };
        const { user, token } = await authService.registerUser(userData);
        expect(user.email).toBe(userData.email);
        expect(token).toBeTruthy();
    });

    it('loginUser should authenticate user successfully', async () => {
        const userData = { username: 'testUser', email: 'test@example.com', password: 'password' };
        await authService.registerUser(userData);
        const { user, token } = await authService.loginUser(userData.email, userData.password);
        expect(user.email).toBe(userData.email);
        expect(token).toBeTruthy();
    });

    it('getUserFromToken should retrieve a user from a token', async () => {
        const userData = { username: 'testUser', email: 'test@example.com', password: 'password' };
        const { user: registeredUser, token } = await authService.registerUser(userData);
        const user = await authService.getUserFromToken(token);
        expect(user._id.toString()).toBe(registeredUser._id.toString());
    });
});
