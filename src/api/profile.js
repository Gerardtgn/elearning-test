import api from './api';

// Obtenir la liste des profiles
export const getProfiles = async () => {
    try {
        const response = await api.get('/profiles');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des profiles: ", error);
        throw error;
    }
};
//Ajouter un profile 
    export const addProfile = async (profileData) => {
        try {
            const response = await api.post('/profiles', profileData);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout du profil:", error);
            throw error;
        }
    };
//Mettre à jour un profile
export const updateProfile = async (profileUid, profileData) => {
    try {
        const response = await api.put(`/profiles/${profileUid}`, profileData);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la modification du profil ${profileUid}: `, error);
        throw error;
    }
};


//Supprimmer un profile
export const deleteProfile = async (profileUid) => {
    try {
        const response = await api.delete(`/profiles/${profileUid}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la suppression du profil ${profileUid}: `, error);
        throw error;
    }
};