import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../contexts/EventContext';
import './Calendar.css';
import EventForm from './EventForm';

const Calendar = () => {
  const { events, deleteEvent } = useContext(EventContext); // Removed unused variables
  const [showForm, setShowForm] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleAddEvent = () => {
    setCurrentEvent(null);
    setShowForm(true);
  };

  const handleEditEvent = (event) => {
    setCurrentEvent(event);
    setShowForm(true);
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id);
  };

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <button onClick={handleAddEvent} className="add-event-btn">Add Event</button>
      <div className="calendar-grid">
        {events.map(event => (
          <div key={event.id} className="calendar-event">
            <Link to={`/event/${event.id}`}>{event.title}</Link>
            <button onClick={() => handleEditEvent(event)} className="edit-btn">Edit</button>
            <button onClick={() => handleDeleteEvent(event.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
      {showForm && <EventForm currentEvent={currentEvent} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Calendar;
