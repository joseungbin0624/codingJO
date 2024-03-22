const request = require('supertest');
const app = require('../../app'); // 실제 경로에 맞게 조정하세요.

describe('Event Routes', () => {
    it('POST / should create a new event', async () => {
        const eventData = {
            name: "New Event",
            location: "Some Location",
            startDate: "2023-01-01",
            endDate: "2023-01-02"
            // 기타 필요한 필드 추가
        };
        const res = await request(app)
            .post('/api/events')
            .send(eventData);
        expect(res.statusCode).toEqual(201);
    });

    it('GET / should retrieve all events', async () => {
        const res = await request(app)
            .get('/api/events');
        expect(res.statusCode).toEqual(200);
    });

    it('GET /:id should retrieve an event by ID', async () => {
        const res = await request(app)
            .get('/api/events/:id'); // 적절한 eventId 제공
        expect(res.statusCode).toEqual(200);
    });

    it('PUT /:id should update an event', async () => {
        const res = await request(app)
            .put('/api/events/:id') // 적절한 eventId 제공
            .send({location: "Updated Location"}); // 업데이트할 필드와 값 제공
        expect(res.statusCode).toEqual(200);
    });

    it('DELETE /:id should delete an event', async () => {
        const res = await request(app)
            .delete('/api/events/:id'); // 적절한 eventId 제공
        expect(res.statusCode).toEqual(200);
    });
});
