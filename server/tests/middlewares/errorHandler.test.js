// Import dependencies
const errorHandler = require('../../middlewares/errorHandler'); // Update path as needed
const httpMocks = require('node-mocks-http');

describe('Error Handler Middleware', () => {
  it('should return the correct status code and error message', () => {
    const err = new Error('Test error');
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.statusCode).toBe(500);
    expect(res._getData()).toHaveProperty('message', 'Test error');
    // Add assertion for stack in development mode if applicable
  });

  // Add more tests for different scenarios...
});
