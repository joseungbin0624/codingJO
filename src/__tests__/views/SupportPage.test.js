import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SupportPage from '../../views/SupportPage';
import { submitSupportTicket } from '../../services/supportService';
jest.mock('../../services/supportService');

test('지원 페이지가 지원 티켓 제출을 처리하는지 확인', async () => {
  submitSupportTicket.mockResolvedValue({ message: '티켓이 성공적으로 제출되었습니다.' });

  render(<SupportPage />);
  fireEvent.change(screen.getByPlaceholderText(/Your email/i), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Describe your issue or question/i), { target: { value: '도움이 필요해요!' } });
  fireEvent.click(screen.getByText(/Submit Request/i));

  await waitFor(() => expect(submitSupportTicket).toHaveBeenCalledWith({ email: 'user@example.com', message: '도움이 필요해요!' }));
});
