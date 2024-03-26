import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses, fetchCourseDetails } from '../store/courseSlice';
import '../styles/CoursePage.scss';

const CoursePage = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const courseDetails = useSelector(state => state.course.details);

    useEffect(() => {
        dispatch(fetchCourseDetails(courseId));
    }, [dispatch, courseId]);

    if (!courseDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-page">
            <h1>{courseDetails.title}</h1>
            <div className="course-info">
                <p>{courseDetails.description}</p>
                {/* Additional course information and components */}
            </div>
        </div>
    );
};

export default CoursePage;
