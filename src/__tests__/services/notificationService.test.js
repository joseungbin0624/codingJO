import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUserNotifications } from '../../services/notificationService';

describe('Notification Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches user notifications successfully', async () => {
    const notifications = [{ id: 1, userId: 1, message: 'Welcome to our platform!' }];
    mock.onGet(`/notifications/user/1`).reply(200, notifications);

    const result = await getUserNotifications(1);
    expect(result).toEqual(notifications);
  });

  it('handles error while fetching user notifications', async () => {
    mock.onGet(`/notifications/user/1`).networkError();
    await expect(getUserNotifications(1)).rejects.toThrow('Network Error');
  });
});
