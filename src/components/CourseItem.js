// E:\project\codingJO\src\components\CourseItem.js
import React from 'react';

const CourseItem = ({ course }) => {
  return (
    <div className="course-item">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseItem;
