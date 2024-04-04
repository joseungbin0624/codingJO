const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Analytics Routes Integration Tests', () => {
    beforeEach(async () => {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }
    });

    test('POST /api/analytics/event logs an event', async () => {
        const eventData = { event: 'click', value: 'Button Click', timestamp: new Date() }; // timestamp 필드 추가
        const response = await request(app)
            .post('/api/analytics/event')
            .send(eventData);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({event: eventData.event, value: eventData.value}); // timestamp는 검증에서 제외
    });

    test('GET /api/analytics/events retrieves all events', async () => {
        await request(app).post('/api/analytics/event').send({ event: 'click', value: 'Button Click', timestamp: new Date() });
        await request(app).post('/api/analytics/event').send({ event: 'view', value: 'Page View', timestamp: new Date() });

        const response = await request(app).get('/api/analytics/events');

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(2);
    });

  test('POST /api/analytics/event with invalid data returns error', async () => {
    const invalidEventData = {}; // 필수 필드를 누락
    const response = await request(app)
      .post('/api/analytics/event')
      .send(invalidEventData);

    expect(response.status).toBe(400); // 클라이언트 에러 응답 예상
  });

  test('GET /api/analytics/events/:eventType with non-existing type returns empty array', async () => {
    const nonExistingType = 'non-existing-type';
    const response = await request(app).get(`/api/analytics/events/${nonExistingType}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]); // 존재하지 않는 이벤트 타입에 대해 빈 배열 반환
  });
});
