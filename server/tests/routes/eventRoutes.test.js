const request = require('supertest');
const app = require('../../app');
const Event = require('../../api/v1/models/Event');

describe('Event Routes Integration Tests', () => {
  let eventId;

  beforeEach(async () => {
    const event = await Event.create({
      name: 'Initial Event',
      organizer: 'Test Organizer',
      location: 'Test Location',
      startDate: new Date(),
      endDate: new Date(),
      description: 'This is a test event'
    });
    eventId = event._id;
  });

  afterEach(async () => {
    await Event.deleteMany({});
  });

  it('POST /api/events 새로운 이벤트를 생성한다', async () => {
    const newEvent = {
      name: 'New Year Party',
      organizer: 'Community Hall',
      location: 'Community Hall, New City',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Annual New Year Celebration'
    };

    const response = await request(app)
      .post('/api/events')
      .send(newEvent);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toEqual(newEvent.name);
    expect(response.body.description).toEqual(newEvent.description);
  });

  it('GET /api/events 모든 이벤트를 조회한다', async () => {
    const response = await request(app).get('/api/events');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });

  it('GET /api/events/:id ID로 특정 이벤트를 조회한다', async () => {
    const response = await request(app).get(`/api/events/${eventId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body._id).toEqual(eventId.toString());
  });

  it('PUT /api/events/:id 이벤트 정보를 업데이트한다', async () => {
    const updatedEvent = {
      name: 'Updated Event Name',
      description: 'Updated event description.'
    };

    const response = await request(app)
      .put(`/api/events/${eventId}`)
      .send(updatedEvent);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toEqual(updatedEvent.name);
    expect(response.body.description).toEqual(updatedEvent.description);
  });

  it('DELETE /api/events/:id 이벤트를 삭제한다', async () => {
    const response = await request(app).delete(`/api/events/${eventId}`);

    expect(response.statusCode).toBe(204);

    // 삭제된 이벤트가 정말로 없는지 확인
    const fetchDeleted = await request(app).get(`/api/events/${eventId}`);
    expect(fetchDeleted.statusCode).toBe(404);
  });
});
