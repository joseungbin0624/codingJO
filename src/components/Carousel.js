// Carousel.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses } from '../store/courseSlice';
import '../styles/Carousel.scss';

const Carousel = () => {
  const dispatch = useDispatch();
  // 코스 목록을 가져오기 위해 Redux 스토어의 상태 선택
  const courses = useSelector((state) => state.course.courses);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 컴포넌트 마운트 시 코스 목록을 가져오기 위한 액션 디스패치
    dispatch(fetchAllCourses());
  }, [dispatch]);

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
        <button onClick={goToPrevious} aria-label="Previous Slide">&lt;</button>
        <button onClick={goToNext} aria-label="Next Slide">&gt;</button>
      </div>
      {courses.length > 0 ? (
        <div className="carousel-item">
          <img src={courses[currentIndex]?.image} alt={courses[currentIndex]?.title || 'Course image'} />
          <div>
            <h3>{courses[currentIndex]?.title}</h3>
            <p>{courses[currentIndex]?.description}</p>
          </div>
        </div>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default Carousel;
