const httpMocks = require('node-mocks-http'); // httpMocks 정의 추가
const errorHandler = require('../../api/v1/middlewares/errorHandler');

describe('Error Handler Middleware', () => {
  it('should return the correct status code and error message', () => {
    const err = new Error('Test error');
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.statusCode).toBe(500);
    const responseData = JSON.parse(res._getData());
    expect(responseData).toHaveProperty('message', 'Test error');
    // 개발 환경에서 스택 트레이스 포함 여부를 검증하는 추가 검사를 여기에 추가할 수 있습니다.
  });

  // 추가적인 테스트 케이스를 이곳에 작성
});
