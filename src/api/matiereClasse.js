import api from './api';


//Recuperer toutes les matières classes
export const getMatieresClasses = async () => {
  try {
    const response = await api.get('/matiere-classe');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};
//ajouter des matieres à des classes 
export const addMatiereClasse = async (data) => {
    try {
        const response = await api.post('/matiere-classe', data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout de la matieresclasse:", error);
        throw error;
    }
};