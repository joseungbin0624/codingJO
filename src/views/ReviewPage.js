import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseReviews } from '../services/reviewService';
import '../styles/ReviewPage.scss';

function ReviewPage() {
  const { courseId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewData = await getCourseReviews(courseId);
        setReviews(reviewData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
    fetchReviews();
  }, [courseId]);

  return (
    <div className="review-page">
      <h1>Course Reviews</h1>
      {reviews.length > 0 ? reviews.map(review => (
        <div key={review.id}>
          {review.content}
        </div>
      )) : <p>No reviews yet.</p>}
    </div>
  );
}

export default ReviewPage;
