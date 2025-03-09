import api from "./api";

// Fonction pour récupérer les chapitres enseignes
export const getChapitresEnseigne = async () => {
  try {
    const response = await api.get('/get-chapitresEnseignes');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des chapitres:', error);
    throw error;
  }
};  

export const addChapitresEnseigne = async (data) => {
    try {
        const response = await api.post('/chapitre-enseigne', data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout des données:", error);
        throw error;
    }
};