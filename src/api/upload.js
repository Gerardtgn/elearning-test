import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Remplace par ton URL

const api_upload = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

// Intercepteur pour ajouter un token d'authentification (optionnel)
api_upload.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Récupère le token depuis le stockage local
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default api_upload;
