 
import React from 'react';
import Rating from 'react-rating-stars-component';
import { reviewService } from '../services/reviewService';
import './CourseReview.scss';

const CourseReview = ({ courseId }) => {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    reviewService.getReviewsByCourseId(courseId).then(setReviews);
  }, [courseId]);

  return (
    <div className="course-review">
      <h3>Course Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <Rating value={review.rating} edit={false} size={20} />
          <p>{review.text}</p>
          <span>— {review.user}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseReview;
