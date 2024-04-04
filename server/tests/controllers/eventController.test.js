const { createEvent, getAllEvents, getEventById } = require('../../api/v1/controllers/eventController');
const eventService = require('../../api/v1/services/eventService');

jest.mock('../../api/v1/services/eventService');

describe('Event Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('createEvent는 새로운 이벤트를 생성한다', async () => {
    const mockEvent = { name: 'New Event', location: 'Event Location' };
    req.body = mockEvent;
    eventService.createEvent.mockResolvedValue(mockEvent);

    await createEvent(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockEvent);
  });

  test('getAllEvents는 모든 이벤트를 반환한다', async () => {
    const mockEvents = [{ name: 'Event1', location: 'Location1' }];
    eventService.getAllEvents.mockResolvedValue(mockEvents);

    await getAllEvents(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEvents);
  });

  test('getEventById는 ID로 이벤트를 검색한다', async () => {
    const mockEvent = { id: '1', name: 'Event1', location: 'Location1' };
    req.params.id = '1';
    eventService.getEventById.mockResolvedValue(mockEvent);

    await getEventById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEvent);
  });
});
