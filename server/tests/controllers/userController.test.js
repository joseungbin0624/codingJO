const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/userService');
const userService = require('../../api/v1/services/userService');

describe('User Controller Tests', () => {
  beforeEach(() => {
    userService.createUser.mockResolvedValue({
      id: 'userId',
      username: 'testuser',
      email: 'test@example.com',
      password: 'password'
    });
    userService.updateUser.mockResolvedValue({
      id: 'userId',
      username: 'updatedUser',
      email: 'updated@example.com'
    });
    userService.deleteUser.mockResolvedValue(true);
  });

  test('Register user', async () => {
    const userData = { username: 'testuser', email: 'test@example.com', password: 'password' };
    const response = await request(app)
      .post('/api/users/register')
      .send(userData);
    expect(response.statusCode).toBe(201);
    expect(userService.createUser).toHaveBeenCalledWith(userData);
  });

  test('Update user', async () => {
    const userId = 'userId';
    const updateData = { username: 'updatedUser', email: 'updated@example.com' };
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
    expect(userService.updateUser).toHaveBeenCalledWith(userId, updateData);
  });

  test('Delete user', async () => {
    const userId = 'userId';
    const response = await request(app)
      .delete(`/api/users/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(userService.deleteUser).toHaveBeenCalledWith(userId);
  });
});
