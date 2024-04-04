import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';
import commentIcon from '../assets/icons/comment-solid.svg'; // 아이콘 경로 추가
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
      <img src={commentIcon} alt="Feedback" className="feedback-icon" /> {/* 아이콘 추가 */}
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
