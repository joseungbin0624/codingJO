import React from 'react';
import { render, screen } from '@testing-library/react';
import EventCard from '../../components/EventCard';

describe('EventCard Component', () => {
  it('renders event details including formatted date', () => {
    const mockEvent = {
      title: 'Test Event',
      description: 'This is a test event.',
      date: '2023-01-01T00:00:00.000Z'
    };

    render(<EventCard event={mockEvent} />);
    
    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('This is a test event.')).toBeInTheDocument();
    expect(screen.getByText(/January 1, 2023/)).toBeInTheDocument(); // Date format may vary by locale
  });
});
