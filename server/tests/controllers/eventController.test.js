const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/eventService');
const eventService = require('../../api/v1/services/eventService');

describe('Event Controller Tests', () => {
  beforeEach(() => {
    eventService.createEvent.mockResolvedValue({
      id: 'eventId',
      name: 'Event Name',
      organizer: 'Organizer Name',
      location: 'Event Location',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Event Description',
      attendees: []
    });
    eventService.getAllEvents.mockResolvedValue([{
      id: 'eventId',
      name: 'Event Name',
      organizer: 'Organizer Name',
      location: 'Event Location',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Event Description',
      attendees: []
    }]);
    eventService.getEventById.mockResolvedValue({
      id: 'eventId',
      name: 'Event Name',
      organizer: 'Organizer Name',
      location: 'Event Location',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Event Description',
      attendees: []
    });
  });

  test('Create an event', async () => {
    const eventData = {
      name: 'Event Name',
      organizer: 'Organizer Name',
      location: 'Event Location',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Event Description'
    };
    const response = await request(app)
      .post('/api/events')
      .send(eventData);
    expect(response.statusCode).toBe(201);
    expect(eventService.createEvent).toHaveBeenCalledWith(eventData);
  });
});
