const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const authService = require('../../api/v1/services/authService');
const { register, login, getUserFromToken } = require('../../api/v1/controllers/authenticationController');

// authService 모킹
jest.mock('../../api/v1/services/authService');

const app = express();
app.use(bodyParser.json());
app.post('/register', register);
app.post('/login', login);
app.get('/user-from-token', getUserFromToken);

describe('Authentication Controller Tests', () => {
  beforeEach(() => {
    // 모든 테스트 전에 authService의 모든 모의 함수를 클리어
    jest.clearAllMocks();
  });

  test('register should respond with 201 status code', async () => {
    const mockUser = { id: '1', username: 'testUser', email: 'test@example.com' };
    const mockToken = 'fakeToken';
    authService.registerUser.mockResolvedValue({ user: mockUser, token: mockToken });

    const response = await request(app)
      .post('/register')
      .send({ username: 'testUser', email: 'test@example.com', password: 'password' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ user: mockUser, token: mockToken });
    expect(authService.registerUser).toHaveBeenCalledWith({ username: 'testUser', email: 'test@example.com', password: 'password' });
  });

  // login 테스트
  test('login should respond with 200 status code', async () => {
    const mockUser = { id: '1', username: 'testUser', email: 'test@example.com' };
    const mockToken = 'fakeToken';
    authService.loginUser.mockResolvedValue({ user: mockUser, token: mockToken });

    const response = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ user: mockUser, token: mockToken });
    expect(authService.loginUser).toHaveBeenCalledWith('test@example.com', 'password');
  });

  // getUserFromToken 테스트
  test('getUserFromToken should respond with 200 status code', async () => {
    const mockUser = { id: '1', username: 'testUser', email: 'test@example.com' };
    authService.getUserFromToken.mockResolvedValue(mockUser);

    const response = await request(app)
      .get('/user-from-token')
      .set('Authorization', 'Bearer fakeToken');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUser);
    expect(authService.getUserFromToken).toHaveBeenCalledWith('fakeToken');
  });
});
