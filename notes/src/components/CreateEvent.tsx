import React, { useState } from 'react';
import axios from 'axios';
import '../css/EventForm.css';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/events/criar', { title, description, date });
      console.log(response.data); // Lida com a resposta do backend
      navigate('/events'); // Redireciona para a página de eventos
    } catch (error) {
      setError('Failed to create event. Please try again.');
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Criação de evento</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Descrição:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Data do evento:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Criar evento</button>
    </form>
  );
};

export default CreateEvent;
