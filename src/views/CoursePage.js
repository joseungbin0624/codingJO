// CoursePage.js 수정본
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetails } from '../store/courseSlice';
import CourseReview from '../components/CourseReview'; // 리뷰 컴포넌트 추가
import '../styles/CoursePage.scss';

// 가정으로 추가한 강좌 아이콘 이미지, 실제 경로로 교체 필요
import pandaIcon from '../assets/images/Panda_Icon_in_Red_and_Cream_Circle.png.png';

const CoursePage = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const courseDetails = useSelector(state => state.course.details);

    useEffect(() => {
        dispatch(fetchCourseDetails(courseId));
    }, [courseId, dispatch]);

    if (!courseDetails) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className="course-page">
            <img src={courseDetails.image || pandaIcon} alt="강좌 아이콘" className="course-icon" />
            <h1>{courseDetails.title}</h1>
            <div className="course-info">
                <p>{courseDetails.description}</p>
                {courseDetails.duration && <p>기간: {courseDetails.duration}</p>}
                {courseDetails.instructor && <p>강사: {courseDetails.instructor}</p>}
                {courseDetails.enrollmentLink && <a href={courseDetails.enrollmentLink} target="_blank" rel="noopener noreferrer">지금 등록하기</a>}
                {/* 추가적인 강좌 정보를 여기에 넣을 수 있습니다. */}
            </div>
            {/* CourseReview 컴포넌트를 사용하여 리뷰 기능 추가 */}
            <CourseReview courseId={courseId} />
        </div>
    );
};

export default CoursePage;
