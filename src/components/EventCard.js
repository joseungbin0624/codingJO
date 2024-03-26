// EventCard.js
import React from 'react';
import '../styles/EventCard.scss'; // 경로 확인: '../styles/EventCard.scss'가 존재해야 함

function EventCard({ event }) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <span>{formattedDate}</span>
    </div>
  );
}

export default EventCard;
