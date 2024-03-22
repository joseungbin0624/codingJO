import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

describe('Card Component', () => {
  it('renders card with title, description, and image', () => {
    const mockCard = {
      title: 'Test Title',
      description: 'Test Description',
      imageUrl: 'test-image.jpg'
    };

    render(<Card {...mockCard} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
  });
});
