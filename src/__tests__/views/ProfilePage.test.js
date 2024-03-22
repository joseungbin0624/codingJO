import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProfilePage from '../../views/ProfilePage';
import { fetchCurrentUser } from '../../services/authService';
jest.mock('../../services/authService');

test('프로필 페이지가 사용자 데이터를 정상적으로 불러와 표시하는지 확인', async () => {
  fetchCurrentUser.mockResolvedValue({
    name: '홍길동',
    email: 'hong@gildong.com'
  });

  render(<ProfilePage />);
  await waitFor(() => expect(fetchCurrentUser).toHaveBeenCalled());

  expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
  expect(screen.getByText(/홍길동/i)).toBeInTheDocument();
  expect(screen.getByText(/hong@gildong.com/i)).toBeInTheDocument();
});
