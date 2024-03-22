import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FeedbackPage from '../../views/FeedbackPage';
import { submitFeedback } from '../../services/feedbackService';
jest.mock('../services/feedbackService');

test('FeedbackPage allows feedback submission', async () => {
  submitFeedback.mockResolvedValue('Feedback submitted successfully');
  render(<FeedbackPage />);
  const submitButton = screen.getByText(/Submit Feedback/i);
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);
  // Validate form interaction and mock function call
  expect(submitFeedback).toHaveBeenCalledTimes(1);
});
