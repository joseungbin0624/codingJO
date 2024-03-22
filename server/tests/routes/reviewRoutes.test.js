const request = require('supertest');
const app = require('../../app'); // 실제 app.js 파일 위치에 맞게 조정

describe('Review Routes', () => {
    it('POST /api/v1/reviews - should submit a review', async () => {
        const reviewData = {
            userId: 'JohnDoe의UserID', // JohnDoe의 유효한 userId로 대체
            targetId: 'LearnJavaScript코스ID', // 'Learn JavaScript' 코스의 유효한 ID로 대체
            content: 'Great course!',
            rating: 5
        };
        const response = await request(app)
            .post('/api/v1/reviews')
            .send(reviewData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
    });
});
