// E:\project\codingJO\server\tests\middlewares\authMiddleware.test.js
const httpMocks = require('node-mocks-http');
const authMiddleware = require('../../api/v1/middlewares/authMiddleware');
const jwt = require('jsonwebtoken');
const User = require('../../api/v1/models/User');

jest.mock('jsonwebtoken');
jest.mock('../../api/v1/models/User');

describe('authMiddleware', () => {
  it('should validate JWT token and add user to req object', async () => {
    const user = { id: 'userId', username: 'testUser', email: 'test@example.com' };
    const req = httpMocks.createRequest({
      headers: {
        Authorization: 'Bearer fakeToken',
      },
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    jwt.verify.mockReturnValue({ id: user.id });
    User.findById.mockResolvedValue(user);

    await authMiddleware(req, res, next);

    expect(req.user).toBeDefined();
    expect(req.user.id).toBe(user.id);
    expect(next).toHaveBeenCalled();
  });

  // Add more tests to handle no token, invalid token, user not found etc.
});
