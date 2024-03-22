const httpMocks = require('node-mocks-http');
const { validationResult } = require('express-validator');
const validateRequest = require('../../api/v1/middlewares/validateRequest');

describe('validateRequest Middleware', () => {
  test('유효성 검사에 에러가 없으면 next()를 호출해야 합니다.', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();
    validationResult(req).isEmpty = jest.fn().mockReturnValue(true);

    validateRequest(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  test('유효성 검사에 에러가 있으면 400 상태와 에러들을 반환해야 합니다.', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();
    validationResult(req).isEmpty = jest.fn().mockReturnValue(false);
    validationResult(req).array = jest.fn().mockReturnValue([{ msg: 'Error' }]);

    validateRequest(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toHaveProperty('errors');
  });
});
