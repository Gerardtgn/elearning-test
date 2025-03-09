import api from "./api";

// Fonction pour récupérer toutes les écoles
  export const getEcoles = async () => {
    try {
      const response = await api.get('/ecoles');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des écoles:', error);
      throw error;
    }
  };

// Fonction pour récupérer une école par UID
export const getEcoleByUid = async (uid) => {
  try {
    const response = await api.get(`/ecoles/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de l\école avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour créer une nouvelle école
export const addEcole = async (data) => {
  try {
    const response = await api.post('/ecoles', data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'école:', error);
    throw error;
  }
};

// Fonction pour mettre à jour une école existante
export const updateEcole = async (uid, data) => {
  try {
    const response = await api.put(`/ecoles/${uid}`, data);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'école avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour supprimer une école
export const deleteEcole = async (uid) => {
  try {
    const response = await api.delete(`ecoles/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'école avec l'UID ${uid}:`, error);
    throw error;
  }
};