import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/courseService';
import CourseReview from '../components/CourseReview';
import FavoriteButton from '../components/FavoriteButton';
import '../styles/CoursePage.scss';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const fetchedCourse = await getCourseById(courseId);
        setCourse(fetchedCourse);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    }
    fetchCourse();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-page">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <FavoriteButton courseId={courseId} />
      <CourseReview courseId={courseId} />
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default CoursePage;
