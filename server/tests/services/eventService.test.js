const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const eventService = require('../../api/v1/services/eventService');
const Event = require('../../api/v1/models/Event');

describe('Event Service', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Event.deleteMany({});
    });

    it('새로운 이벤트를 생성해야 한다', async () => {
        const eventData = { name: 'New Event', description: 'Event Description', organizer: 'Organizer Name', startDate: new Date(), endDate: new Date(), location: 'Event Location' };
        const event = await eventService.createEvent(eventData);
        expect(event.name).toBe(eventData.name);
        expect(event.description).toBe(eventData.description);
        expect(event.location).toBe(eventData.location);
    });

    it('모든 이벤트를 검색해야 한다', async () => {
        await eventService.createEvent({ name: 'Event 1', description: 'Description 1', organizer: 'Organizer 1', startDate: new Date(), endDate: new Date(), location: 'Location 1' });
        await eventService.createEvent({ name: 'Event 2', description: 'Description 2', organizer: 'Organizer 2', startDate: new Date(), endDate: new Date(), location: 'Location 2' });

        const events = await eventService.getAllEvents();
        expect(events.length).toBe(2);
    });

    it('ID로 이벤트를 검색해야 한다', async () => {
        const createdEvent = await eventService.createEvent({ name: 'Event 1', description: 'Description 1', organizer: 'Organizer 1', startDate: new Date(), endDate: new Date(), location: 'Location 1' });

        const event = await eventService.getEventById(createdEvent._id);
        expect(event.name).toBe(createdEvent.name);
    });

    it('이벤트를 업데이트 해야 한다', async () => {
        const createdEvent = await eventService.createEvent({ name: 'Original Event', description: 'Original Description', organizer: 'Original Organizer', startDate: new Date(), endDate: new Date(), location: 'Original Location' });

        const updatedEvent = await eventService.updateEvent(createdEvent._id, { name: 'Updated Event', location: 'Updated Location' });
        expect(updatedEvent.name).toBe('Updated Event');
        expect(updatedEvent.location).toBe('Updated Location');
    });

    it('이벤트를 삭제해야 한다', async () => {
        const createdEvent = await eventService.createEvent({ name: 'Event to be deleted', description: 'Description', organizer: 'Organizer', startDate: new Date(), endDate: new Date(), location: 'Location' });

        await eventService.deleteEvent(createdEvent._id);
        const eventAfterDeletion = await Event.findById(createdEvent._id);
        expect(eventAfterDeletion).toBeNull();
    });
});
