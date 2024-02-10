import React from 'react';
import moment from 'moment';
import './EventCard.scss';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <div className="event-info">
        <h4>{event.title}</h4>
        <p>{moment(event.date).format('MMMM Do YYYY, h:mm a')}</p>
        <p>{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;

