import api from './api';

export const pay = async (data) => {
    try {
        console.log(data);
      const response = await api.post("/pay", data );
      return response.data;
      //window.location.href = response.data.url; // Redirige vers la page de paiement
    } catch (error) {
      console.log("Erreur de paiement:", error);
      //alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };