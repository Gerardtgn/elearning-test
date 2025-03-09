import api from './api';

// Fonction pour récupérer toutes les classes
export const getClasses = async () => {
  try {
    const response = await api.get('/classes');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des classes:', error);
    throw error;
  }
};

// Fonction pour récupérer une classe par ID
export const getClasseByUid = async (uid) => {
  try {
    const response = await api.get(`classes/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la classe avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour créer une nouvelle classe
export const addClasse = async (classeData) => {
  try {
    const response = await api.post('/classes', classeData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la classe:', error);
    throw error;
  }
};

// Fonction pour mettre à jour une classe existante
export const updateClasse = async (uid, classeData) => {
  try {
    const response = await api.put(`/classes/${uid}`, classeData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la classe avec l'UID ${uid}:`, error);
    throw error;
  }
};

// Fonction pour supprimer une classe
export const deleteClasse = async (uid) => {
  try {
    const response = await api.delete(`classes/${uid}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la classe avec l'UID ${uid}:`, error);
    throw error;
  }
};