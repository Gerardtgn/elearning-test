import api from './api';
import api_upload from './upload';
// Obtenir les statistiques de l'utilisateur courant
export const getStatistiques = async () => {

    try {
        const response = await api.get(
             '/statistiques'
            ); 
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données: ", error);
        throw error;
    }
};