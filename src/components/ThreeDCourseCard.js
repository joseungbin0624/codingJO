import React from 'react';
import '../styles/ThreeDCourseCard.scss';

function ThreeDCourseCard({ course }) {
  return (
    <div className="three-d-course-card">
      <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}></div>
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  );
}
export default ThreeDCourseCard;