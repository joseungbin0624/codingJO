import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NotificationPage from '../../views/NotificationPage';
import { getUserNotifications } from '../../services/notificationService';
jest.mock('../../services/notificationService');

test('알림 페이지가 사용자 알림을 정상적으로 불러와 표시하는지 확인', async () => {
  getUserNotifications.mockResolvedValue([
    { id: 1, message: '새로운 코스가 추가되었습니다.', date: new Date() },
  ]);

  render(<NotificationPage />);
  await waitFor(() => expect(getUserNotifications).toHaveBeenCalled());

  expect(screen.getByText(/Your Notifications/i)).toBeInTheDocument();
  expect(screen.getByText(/새로운 코스가 추가되었습니다./i)).toBeInTheDocument();
});
