import React from 'react';

const FavoriteCoursesList = ({ favorites }) => {
  return (
    <div className="favorite-courses-list">
      {favorites.map((course, index) => (
        <div key={index} className="favorite-course">
          <h3>{course.name}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteCoursesList;
