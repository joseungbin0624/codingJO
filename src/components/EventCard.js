import React from 'react';
import '../styles/EventCard.scss';

function EventCard({ event }) {
  // 이벤트 날짜 형식을 보다 친숙한 형태로 변환
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
      {/* 날짜 형식 변경 반영 */}
      <span>{formattedDate}</span>
    </div>
  );
}

export default EventCard;
