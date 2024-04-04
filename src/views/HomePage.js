import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses } from '../store/courseSlice';
import { fetchAllEvents } from '../store/eventSlice';
import CourseCard from '../components/CourseCard';
import EventCard from '../components/EventCard';
import Carousel from '../components/Carousel';
import '../styles/HomePage.scss';
import { useNavigate } from 'react-router-dom';

// 이미지 추가
import vanImage from '../assets/images/Retro_Yellow_Van_on_Tropical_Beach.png.png';
import flowerImage from '../assets/images/flower.jpg';
import cathedralImage from '../assets/images/Colorful_Cathedral_Illustration_in_Circle.png.png';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const courses = useSelector(state => state.course.courses);
    const events = useSelector(state => state.event.events);

    useEffect(() => {
        dispatch(fetchAllCourses());
        dispatch(fetchAllEvents());
    }, [dispatch]);

    return (
        <div className="home-page">
            <Carousel images={[vanImage, flowerImage, cathedralImage]} />
            <div className="featured-courses">
                <h2>Featured Courses</h2>
                <div className="courses-list">
                    {courses.map((course, index) => (
                        // 고유한 key prop 제공
                        <CourseCard key={course.id} course={course} onClick={() => navigate(`/course/${course.id}`)} />
                    ))}
                </div>
            </div>
            <div className="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    {events.map((event, index) => (
                        // 고유한 key prop 제공
                        <EventCard key={event.id} event={event} onClick={() => navigate(`/event/${event.id}`)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
