import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';
import '../styles/FeedbackForm.scss';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await submitFeedback({ text: feedback });
      setFeedback('');
      setSubmitStatus('Feedback submitted successfully!');
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      setSubmitStatus('Failed to submit feedback.');
    }
  };

  return (
    <div className="feedback-form">
      <form onSubmit={handleSubmit}>
        <textarea
          name="feedback"
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
}

export default FeedbackForm;
