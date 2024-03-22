import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ForumPage from '../../views/ForumPage';
import { getAllForums } from '../../services/forumService';
jest.mock('../services/forumService');

test('ForumPage fetches and displays forums', async () => {
  getAllForums.mockResolvedValue([{ id: 1, title: 'React Discussions', description: 'Discuss everything about React.' }]);
  render(<ForumPage />);
  await waitFor(() => expect(getAllForums).toHaveBeenCalled());
  expect(screen.getByText(/Community Forums/i)).toBeInTheDocument();
  expect(screen.getByText(/React Discussions/)).toBeInTheDocument();
});
