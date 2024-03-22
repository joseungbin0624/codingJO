const request = require('supertest');
const app = require('../../app'); // 실제 app.js의 경로에 맞게 수정

describe('User Routes', () => {
    // User 생성 테스트는 기본적으로 유효한 데이터로 진행되므로 변경 필요 없음

    it('PUT /api/v1/users/:userId - should update a user', async () => {
        const userId = 'JaneDoe의UserID'; // JaneDoe의 유효한 userId로 대체
        const updateData = {
            username: 'updatedJaneDoe'
        };
        const response = await request(app)
            .put(`/api/v1/users/${userId}`)
            .send(updateData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('username', updateData.username);
    });

    // User 삭제 테스트는 특정 유저 ID에 대한 삭제를 검증하므로, 실제 실행 시 유효한 userId 사용이 필요
});

