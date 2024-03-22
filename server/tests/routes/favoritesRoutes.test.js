const request = require('supertest');
const app = require('../../app'); // 애플리케이션의 실제 express 인스턴스 경로에 맞게 조정해야 합니다.
const { setupDatabase, userOneId, courseOneId } = require('../fixtures/db');

beforeEach(setupDatabase);

describe('Favorites Routes', () => {
  test('POST /api/favorites', async () => {
    const response = await request(app)
      .post('/api/favorites')
      .send({
        userId: userOneId,
        courseId: courseOneId
      })
      .expect(201);

    // 추가적인 검증 로직을 구현할 수 있습니다.
    expect(response.body).not.toBeNull();
    expect(response.body.courses).toContainEqual(courseOneId);
  });

  test('DELETE /api/favorites/:userId/:courseId', async () => {
    await request(app)
      .delete(`/api/favorites/${userOneId}/${courseOneId}`)
      .expect(200);

    // 삭제 후 확인 로직 구현
  });

  test('GET /api/favorites/:userId', async () => {
    const response = await request(app)
      .get(`/api/favorites/${userOneId}`)
      .expect(200);

    // 조회 결과 검증 로직 구현
    expect(response.body.user).toEqual(userOneId);
  });
});
