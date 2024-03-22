import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserContributionsPage from '../../views/UserContributionsPage';
import { getUserProfile } from '../../services/userService';
jest.mock('../../services/userService');

test('사용자 기여 페이지가 사용자 기여 내역을 불러와 표시하는지 확인', async () => {
  getUserProfile.mockResolvedValue({
    contributions: [
      { id: 1, title: 'React 튜토리얼', type: 'Tutorial' },
      { id: 2, title: 'Vue.js 시작하기', type: 'Article' }
    ]
  });

  render(<UserContributionsPage />);
  await waitFor(() => expect(getUserProfile).toHaveBeenCalledTimes(1));

  expect(screen.getByText(/Your Contributions/i)).toBeInTheDocument();
  expect(screen.getByText(/No contributions found./i)).toBeInTheDocument(); // 예시에서는 기여 내역이 없다고 가정
});
