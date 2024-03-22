const request = require('supertest');
const app = require('../../app'); // app.js 경로 조정 필요

describe('Forum Routes', () => {
    it('GET /api/v1/forums - should return all forums', async () => {
        const response = await request(app).get('/api/v1/forums');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    it('POST /api/v1/forums - should create a forum', async () => {
        const forumData = {
            title: 'JavaScript Discussions',
            content: 'Talk about everything JavaScript',
            author: '유효한UserId' // 유효한 userId로 교체
        };
        const response = await request(app)
            .post('/api/v1/forums')
            .send(forumData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
    });
});
