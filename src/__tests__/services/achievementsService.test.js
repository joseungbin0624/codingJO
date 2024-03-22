import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAchievements } from '../../services/achievementsService';

describe('Achievements Service with axios-mock-adapter', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('fetches achievements successfully', async () => {
    const achievements = [{ id: 1, name: 'Test Achievement' }];
    mock.onGet('/achievements').reply(200, achievements);

    const result = await getAchievements();

    expect(result).toEqual(achievements);
  });

  it('handles fetch achievements error', async () => {
    mock.onGet('/achievements').networkError();

    await expect(getAchievements()).rejects.toThrow('Network Error');
  });
});
