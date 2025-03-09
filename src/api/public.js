import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Remplace par ton URL

const api_public = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});



//classes
export const getClasses = async () => {
    try {
      const response = await api_public.get('/get-classes');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des classes:', error);
      throw error;
    }
  };
  

  //chapitre
  export const getChapitres = async () => {
    try {
      const response = await api_public.get('/get-chapitres');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des chapitres:', error);
      throw error;
    }
  };

  //levels
  export const getLevels = async () => {
    try {
      const response = await api_public.get('/get-levels');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des niveaux:', error);
      throw error;
    }
  };
  
  export const getUsers = async () => {
    try {
        const response = await api_public.get('/user');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        throw error;
    }
};

// Fonction pour récupérer toutes les matières
export const getMatieres = async () => {
    try {
      const response = await api_public.get('/get-matieres');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des matières:', error);
      throw error;
    }
  };

  // Obtenir la liste des profiles
export const getProfiles = async () => {
    try {
        const response = await api_public.get('/get-roles');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des profiles: ", error);
        throw error;
    }
};

//Recuperer les cours
export const getCourses = async (all) => {

  try {
    const data = {
      'all':all
    };
      const response = await api_public.post('/getFrontCourses', data);
      return response.data;
  } catch (error) {
      console.error("Erreur lors de la récupération des données: ", error);
      throw error;
  }
};

//Recuperer les écoles
export const getEcoles = async () => {
  try {
    const response = await api_public.get('/get-ecoles');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des écoles:', error);
    throw error;
  }
};


