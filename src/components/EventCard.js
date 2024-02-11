import React from 'react';
import { useSpring, animated } from 'react-spring';
import './EventCard.scss';

const EventCard = ({ event }) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className="event-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </animated.div>
  );
};

export default EventCard;
