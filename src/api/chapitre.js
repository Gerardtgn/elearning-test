import api from "./api";

// Fonction pour récupérer tous les chapitres
export const getChapitres = async () => {
  try {
    const response = await api.get('/chapitres');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des chapitres:', error);
    throw error;
  }
};

// Fonction pour récupérer un chapitre par ID
export const getChapitreByUid = async (uid) => {
  try {
    const response = await api.get(`/chapitres/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du chapitre avec l'ID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour créer un nouveau chapitre
export const addChapitre = async (chapitreData) => {
  try {
    const response = await api.post('/chapitres', chapitreData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du chapitre:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un chapitre existant
export const updateChapitre = async (uid, chapitreData) => {
  try {
    const response = await api.put(`chapitres/${uid}`, chapitreData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du chapitre avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un chapitre
export const deleteChapitre = async (uid) => {
  try {
    const response = await api.delete(`chapitres/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du chapitre avec l'UID ${uid}:`, error);
    throw error;
  }
};