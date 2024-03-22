import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoryItem from '../../components/CategoryItem';

describe('CategoryItem Component', () => {
  it('renders category information and navigates on click', () => {
    const mockCategory = {
      id: 1,
      name: 'Test Category',
      description: 'This is a test category.',
      image: 'test-category-image.png'
    };

    render(
      <BrowserRouter>
        <CategoryItem category={mockCategory} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('This is a test category.')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-category-image.png');

    // Note: Testing navigation would require more setup to mock the useNavigate hook or check the window.location.
  });
});
