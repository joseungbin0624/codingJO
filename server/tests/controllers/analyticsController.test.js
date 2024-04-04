const { logEvent, getAllEvents, getEventsByType } = require('../../api/v1/controllers/analyticsController');
const analyticsService = require('../../api/v1/services/analyticsService');

jest.mock('../../api/v1/services/analyticsService');

describe('Analytics Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('logEvent는 이벤트를 기록한다', async () => {
    const mockEvent = { type: 'click', description: 'Button Click' };
    req.body = mockEvent;
    analyticsService.logEvent.mockResolvedValue(mockEvent);

    await logEvent(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockEvent);
  });

  test('getAllEvents는 모든 이벤트를 반환한다', async () => {
    const mockEvents = [{ type: 'click', description: 'Button Click' }];
    analyticsService.getAllEvents.mockResolvedValue(mockEvents);

    await getAllEvents(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEvents);
  });

  test('getEventsByType는 유형별 이벤트를 반환한다', async () => {
    const mockEvents = [{ type: 'click', description: 'Button Click' }];
    req.params.type = 'click';
    analyticsService.getEventsByType.mockResolvedValue(mockEvents);

    await getEventsByType(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockEvents);
  });
});
