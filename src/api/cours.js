import api from './api';
import api_upload from './upload';


export const getCourses = async () => {
  try {
    const response = await api.get('/get-courses');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des cours:', error);
    throw error;
  }
};

export const getCoursByUid = async (uid) => {
    try {
      const response = await api.get(`get-courseDetail/${uid}`);
      return response.data[0];
    } catch (error) {
      console.error(`Erreur lors de la récupération du cours avec l'UID ${uid}:`, error);
      throw error;
    }
  };

  export const addCours = async (data) => {
    try {
      const response = await api_upload.post('/store-courses', data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\enregistrement:', error);
      throw error;
    }
  };