// src/components/EventList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/EventList.css';
import axiosInstance from '../utils/axiosInstance';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get('/events/getall');
        setEvents(response.data);
      } catch (error) {
        setError('Failed to fetch events.');
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await axiosInstance.delete(`/events/eventdelet/${id}`);
      if (response.status === 200) {
        setEvents(events.filter(event => event.id !== id));
      } else {
        setError('Failed to delete event.');
      }
    } catch (error) {
      setError('Failed to delete event.');
    }
  };

  return (
    <div className="event-list">
      <h2>Event List</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
