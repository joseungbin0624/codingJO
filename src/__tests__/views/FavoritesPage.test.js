import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FavoritesPage from '../../views/FavoritesPage';
import { getUserFavorites } from '../../services/favoritesService';
jest.mock('../services/favoritesService');

test('FavoritesPage displays favorite courses', async () => {
  getUserFavorites.mockResolvedValue([{ id: 1, title: 'React for Beginners', description: 'Introduction to React.' }]);
  render(<FavoritesPage />);
  await waitFor(() => expect(getUserFavorites).toHaveBeenCalled());
  expect(screen.getByText(/Your Favorites/i)).toBeInTheDocument();
  expect(screen.getByText(/React for Beginners/)).toBeInTheDocument();
});
