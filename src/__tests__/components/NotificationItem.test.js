import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from '../../components/NotificationItem';

describe('NotificationItem Component', () => {
  it('renders notification message and formatted date', () => {
    const notification = {
      message: 'Test Notification',
      date: '2023-01-01T00:00:00.000Z'
    };
    render(<NotificationItem notification={notification} />);

    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.getByText(/January 1, 2023/)).toBeInTheDocument();
  });
});
