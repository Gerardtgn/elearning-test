import api from './api';
const user = JSON.parse(localStorage.getItem('user'));
// Obtenir la liste des utilisateurs
export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        throw error;
    }
};

// Ajouter un nouvel utilisateur
export const createUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur", error);
        throw error;
    }
};

export const getUserMatieres = async()=>{
    try {
        const response = await api.get('/getUserMatieres');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur", error);
        throw error;
    }
};

//deconnexion d'un utilisateur 
export const handleLogout = async () => {
    
    try {
      await api.post('/logout', { user }); 

      localStorage.removeItem('token');
      localStorage.removeItem('user');

      window.location.href = '/login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
      
    }
  };
