import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { performSearch } from '../../services/searchService';

describe('Search Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('performs a search successfully', async () => {
    const query = 'JavaScript';
    const searchResults = [{ id: 1, title: 'JavaScript Basics' }];
    mock.onGet(`/search?q=${encodeURIComponent(query)}`).reply(200, searchResults);

    const result = await performSearch(query);
    expect(result).toEqual(searchResults);
  });

  it('handles error while performing a search', async () => {
    const query = 'JavaScript';
    mock.onGet(`/search?q=${encodeURIComponent(query)}`).networkError();
    await expect(performSearch(query)).rejects.toThrow('Network Error');
  });
});
