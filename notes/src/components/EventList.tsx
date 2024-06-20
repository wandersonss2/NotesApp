import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import '../css/EventList.css';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState('');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const navigate = useNavigate();

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

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      try {
        const response = await axiosInstance.put(`/events/eventedit/${editingEvent.id}`, editingEvent);
        if (response.status === 200) {
          setEvents(events.map(event => (event.id === editingEvent.id ? editingEvent : event)));
          setEditingEvent(null); // Clear the editing event state
        } else {
          setError('Failed to update event.');
        }
      } catch (error) {
        setError('Failed to update event.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingEvent) {
      setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
    }
  };

  const handleRegister = async (id: number) => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axiosInstance.post('/signup/create', { userId: userId, eventId: id }); // Make sure currentUserId is available
      if (response.status === 201) {
        alert('Successfully registered for the event!');
      } else {
        setError('Failed to register for the event.');
      }
    } catch (error) {
      setError('Failed to register for the event.');
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
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <div className="button-group">
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
              <button onClick={() => handleRegister(event.id)}>Register</button>
            </div>
          </li>
        ))}
      </ul>

      {editingEvent && (
        <div className="edit-form">
          <h2>Edit Event</h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Title:</label>
              <input type="text" name="title" value={editingEvent.title} onChange={handleChange} required />
            </div>
            <div>
              <label>Description:</label>
              <textarea name="description" value={editingEvent.description} onChange={handleChange} required />
            </div>
            <div>
              <label>Date:</label>
              <input type="date" name="date" value={editingEvent.date.split('T')[0]} onChange={handleChange} required />
            </div>
            <div className="button-group">
              <button type="submit" className="update-button">Update</button>
              <button type="button" className="cancel-button" onClick={() => setEditingEvent(null)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventList;
