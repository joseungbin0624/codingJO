import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { submitFeedback } from '../../services/feedbackService';

describe('Feedback Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('submits feedback successfully', async () => {
    const feedbackData = { userId: 1, content: 'Great course!' };
    mock.onPost('/feedback').reply(200, { message: 'Feedback submitted successfully' });

    const result = await submitFeedback(feedbackData);
    expect(result).toEqual({ message: 'Feedback submitted successfully' });
  });

  it('handles error while submitting feedback', async () => {
    mock.onPost('/feedback').networkError();
    await expect(submitFeedback({ userId: 1, content: 'Great course!' })).rejects.toThrow('Network Error');
  });
});
