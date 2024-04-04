const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Analytics = require('../../api/v1/models/Analytics');

describe('Analytics Model Test', () => {
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

  it('create & save analytics data successfully', async () => {
    const analyticsData = { event: 'page_view', value: { page: 'homepage' } };
    const analytics = new Analytics(analyticsData);
    const savedAnalytics = await analytics.save();

    expect(savedAnalytics._id).toBeDefined();
    expect(savedAnalytics.event).toBe(analyticsData.event);
    expect(savedAnalytics.value.page).toBe(analyticsData.value.page);
  });
});
