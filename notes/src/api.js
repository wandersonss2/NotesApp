// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Certifique-se de que a URL está correta

export const getNotes = async () => {
    const response = await axios.get(`${API_URL}/notes`);
    return response.data;
};

export const getNoteById = async (id) => {
    const response = await axios.get(`${API_URL}/notes/${id}`);
    return response.data;
};

export const createNote = async (note) => {
    const response = await axios.post(`${API_URL}/create`, note);
    return response.data;
};

export const updateNote = async (id, note) => {
    const response = await axios.put(`${API_URL}/notes/${id}`, note);
    return response.data;
};

export const deleteNote = async (id) => {
    console.log(`API call to delete note with id: ${id}`); // Log do ID na chamada da API
    await axios.delete(`${API_URL}/delete/${id}`); // Certifique-se de que o ID está sendo passado corretamente
};
