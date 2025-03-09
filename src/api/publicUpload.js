import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Remplace par ton URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

// Ajouter un nouvel utilisateur
export const addUser = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur", error);
        throw error;
    }
};