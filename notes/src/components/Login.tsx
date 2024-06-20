// src/components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import '../css/AuthForm.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { username, password });
      const { token, userId } = response.data;
      if (token && userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        navigate('/events'); // Redirect to a protected route
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
