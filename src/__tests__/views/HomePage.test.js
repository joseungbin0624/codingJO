import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../views/HomePage';

test('홈페이지에 필요한 링크들이 정상적으로 표시되는지 확인', () => {
  render(<HomePage />);
  expect(screen.getByText(/Welcome to CodingJO!/i)).toBeInTheDocument();
  expect(screen.getByText(/Explore Courses/i)).toHaveAttribute('href', '/courses');
  expect(screen.getByText(/Visit Forum/i)).toHaveAttribute('href', '/forum');
  expect(screen.getByText(/Upcoming Events/i)).toHaveAttribute('href', '/events');
  expect(screen.getByText(/Tutorials/i)).toHaveAttribute('href', '/tutorials');
});
