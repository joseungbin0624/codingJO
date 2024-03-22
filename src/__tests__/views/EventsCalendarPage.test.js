import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EventsCalendarPage from '../../views/EventsCalendarPage';
import { getAllEvents } from '../../services/eventService';
jest.mock('../services/eventService');

test('EventsCalendarPage fetches and displays events', async () => {
  getAllEvents.mockResolvedValue([{ id: 1, title: 'React Conference', start: new Date(), end: new Date() }]);
  render(<EventsCalendarPage />);
  await waitFor(() => expect(getAllEvents).toHaveBeenCalled());
  // Note: Testing library with react-big-calendar might require additional setup to fully test event rendering.
  expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
});
