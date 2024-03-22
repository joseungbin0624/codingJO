import React, { useState } from 'react';
import { createReview } from '../services/reviewService';
import '../styles/CourseReview.scss';

function CourseReview({ courseId }) {
  const [review, setReview] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!review.trim()) return;
    try {
      await createReview(courseId, { text: review });
      setReview('');
      setSubmitStatus('Review submitted successfully!');
    } catch (error) {
      console.error('Failed to submit review:', error);
      setSubmitStatus('Failed to submit review.');
    }
  };

  return (
    <div className="course-review">
      <form onSubmit={handleSubmit}>
        <textarea
          name="review"
          placeholder="Write a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
      {submitStatus && <p>{submitStatus}</p>} {/* 제출 상태 메시지 추가 */}
    </div>
  );
}

export default CourseReview;
