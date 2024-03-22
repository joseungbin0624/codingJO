const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const notificationService = require('../../api/v1/services/notificationService');
const Notification = require('../../api/v1/models/Notification');
const User = require('../../api/v1/models/User');

describe('Notification Service', () => {
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
        await Notification.deleteMany({});
        await User.deleteMany({});
    });

    it('should create a notification and retrieve user notifications', async () => {
        const user = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password123' });
        await notificationService.createNotification({ userId: user._id, type: 'Test Type', message: 'New notification' });

        const notifications = await notificationService.getUserNotifications(user._id);
        expect(notifications.length).toBeGreaterThan(0);
    });

    it('should mark a notification as read', async () => {
        const user = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password123' });
        const notification = await notificationService.createNotification({ userId: user._id, type: 'Test Type', message: 'New notification' });

        await notificationService.markNotificationAsRead(notification._id);
        const updatedNotification = await Notification.findById(notification._id);
        expect(updatedNotification.isRead).toBe(true);
    });
});
