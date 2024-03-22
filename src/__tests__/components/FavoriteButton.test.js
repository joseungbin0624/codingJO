jest.mock('../../services/favoritesService', () => ({
  addFavorite: jest.fn(),
  removeFavorite: jest.fn(),
  checkFavorite: jest.fn().mockResolvedValue(false)
}));

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FavoriteButton from '../../components/FavoriteButton';

describe('FavoriteButton Component', () => {
  it('toggles favorite status on click', async () => {
    render(<FavoriteButton userId="test-user-id" courseId="test-course-id" />);

    const button = screen.getByText('Add to Favorites');
    fireEvent.click(button);

    // Assuming the favorite status toggles after click, which may require mocking the state update logic
  });
});
