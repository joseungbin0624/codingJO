import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('displays the button text and responds to click events', () => {
    const mockOnClick = jest.fn();
    render(<Button text="Test Button" onClick={mockOnClick} />);

    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
