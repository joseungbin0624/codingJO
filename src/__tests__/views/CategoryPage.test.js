import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CategoryPage from '../../views/CategoryPage';
import { getCategories } from '../services/categoryService';
jest.mock('../services/categoryService');

test('renders CategoryPage and fetches categories', async () => {
  getCategories.mockResolvedValue([{ id: 1, name: 'Web Development', description: 'Learn about web development.' }]);
  render(<CategoryPage />);
  await waitFor(() => expect(getCategories).toHaveBeenCalledTimes(1));
  expect(screen.getByText(/Explore Categories/i)).toBeInTheDocument();
  expect(screen.getByText(/Web Development/)).toBeInTheDocument();
});
