// Carousel.js
import React, { useState, useEffect } from 'react';
import { courseService } from '../services/courseService';
import '../styles/Carousel.scss';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getAllCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? courses.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === courses.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
      {courses.length > 0 ? (
        <div className="carousel-item">
          <img src={courses[currentIndex].image} alt={courses[currentIndex].title} />
          <div>
            <h3>{courses[currentIndex].title}</h3>
            <p>{courses[currentIndex].description}</p>
          </div>
        </div>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default Carousel;
