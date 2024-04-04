// notificationController.test.js
const { sendNotification, getUserNotifications, markNotificationAsRead } = require('../../api/v1/controllers/notificationController');
const notificationService = require('../../api/v1/services/notificationService');

jest.mock('../../api/v1/services/notificationService');

describe('Notification Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('sendNotification은 새로운 알림을 생성한다', async () => {
    const mockNotification = { userId: '1', type: 'Info', message: 'Notification message' };
    req.body = mockNotification;
    notificationService.createNotification.mockResolvedValue(mockNotification);

    await sendNotification(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockNotification);
  });

  test('getUserNotifications는 사용자의 모든 알림을 반환한다', async () => {
    const mockNotifications = [{ userId: '1', type: 'Info', message: 'Notification message' }];
    req.params.userId = '1';
    notificationService.getUserNotifications.mockResolvedValue(mockNotifications);

    await getUserNotifications(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockNotifications);
  });

  test('markNotificationAsRead은 알림을 읽음 상태로 표시한다', async () => {
    const notificationId = '1';
    req.params.notificationId = notificationId;
    notificationService.markNotificationAsRead.mockResolvedValue({});

    await markNotificationAsRead(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(notificationService.markNotificationAsRead).toHaveBeenCalledWith(notificationId);
  });
});
