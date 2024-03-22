import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AchievementsPage from '../views/AchievementsPage';
import AchievementsPage from '../../views/AchievementsPage';

jest.mock('../services/achievementsService');

test('displays achievements after fetching', async () => {
  const achievementsMock = [
    { id: 1, title: 'First Achievement', description: 'This is your first achievement' }
  ];
  getAchievements.mockResolvedValue(achievementsMock);
  render(<AchievementsPage />);
  
  await waitFor(() => {
    const achievementTitle = screen.getByText('First Achievement');
    expect(achievementTitle).toBeInTheDocument();
  });
});
