import { getAllEvents } from '../services/eventService';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const mock = new AxiosMockAdapter(axios);

describe('Event Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches all events successfully', async () => {
    const responseData = [{ id: 1, name: 'Event 1' }];
    mock.onGet('/events').reply(200, responseData);
    const data = await getAllEvents();
    expect(data).toEqual(responseData);
  });

  it('handles error while fetching all events', async () => {
    mock.onGet('/events').networkError();
    await expect(getAllEvents()).rejects.toThrowError(new Error('Network Error'));
  });
});
