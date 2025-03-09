import api from './api';
//Recuperer toutes les offres des classes
export const getOffresClasses = async () => {
    try {
      const response = await api.get('/offre-classe');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      throw error;
    }
  };
  //ajouter des matieres à des classes 
  export const addOffresClasse = async (data) => {
      try {
          const response = await api.post('/offre-classe', data);
          return response.data;
      } catch (error) {
          console.error("Erreur lors de l'ajout des données:", error);
          throw error;
      }
  };

  export const updateOffresClasse = async (OffreUid, data) => {
    try {
        const response = await api.put(`/offre-classe/${OffreUid}`, data);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification de l'offre de la classe de UID ${OffreUid}: `, error);
        throw error;
    }
};


//Supprimmer une offre
export const deleteOffresClasse = async (offreUid) => {
    try {
        const response = await api.delete(`/offre-classe/${offreUid}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la suppression du l'offre ${offreUid}: `, error);
        throw error;
    }
};

//Recuperer les offres de la classe d'un apprenant
export const getOffresClasse = async () => {
    try {
      const response = await api.get('/offre-student-classe');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      throw error;
    }
  };