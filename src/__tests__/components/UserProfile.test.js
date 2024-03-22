import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../../components/UserProfile';
import { fetchCurrentUser } from '../../services/authService';

jest.mock('../../services/authService');

describe('UserProfile Component', () => {
  it('fetches and displays user information', async () => {
    fetchCurrentUser.mockResolvedValue({
      name: 'Jane Doe',
      email: 'jane.doe@example.com'
    });
    render(<UserProfile />);
    
    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
      expect(screen.getByText('jane.doe@example.com')).toBeInTheDocument();
    });
  });
});
