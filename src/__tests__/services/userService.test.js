import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUserProfile, updateUserProfile, deleteUser } from '../../services/userService';

describe('User Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches user profile successfully', async () => {
    const userProfile = { id: 1, name: 'John Doe' };
    mock.onGet(`/users/${userProfile.id}`).reply(200, userProfile);

    const result = await getUserProfile(userProfile.id);
    expect(result).toEqual(userProfile);
  });

  it('updates user profile successfully', async () => {
    const userId = 1;
    const profileData = { name: 'John Updated' };
    mock.onPut(`/users/${userId}`).reply(200, profileData);

    const result = await updateUserProfile(userId, profileData);
    expect(result).toEqual(profileData);
  });

  it('deletes a user successfully', async () => {
    const userId = 1;
    mock.onDelete(`/users/${userId}`).reply(200, { message: 'User deleted successfully' });

    const result = await deleteUser(userId);
    expect(result).toEqual({ message: 'User deleted successfully' });
  });

  it('handles error while fetching user profile', async () => {
    const userId = 1;
    mock.onGet(`/users/${userId}`).networkError();
    await expect(getUserProfile(userId)).rejects.toThrow('Network Error');
  });
});
