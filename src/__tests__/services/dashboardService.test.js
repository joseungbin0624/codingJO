import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUserActivities } from '../../services/dashboardService';

describe('Dashboard Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches user activities successfully', async () => {
    const activities = [{ id: 1, type: 'completed_course', details: 'JavaScript Basics' }];
    mock.onGet('/dashboard/activities').reply(200, activities);

    const result = await getUserActivities();
    expect(result).toEqual(activities);
  });

  it('handles error while fetching user activities', async () => {
    mock.onGet('/dashboard/activities').networkError();
    await expect(getUserActivities()).rejects.toThrow('Network Error');
  });
});
