import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAnalyticsData } from '../../services/analyticsService';

describe('Analytics Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches analytics data successfully', async () => {
    const analyticsData = { visits: 100, likes: 200 };
    mock.onGet('/analytics').reply(200, analyticsData);

    const data = await getAnalyticsData();
    expect(data).toEqual(analyticsData);
  });

  it('handles fetch analytics data error', async () => {
    mock.onGet('/analytics').networkError();
    await expect(getAnalyticsData()).rejects.toThrow('Network Error');
  });
});
