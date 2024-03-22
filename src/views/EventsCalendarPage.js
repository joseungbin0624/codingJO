import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getAllEvents } from '../services/eventService'; // 수정된 부분
import '../styles/EventsCalendarPage.scss';
import { Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);

function EventsCalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getAllEvents(); // 수정된 부분
        const formattedEvents = data.map(event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-calendar-page">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default EventsCalendarPage;
