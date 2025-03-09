import api from './api';

// Obtenir la liste des offres
export const getOffres = async () => {
    try {
        const response = await api.get('/offres');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données: ", error);
        throw error;
    }
};
//Ajouter une offre 
    export const addOffre = async (data) => {
        try {
            const response = await api.post('/offres', data);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout de lòffre:", error);
            throw error;
        }
    };
//Mettre à jour une offre
export const updateOffre = async (OffreUid, data) => {
    try {
        const response = await api.put(`/offres/${OffreUid}`, data);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification de l'offre de UID ${OffreUid}: `, error);
        throw error;
    }
};


//Supprimmer une offre
export const deleteOffre = async (offreUid) => {
    try {
        const response = await api.delete(`/offres/${offreUid}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la suppression du l'offre ${offreUid}: `, error);
        throw error;
    }
};