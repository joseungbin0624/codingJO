import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RealtimeDiscussion from '../../components/RealtimeDiscussion';
import { getChatById, sendMessage } from '../../services/chatService';

jest.mock('../../services/chatService');

describe('RealtimeDiscussion Component', () => {
  it('loads and displays messages', async () => {
    getChatById.mockResolvedValue({ messages: ['Hello', 'Hi there!'] });
    render(<RealtimeDiscussion chatId="123" />);
    
    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument();
      expect(screen.getByText('Hi there!')).toBeInTheDocument();
    });
  });

  it('sends a new message', async () => {
    sendMessage.mockResolvedValue(true);
    render(<RealtimeDiscussion chatId="123" />);
    
    fireEvent.change(screen.getByPlaceholderText('Type a message...'), { target: { value: 'New message' } });
    fireEvent.click(screen.getByText('Send'));
    
    await waitFor(() => {
      // Assuming the message list is updated to include the new message
      expect(sendMessage).toHaveBeenCalledWith("123", { message: 'New message' });
    });
  });
});
