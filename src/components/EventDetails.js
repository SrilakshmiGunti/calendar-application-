import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EventContext } from '../contexts/EventContext';
import './EventDetails.css';

const EventDetails = () => {
  const { events } = useContext(EventContext);
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <Link to="/">Back to Calendar</Link>
    </div>
  );
};

export default EventDetails;
