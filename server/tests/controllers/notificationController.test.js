const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/notificationService');
const notificationService = require('../../api/v1/services/notificationService');

describe('Notification Controller Tests', () => {
  beforeEach(() => {
    notificationService.createNotification.mockResolvedValue({
      id: 'notificationId',
      userId: 'userId',
      type: 'Info',
      message: 'Notification Message',
      isRead: false
    });
    notificationService.getUserNotifications.mockResolvedValue([{
      id: 'notificationId',
      userId: 'userId',
      type: 'Info',
      message: 'Notification Message',
      isRead: false
    }]);
    notificationService.markNotificationAsRead.mockResolvedValue({
      id: 'notificationId',
      userId: 'userId',
      type: 'Info',
      message: 'Notification Message',
      isRead: true
    });
  });

  test('Send notification', async () => {
    const notificationData = { userId: 'userId', type: 'Info', message: 'Notification Message' };
    const response = await request(app)
      .post('/api/notifications')
      .send(notificationData);
    expect(response.statusCode).toBe(201);
    expect(notificationService.createNotification).toHaveBeenCalledWith(notificationData);
  });

  test('Get user notifications', async () => {
    const userId = 'userId';
    const response = await request(app)
      .get(`/api/notifications/user/${userId}`)
      .set('Authorization', 'Bearer validToken'); // Assuming 'validToken' is a placeholder for an actual token.
    expect(response.statusCode).toBe(200);
    expect(notificationService.getUserNotifications).toHaveBeenCalledWith(userId);
  });

  test('Mark notification as read', async () => {
    const notificationId = 'notificationId';
    const response = await request(app)
      .put(`/api/notifications/${notificationId}/read`)
      .set('Authorization', 'Bearer validToken'); // Assuming 'validToken' is a placeholder for an actual token.
    expect(response.statusCode).toBe(200);
    expect(notificationService.markNotificationAsRead).toHaveBeenCalledWith(notificationId);
  });
});
