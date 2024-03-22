import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DashboardPage from '../../views/DashboardPage';
import { getUserActivities } from '../../services/dashboardService';
jest.mock('../services/dashboardService');

test('DashboardPage displays user activities', async () => {
  getUserActivities.mockResolvedValue([{ id: 1, title: 'Completed React Course', description: 'You have completed the React course.' }]);
  render(<DashboardPage />);
  await waitFor(() => expect(getUserActivities).toHaveBeenCalled());
  expect(screen.getByText(/Your Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Completed React Course/)).toBeInTheDocument();
});
