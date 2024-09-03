import React, { useContext, useState } from 'react';
import { EventContext } from '../contexts/EventContext';
import './EventForm.css';

const EventForm = ({ currentEvent, onClose }) => {
  const { addEvent, editEvent } = useContext(EventContext);
  const [event, setEvent] = useState(currentEvent || { title: '', date: '', category: 'Personal' });

  const handleSubmit = (e) => {
    e.preventDefault();
    currentEvent ? editEvent(event) : addEvent(event);
    onClose();
  };

  return (
    <div className="event-form">
      <h2>{currentEvent ? 'Edit Event' : 'Add Event'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
          required
        />
        <input
          type="date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
          required
        />
        <select value={event.category} onChange={(e) => setEvent({ ...event, category: e.target.value })}>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
        <button type="submit">Save Event</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EventForm;
