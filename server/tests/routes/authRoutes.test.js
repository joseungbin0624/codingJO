// E:\project\codingJO\server\tests\routes\authRoutes.test.js 수정본
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const User = require('../../api/v1/models/User');

// Jest가 다른 테스트와 동시에 DB에 접근하는 것을 방지하기 위해 별도의 테스트 DB 사용을 고려해야 할 수도 있음
// 예: MONGODB_URI_TEST=mongodb://mongodb:27017/codingjo_test

describe('Authentication Routes Integration Tests', () => {
  beforeAll(async () => {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  }, 10000);

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const userData = {
        username: 'testUser',
        email: 'test@example.com',
        password: 'password123',
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(response.status).toBe(201);
      expect(response.body.user).toHaveProperty('username', userData.username);
      expect(response.body).toHaveProperty('token');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login a user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(userData);

      expect(response.status).toBe(200);
      expect(response.body.user).toHaveProperty('email', userData.email);
      expect(response.body).toHaveProperty('token');
    });
  });

  describe('GET /api/auth/user-from-token', () => {
    it('should get user from token', async () => {
      // First, login to get the token
      const loginData = {
        email: 'test@example.com',
        password: 'password123',
      };

      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send(loginData);
      const token = loginResponse.body.token;

      // Now, use the token to access protected route
      const response = await request(app)
        .get('/api/auth/user-from-token')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('email', loginData.email);
    });
  });
});
