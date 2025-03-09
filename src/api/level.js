import api from "./api";

// Fonction pour récupérer tous les niveaux
  export const getLevels = async () => {
    try {
      const response = await api.get('/levels');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des niveaux:', error);
      throw error;
    }
  };

// Fonction pour récupérer un niveau par ID
export const getLevelByUid = async (uid) => {
  try {
    const response = await api.get(`/levels/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du niveau avec l'ID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour créer un nouveau niveau
export const addLevel = async (levelData) => {
  try {
    const response = await api.post('/levels', levelData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du niveau:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un niveau existant
export const updateLevel = async (uid, levelData) => {
  try {
    const response = await api.put(`/levels/${uid}`, levelData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du niveau avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un niveau
export const deleteLevel = async (uid) => {
  try {
    const response = await api.delete(`levels/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du niveau avec l'UID ${uid}:`, error);
    throw error;
  }
};