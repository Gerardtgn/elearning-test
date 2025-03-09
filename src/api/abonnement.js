import api from "./api";

// Fonction pour récupérer les abonnements
export const getAbonnements = async () => {
  try {
    const response = await api.get('/abonnements');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des abonnements:', error);
    throw error;
  }
};