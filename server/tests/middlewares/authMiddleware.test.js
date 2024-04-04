const httpMocks = require('node-mocks-http');
const authMiddleware = require('../../api/v1/middlewares/authMiddleware');
const jwt = require('jsonwebtoken');
jest.mock('jsonwebtoken');

const User = require('../../api/v1/models/User');
jest.mock('../../api/v1/models/User', () => ({
  findById: jest.fn().mockReturnThis(),
  select: jest.fn().mockResolvedValue({ id: 'userId', username: 'testUser', email: 'test@example.com' }),
}));

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

    await authMiddleware(req, res, next);

    expect(req.user).toBeDefined();
    expect(req.user.id).toBe(user.id);
    expect(next).toHaveBeenCalled();
  });
});
