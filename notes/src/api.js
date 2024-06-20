import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:3001/api'; // Ensure this is your correct API URL

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true // Enable sending cookies with requests
});

// Interceptor to add the token to headers of all requests
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getNotes = async () => {
  const response = await api.get('/notes');
  return response.data;
};

export const getNoteById = async (id) => {
  const response = await api.get(`/notes/${id}`);
  return response.data;
};

export const createNote = async (note) => {
  const response = await api.post('/create', note);
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await api.put(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  console.log(`API call to delete note with id: ${id}`);
  await api.delete(`/delete/${id}`);
};

export const registerUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post('/users/login', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

export default api;
