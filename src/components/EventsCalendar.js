import React from 'react';
import calendarIcon from '../assets/icons/calendar-days-solid.svg'; // 아이콘 경로 추가
import '../styles/EventsCalendar.scss'; // 스타일 시트 경로


const EventsCalendar = ({ events }) => {
  return (
    <div className="events-calendar">
      {events.map((event, index) => (
        <div key={index} className="event">
          <img src={calendarIcon} alt="Event Date" className="event-date-icon" /> {/* 아이콘 추가 */}
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsCalendar;
