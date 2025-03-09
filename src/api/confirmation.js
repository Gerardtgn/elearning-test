import api from './api';
import api_uplad from './upload';

export const  acceptSupport = (data) =>{

    try{
        const response = api.post('/accept-support', data);
        return response.data

    }
    catch (error) {
        console.error('Erreur lors de la création du niveau:', error);
        throw error;
      }
}