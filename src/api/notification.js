import api from "./api";

// Fonction pour récupérer tous les chapitres
export const getNotifications = async () => {
  try {
    const response = await api.get('/get-notifications');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};