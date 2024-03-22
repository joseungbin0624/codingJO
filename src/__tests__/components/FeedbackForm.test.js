import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FeedbackForm from '../../components/FeedbackForm';
import * as feedbackService from '../../services/feedbackService';

jest.mock('../../services/feedbackService');

describe('FeedbackForm Component', () => {
  it('submits feedback and shows success message', async () => {
    feedbackService.submitFeedback.mockResolvedValue(true);
    render(<FeedbackForm />);

    const feedbackInput = screen.getByPlaceholderText('Your feedback...');
    const submitButton = screen.getByText('Submit Feedback');

    fireEvent.change(feedbackInput, { target: { value: 'Great site!' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Feedback submitted successfully!')).toBeInTheDocument();
    });
  });
});
