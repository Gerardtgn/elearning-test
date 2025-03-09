import api from './api';
import api_upload from './upload';
// Obtenir les TD en fonction du type
export const getTD = async (type, profile_id) => {
    const data = {
        'type' : type,
        'profile_id': profile_id
    };
    try {
        const response = await api.post(
             '/getTD',
             data
            ); 
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données: ", error);
        throw error;
    }
};

//Enregistrer un td en fonction du type

export const addTD = async (data) => {
    try {
      const response = await api_upload.post('/td', data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de données:', error);
      throw error;
    }
  };