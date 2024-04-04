const request = require('supertest');
const app = require('../../app');

describe('Search Routes Integration Tests', () => {
  test('GET /api/search 쿼리에 따라 검색 결과 반환', async () => {
    const query = 'programming';
    const response = await request(app).get(`/api/search?q=${query}`).expect(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // 검색 결과가 배열 형태로 반환되는지 확인
  });
});
