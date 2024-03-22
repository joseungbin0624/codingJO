import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../../views/LoginPage';
import { login } from '../../services/authService';
jest.mock('../services/authService');

beforeEach(() => {
  login.mockClear();
});

test('로그인 페이지에서 로그인 시도시 API 호출이 이루어지는지 확인', async () => {
  login.mockResolvedValue({ token: 'fake-token' });
  const { getByLabelText, getByText } = render(<LoginPage />);

  fireEvent.change(getByLabelText(/Email/i), { target: { value: 'user@example.com' } });
  fireEvent.change(getByLabelText(/Password/i), { target: { value: 'password' } });
  fireEvent.click(getByText(/Login/i));

  await waitFor(() => expect(login).toHaveBeenCalledTimes(1));
  expect(login).toHaveBeenCalledWith({
    email: 'user@example.com',
    password: 'password'
  });
});
