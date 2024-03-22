import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import { submitFeedback } from '../services/feedbackService';
import '../styles/FeedbackPage.scss';
import { Link } from 'react-router-dom';

function FeedbackPage() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = async (feedback) => {
    try {
      await submitFeedback(feedback);
      setFeedbackSubmitted(true);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  return (
    <div className="feedback-page">
      <h1>Provide Your Feedback</h1>
      {feedbackSubmitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      )}
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default FeedbackPage;
