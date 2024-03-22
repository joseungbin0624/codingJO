import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ChatPage from '../../views/ChatPage';
import { getUserChats } from '../services/chatService';
jest.mock('../services/chatService');

test('renders ChatPage and fetches chats', async () => {
  getUserChats.mockResolvedValue([{ id: 1, title: 'React Discussion' }]);
  render(<ChatPage />);
  await waitFor(() => expect(getUserChats).toHaveBeenCalledTimes(1));
  expect(screen.getByText(/Your Chats/i)).toBeInTheDocument();
  expect(screen.getByText(/React Discussion/)).toBeInTheDocument();
});
