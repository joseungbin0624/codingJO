import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEvents } from '../store/eventSlice';
import EventsCalendar from '../components/EventsCalendar'; // 수정 필요
import '../styles/EventsCalendarPage.scss'; // 정확한 경로로 수정 필요


const EventsCalendarPage = () => {
    const dispatch = useDispatch();
    const { events } = useSelector(state => state.event);

    useEffect(() => {
        dispatch(fetchAllEvents());
    }, [dispatch]);

    return (
        <div className="events-calendar-page">
            <h1>Events Calendar</h1>
            <EventsCalendar events={events} />
        </div>
    );
};

export default EventsCalendarPage;
