import axios from 'axios';

const API_URL = 'http://127.0.0.1:3001/api'; // Certifique-se de que a URL está correta

// Funções de notas
export const getNotes = async () => {
    const response = await axios.get(`${API_URL}/notes`);
    return response.data;
};

export const getNoteById = async (id) => {
    const response = await axios.get(`${API_URL}/notes/${id}`);
    return response.data;
};

export const createNote = async (note, token) => {
    const response = await axios.post(`${API_URL}/create`, note, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
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

// Funções de usuário
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
};

export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
