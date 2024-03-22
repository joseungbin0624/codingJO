import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnalyticsPage from '../../views/AnalyticsPage';
import { getAnalyticsData } from '../services/analyticsService';
jest.mock('../services/analyticsService');

test('renders AnalyticsPage and fetches data', async () => {
  getAnalyticsData.mockResolvedValue([{ id: 1, name: 'User Engagement', value: 75 }]);
  render(<AnalyticsPage />);
  const title = screen.getByText(/Analytics Overview/i);
  expect(title).toBeInTheDocument();
  await waitFor(() => expect(getAnalyticsData).toHaveBeenCalledTimes(1));
  expect(screen.getByText(/User Engagement/)).toBeInTheDocument();
});
