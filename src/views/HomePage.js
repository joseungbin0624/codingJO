// HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses } from '../store/courseSlice'; // 수정됨: 임포트된 함수 이름 변경
import { fetchAllEvents } from '../store/eventSlice'; // 수정됨: 임포트된 함수 이름 변경
import CourseCard from '../components/CourseCard.js';
import EventCard from '../components/EventCard';
import Carousel from '../components/Carousel';
import '../styles/HomePage.scss';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 변경: 변수명 history에서 navigate로 변경
    const { courses } = useSelector((state) => state.course);
    const { events } = useSelector((state) => state.event);

    useEffect(() => {
        dispatch(fetchAllCourses()); // 수정됨: 함수 이름 변경
        dispatch(fetchAllEvents()); // 수정됨: 함수 이름 변경
    }, [dispatch]);

    const handleCourseClick = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    const handleEventClick = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    return (
        <div className="home-page">
            <Carousel />
            <div className="featured-courses">
                <h2>Featured Courses</h2>
                <div className="courses-list">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} onClick={() => handleCourseClick(course.id)} />
                    ))}
                </div>
            </div>
            <div className="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} onClick={() => handleEventClick(event.id)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
