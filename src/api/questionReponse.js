import api from './api';

export const addQuestion = async (data) => {
    try {
      const response = await api.post('/questions', data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la question :', error);
      throw error;
    }
  };

  export const addReponse = async (data) => {
    try {
      const response = await api.post('/reponses', data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la question :', error);
      throw error;
    }
  };