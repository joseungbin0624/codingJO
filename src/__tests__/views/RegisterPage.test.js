import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from '../../views/RegisterPage';
import { registerUser } from '../../services/authService'; // 가정: authService에서 registerUser를 export한다고 가정
jest.mock('../../services/authService');

test('회원가입 페이지에서 사용자가 회원가입을 시도할 때 API 호출이 이루어지는지 확인', async () => {
  registerUser.mockResolvedValue({ user: { id: 1, name: '홍길동' } });
  const { getByLabelText, getByText } = render(<RegisterPage />);

  fireEvent.change(getByLabelText(/Full Name/i), { target: { value: '홍길동' } });
  fireEvent.change(getByLabelText(/Email Address/i), { target: { value: 'hong@gildong.com' } });
  fireEvent.change(getByLabelText(/Password/i), { target: { value: 'password' } });
  fireEvent.click(getByText(/Sign Up/i));

  await waitFor(() => expect(registerUser).toHaveBeenCalledTimes(1));
  expect(registerUser).toHaveBeenCalledWith({
    name: '홍길동',
    email: 'hong@gildong.com',
    password: 'password'
  });
});
