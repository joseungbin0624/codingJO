import React from 'react';

const EventsCalendar = ({ events }) => {
  return (
    <div className="events-calendar">
      {events.map((event, index) => (
        <div key={index} className="event">
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsCalendar;
