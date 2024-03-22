import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { submitSupportTicket, getSupportTickets } from '../../services/supportService';

describe('Support Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('submits a support ticket successfully', async () => {
    const ticketData = { userId: 1, message: 'Need help with my account' };
    mock.onPost('/support/tickets').reply(200, { message: 'Support ticket submitted successfully' });

    const result = await submitSupportTicket(ticketData);
    expect(result).toEqual({ message: 'Support ticket submitted successfully' });
  });

  it('fetches support tickets successfully', async () => {
    const tickets = [{ id: 1, userId: 1, message: 'Need help with my account' }];
    mock.onGet(`/support/tickets/1`).reply(200, tickets);

    const result = await getSupportTickets(1);
    expect(result).toEqual(tickets);
  });

  it('handles error while submitting a support ticket', async () => {
    const ticketData = { userId: 1, message: 'Need help with my account' };
    mock.onPost('/support/tickets').networkError();
    await expect(submitSupportTicket(ticketData)).rejects.toThrow('Network Error');
  });
});
