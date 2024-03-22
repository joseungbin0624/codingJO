import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SettingsForm from '../../components/SettingsForm';
import { updateUserProfile } from '../../services/userService';

jest.mock('../../services/userService');

describe('SettingsForm Component', () => {
  it('updates user settings', async () => {
    updateUserProfile.mockResolvedValue(true);
    render(<SettingsForm userId="123" />);
    
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'newUsername' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'newemail@test.com' } });
    fireEvent.click(screen.getByText('Update Settings'));
    
    await waitFor(() => {
      expect(updateUserProfile).toHaveBeenCalledWith("123", { username: 'newUsername', email: 'newemail@test.com' });
    });
  });
});
