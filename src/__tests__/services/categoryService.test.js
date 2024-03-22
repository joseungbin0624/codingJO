import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getCategories } from '../../services/categoryService';

describe('Category Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches categories successfully', async () => {
    const categories = [{ id: 1, name: 'Technology' }];
    mock.onGet('/categories').reply(200, categories);

    const result = await getCategories();
    expect(result).toEqual(categories);
  });

  it('handles fetch categories error', async () => {
    mock.onGet('/categories').networkError();
    await expect(getCategories()).rejects.toThrow('Network Error');
  });
});
