import { getUserFavorites } from '../services/favoritesService';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const mock = new AxiosMockAdapter(axios);

describe('Favorites Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches user favorites successfully', async () => {
    const responseData = [{ id: 1, name: 'Favorite 1' }];
    mock.onGet('/favorites/3').reply(200, responseData);
    const data = await getUserFavorites(3);
    expect(data).toEqual(responseData);
  });

  it('handles error while fetching user favorites', async () => {
    mock.onGet('/favorites/3').networkError();
    await expect(getUserFavorites(3)).rejects.toThrowError(new Error('Network Error'));
  });
});
