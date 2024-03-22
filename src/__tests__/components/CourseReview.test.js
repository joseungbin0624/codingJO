jest.mock('../../services/reviewService', () => ({
  createReview: jest.fn().mockResolvedValue(true)
}));

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CourseReview from '../../components/CourseReview';

describe('CourseReview Component', () => {
  it('submits a review and shows success message', async () => {
    render(<CourseReview courseId="test-course-id" />);

    fireEvent.change(screen.getByPlaceholderText('Write a review...'), { target: { value: 'Great course!' } });
    fireEvent.click(screen.getByText('Submit Review'));

    await waitFor(() => {
      expect(screen.getByText('Review submitted successfully!')).toBeInTheDocument();
    });
  });
});
