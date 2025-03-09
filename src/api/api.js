import axios from 'axios';

export const BASE_URL = 'http://localhost:8000';
export const API_BASE_URL =`${BASE_URL}/api`; 

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Intercepteur pour ajouter un token d'authentification (optionnel)
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Récupère le token depuis le stockage local
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default api;
