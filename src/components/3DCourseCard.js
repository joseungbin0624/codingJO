import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import CourseModel from './CourseModel'; // 3D 모델 컴포넌트
import { courseService } from '../services/courseService';
import './3DCourseCard.scss'; // 3D 코스 카드 스타일
import { fadeIn } from './animations'; // 애니메이션 유틸
import { truncateString } from '../utils/helpers'; // 헬퍼 함수

const 3DCourseCard = ({ courseId }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    courseService.getCourseById(courseId)
      .then(setCourse);
  }, [courseId]);

  return (
    <div className="3d-course-card" style={{ animation: fadeIn }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {course && <CourseModel course={course} />}
      </Canvas>
      <div className="course-info">
        <h3>{course ? truncateString(course.title, 20) : 'Loading...'}</h3>
        <p>{course && truncateString(course.description, 100)}</p>
      </div>
    </div>
  );
};

export default 3DCourseCard;

