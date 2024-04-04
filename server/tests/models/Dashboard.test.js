const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Dashboard = require('../../api/v1/models/Dashboard');
const User = require('../../api/v1/models/User');

describe('Dashboard Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save dashboard successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });

    const dashboardData = { userId: user._id, widgets: ['widget1', 'widget2'] };
    const dashboard = new Dashboard(dashboardData);
    const savedDashboard = await dashboard.save();

    expect(savedDashboard._id).toBeDefined();
    expect(savedDashboard.widgets.length).toBe(2);
    expect(savedDashboard.userId.toString()).toBe(user._id.toString());
  });
});
