import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CoursePage from '../../views/CoursePage';
import { getCourseById } from '../../services/courseService';
jest.mock('../services/courseService');

test('renders CoursePage and fetches course details', async () => {
  getCourseById.mockResolvedValue({ id: '1', title: 'React Basics', description: 'Learn React basics.' });
  render(
    <MemoryRouter initialEntries={['/courses/1']}>
      <Route path="/courses/:courseId">
        <CoursePage />
      </Route>
    </MemoryRouter>
  );
  await waitFor(() => expect(getCourseById).toHaveBeenCalledTimes(1));
  expect(screen.getByText(/React Basics/i)).toBeInTheDocument();
});
