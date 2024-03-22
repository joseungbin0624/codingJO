import { getAllTutorials } from '../services/tutorialService';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const mock = new AxiosMockAdapter(axios);

describe('Tutorial Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches all tutorials successfully', async () => {
    const responseData = [{ id: 1, title: 'Tutorial 1' }];
    mock.onGet('/tutorials').reply(200, responseData);
    const data = await getAllTutorials();
    expect(data).toEqual(responseData);
  });

  it('handles error while fetching all tutorials', async () => {
    mock.onGet('/tutorials').networkError();
    await expect(getAllTutorials()).rejects.toThrowError(new Error('Network Error'));
  });
});
