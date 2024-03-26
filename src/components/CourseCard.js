import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CourseCard.scss'; // CourseCard에 맞는 스타일 시트 경로

const CourseCard = ({ course }) => {
  let navigate = useNavigate();

  // 카드 클릭 시 강좌 상세 페이지로 이동
  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      {course.image && <img src={course.image} alt={course.title} className="course-card-image" />}
      <div className="course-card-info">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-description">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
