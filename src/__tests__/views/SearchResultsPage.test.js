import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import SearchResultsPage from '../../views/SearchResultsPage';
import { performSearch } from '../../services/searchService';
jest.mock('../../services/searchService');

test('검색 결과 페이지가 검색 결과를 정상적으로 불러와 표시하는지 확인', async () => {
  const mockResults = [
    { id: 1, title: 'React 기초' },
    { id: 2, title: '고급 JavaScript' }
  ];
  performSearch.mockResolvedValue(mockResults);
  const router = createMemoryRouter([{ path: '/search', element: <SearchResultsPage /> }], { initialEntries: ['/search?q=react'] });

  render(<RouterProvider router={router} />);
  await waitFor(() => expect(performSearch).toHaveBeenCalledWith('react'));

  expect(screen.getByText(/Search Results for "react"/i)).toBeInTheDocument();
  expect(screen.getByText(/React 기초/i)).toBeInTheDocument();
  expect(screen.getByText(/고급 JavaScript/i)).toBeInTheDocument();
});
