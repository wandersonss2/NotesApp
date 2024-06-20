// src/components/UpdateEventForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/EventForm.css';

interface UpdateEventFormProps {
  eventId: number;
  onUpdate: () => void;
}

const UpdateEventForm: React.FC<UpdateEventFormProps> = ({ eventId, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${eventId}`);
        const { title, description, date } = response.data;
        setTitle(title);
        setDescription(description);
        setDate(date);
      } catch (error) {
        setError('Failed to fetch event details.');
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/events/${eventId}`, { title, description, date });
      console.log(response.data); // Lida com a resposta do backend
      onUpdate();
    } catch (error) {
      setError('Failed to update event. Please try again.');
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Update Event</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Event</button>
    </form>
  );
};

export default UpdateEventForm;
