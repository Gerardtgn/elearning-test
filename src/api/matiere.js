import api from "./api";

// Fonction pour récupérer toutes les matières
export const getMatieres = async () => {
  try {
    const response = await api.get('/matieres');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des matières:', error);
    throw error;
  }
};

// Fonction pour récupérer une matière
export const getMatiereByUid = async (uid) => {
  try {
    const response = await api.get(`/matieres/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la matière avec l'ID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour créer une nouvelle 
export const addMatiere = async (matiereData) => {
  try {
    const response = await api.post('/matieres', matiereData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la matière:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un niveau existant
export const updateMatiere = async (uid, matiereData) => {
  try {
    const response = await api.put(`/matieres/${uid}`, matiereData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la matière avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un niveau
export const deleteMatiere = async (uid) => {
  try {
    const response = await api.delete(`matieres/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la matière avec l'UID ${uid}:`, error);
    throw error;
  }
};