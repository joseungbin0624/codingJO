const request = require('supertest');
const app = require('../../app'); // 실제 app.js 파일 위치에 맞게 조정

describe('Notification Routes', () => {
    it('GET /api/v1/notifications/user/:userId - should return notifications for a user', async () => {
        const userId = 'JaneDoe의UserID'; // JaneDoe의 유효한 userId로 대체
        const response = await request(app).get(`/api/v1/notifications/user/${userId}`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});
