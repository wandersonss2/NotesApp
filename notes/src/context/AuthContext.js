import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser, getUserProfile } from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const profile = await getUserProfile(token);
          setUser(profile);
        } catch (error) {
          console.error('Failed to fetch profile', error);
          localStorage.removeItem('token');
          setToken('');
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    };
    fetchProfile();
  }, [token]);

  const handleLogin = async (email, password) => {
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setIsAuthenticated(true);
      const profile = await getUserProfile(data.token);
      setUser(profile);
    } catch (error) {
      console.error('Failed to login', error);
      throw new Error('Failed to login');
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const data = await registerUser({ name, email, password });
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setIsAuthenticated(true);
      const profile = await getUserProfile(data.token);
      setUser(profile);
    } catch (error) {
      console.error('Failed to register', error);
      throw new Error('Failed to register');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, token, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
