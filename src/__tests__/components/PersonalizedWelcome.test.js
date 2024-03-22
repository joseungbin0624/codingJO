// src/__tests__/components/PersonalizedWelcome.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as userService from '../../services/userService'; // 수정: 명확한 import 방식
import PersonalizedWelcome from '../../components/PersonalizedWelcome';

jest.mock('../../services/userService'); // 수정: 목업 방식 명확화

describe('PersonalizedWelcome Component', () => {
  it('displays welcome message for the user', async () => {
    userService.fetchCurrentUser.mockResolvedValue({ name: 'John Doe' }); // 수정: 목업 구현
    render(<PersonalizedWelcome />);
    await expect(screen.findByText(/Welcome back, John Doe!/)).resolves.toBeInTheDocument();
  });

  it('displays generic welcome message when no user', async () => {
    userService.fetchCurrentUser.mockResolvedValue(null); // 수정: 목업 구현
    render(<PersonalizedWelcome />);
    await expect(screen.findByText('Welcome to CodingJO!')).resolves.toBeInTheDocument();
  });
});
