jest.mock('../../services/chatService', () => ({
  sendMessage: jest.fn().mockResolvedValue({ message: 'Mock response message' })
}));

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatBot from '../../components/ChatBot';

describe('ChatBot Component', () => {
  it('sends message and displays response', async () => {
    render(<ChatBot />);

    fireEvent.change(screen.getByPlaceholderText('Say something...'), { target: { value: 'Test message' } });
    fireEvent.click(screen.getByText('Send'));

    await waitFor(() => {
      expect(screen.getByText('Mock response message')).toBeInTheDocument();
    });
  });
});
