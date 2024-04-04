const mongoose = require('mongoose'); // mongoose를 require

describe('Database Connection', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules(); // 환경 변수 변경을 위해 모듈 캐시 초기화
    process.env = { ...originalEnv }; // 환경 변수를 원본 상태로 초기화
  });

  afterAll(async () => {
    await mongoose.disconnect(); // 모든 테스트가 끝난 후 연결 종료
    if (mongoServer) {
      await mongoServer.stop(); // 인 메모리 DB 인스턴스가 있으면 종료
    }
    process.env = originalEnv; // 환경 변수 원본 상태로 복구
  });

  test('connects to in-memory MongoDB in test environment', async () => {
    process.env.NODE_ENV = 'test';
    const connectDatabase = require('../../config/database'); // 테스트 환경에서의 경로에 맞게 조정

    await connectDatabase();
    expect(mongoose.connection.readyState).toBe(1); // 1은 연결된 상태를 의미
    expect(mongoose.connection.client.s.url).toContain('mongodb://'); // MongoDB 인 메모리 URI 형식 확인
  });

  test('connects to actual MongoDB in non-test environment', async () => {
    delete process.env.NODE_ENV; // NODE_ENV 제거하여 테스트 환경이 아닌 것으로 설정
    process.env.MONGODB_URI = 'mongodb://localhost:27017/testDatabase'; // 테스트를 위한 URI 설정
    const connectDatabase = require('../../config/database'); // 테스트 환경에서의 경로에 맞게 조정

    await connectDatabase();
    expect(mongoose.connection.readyState).toBe(1); // 1은 연결된 상태를 의미
    expect(mongoose.connection.client.s.url).toBe(process.env.MONGODB_URI); // 설정된 URI와 실제 연결된 URI가 일치하는지 확인
  });
});
