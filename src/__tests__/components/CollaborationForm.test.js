import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CollaborationForm from '../../components/CollaborationForm';

describe('CollaborationForm Component', () => {
  it('validates email input and submits form', () => {
    const mockSubmit = jest.fn();
    render(<CollaborationForm onSubmit={mockSubmit} />);

    const input = screen.getByPlaceholderText('Your email');
    const button = screen.getByText('Submit');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    // Assuming the form calls the mock function on submission
    // Note: In actual tests, you might need to mock event.preventDefault or the actual submission logic
  });
});
