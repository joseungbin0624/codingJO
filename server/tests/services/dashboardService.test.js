const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Dashboard = require('../../api/v1/models/Dashboard');
const dashboardService = require('../../api/v1/services/dashboardService');
const User = require('../../api/v1/models/User');

describe('Dashboard Service Tests', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Dashboard.deleteMany({});
        await User.deleteMany({});
    });

    it('getDashboardByUserId should retrieve a user dashboard', async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'password' });
        const dashboard = await new Dashboard({ userId: user._id, widgets: ['widget1', 'widget2'] }).save();
        const foundDashboard = await dashboardService.getDashboardByUserId(user._id);

        expect(foundDashboard.widgets.length).toBe(2);
        expect(foundDashboard.userId.toString()).toBe(user._id.toString());
    });

    it('addWidgetToDashboard should add a widget to a user dashboard', async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'password' });
        await new Dashboard({ userId: user._id, widgets: [] }).save();
        await dashboardService.addWidgetToDashboard(user._id, 'newWidget');
        const updatedDashboard = await Dashboard.findOne({ userId: user._id });

        expect(updatedDashboard.widgets.includes('newWidget')).toBe(true);
    });

    it('removeWidgetFromDashboard should remove a widget from the dashboard', async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com', password: 'password' });
        await new Dashboard({ userId: user._id, widgets: ['widget1', 'newWidget'] }).save();
        await dashboardService.removeWidgetFromDashboard(user._id, 'newWidget');
        const updatedDashboard = await Dashboard.findOne({ userId: user._id });

        expect(updatedDashboard.widgets.includes('newWidget')).toBe(false);
    });
});
