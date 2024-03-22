import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewPage from '../../views/ReviewPage';
import { getCourseReviews } from '../../services/reviewService';
jest.mock('../../services/reviewService');

test('리뷰 페이지가 과정 리뷰를 정상적으로 불러와 표시하는지 확인', async () => {
  const mockReviews = [
    { id: 1, content: '정말 유익한 강의였습니다.' },
    { id: 2, content: '강사님이 정말 친절하세요.' }
  ];
  getCourseReviews.mockResolvedValue(mockReviews);

  render(<ReviewPage match={{ params: { courseId: '1' } }} />);
  await waitFor(() => expect(getCourseReviews).toHaveBeenCalledWith('1'));

  expect(screen.getByText(/Course Reviews/i)).toBeInTheDocument();
  expect(screen.getByText(/정말 유익한 강의였습니다./i)).toBeInTheDocument();
  expect(screen.getByText(/강사님이 정말 친절하세요./i)).toBeInTheDocument();
});
