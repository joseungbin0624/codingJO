import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SecureLogin from '../../components/SecureLogin';
import { login } from '../../services/authService';

jest.mock('../../services/authService');

describe('SecureLogin Component', () => {
  it('performs user login', async () => {
    login.mockResolvedValue({ message: 'Login successful' });
    render(<SecureLogin />);
    
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByText('Login'));
    
    expect(login).toHaveBeenCalledWith({ email: 'user@test.com', password: 'password' });
    // You might need to handle redirect or success message assertions here
  });
});
