import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SettingsPage from '../../views/SettingsPage';
import { getUserProfile, updateUserProfile } from '../../services/userService';
jest.mock('../../services/userService');

beforeEach(() => {
  getUserProfile.mockClear();
  updateUserProfile.mockClear();
});

test('설정 페이지가 사용자 설정을 불러와 표시하고 업데이트를 처리하는지 확인', async () => {
  getUserProfile.mockResolvedValue({ username: '홍길동', email: 'hong@gildong.com' });
  updateUserProfile.mockResolvedValue({ message: '성공적으로 업데이트 되었습니다.' });

  render(<SettingsPage />);
  await waitFor(() => expect(getUserProfile).toHaveBeenCalledTimes(1));

  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: '새 홍길동' } });
  fireEvent.click(screen.getByText(/Update Settings/i));

  await waitFor(() => expect(updateUserProfile).toHaveBeenCalledTimes(1));
  expect(updateUserProfile).toHaveBeenCalledWith({ username: '새 홍길동', email: 'hong@gildong.com' });
});
