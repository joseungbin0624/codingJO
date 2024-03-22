import { sendCollaborationRequest } from '../services/collaborationService';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const mock = new AxiosMockAdapter(axios);

describe('Collaboration Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('sends collaboration request successfully', async () => {
    mock.onPost('/collaborations').reply(200, { message: 'Request sent' });
    const response = await sendCollaborationRequest({ userId: 1, projectId: 2 });
    expect(response).toEqual({ message: 'Request sent' });
  });

  it('handles send collaboration request error', async () => {
    mock.onPost('/collaborations').networkError();
    await expect(sendCollaborationRequest({ userId: 1, projectId: 2 })).rejects.toThrowError(new Error('Network Error'));
  });
});
