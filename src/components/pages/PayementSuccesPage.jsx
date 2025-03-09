import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckCircle, Home, BookOpen, FileText } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { BASE_URL } from '../../api/api';
const PaymentSuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [abonnement, setAbonnement] = useState(null);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const transactionId = queryParams.get("transaction");
    
    if (!transactionId) {
      setError('Paramètre de transaction manquant dans l\'URL');
      setLoading(false);
      return;
    }
    
    const checkSubscriptionStatus = async (transactionId) => {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/abonnement/statut`, 
          { transaction_id: transactionId }, 
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        // Enregistrer les données dans le state
        console.log("Données reçues:", response.data);
        setAbonnement(response.data[0]);
        setLoading(false);
        
        // Mettre à jour les informations de l'utilisateur en local storage
        try {
          const userResponse = await axios.get('http://localhost:8000/api/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          localStorage.setItem('user', JSON.stringify(userResponse.data));
        } catch (userErr) {
          console.error('Erreur lors de la récupération des données utilisateur', userErr);
          // On ne veut pas arrêter le processus si cette requête échoue
        }
        
      } catch (err) {
        console.error('Erreur lors de la vérification de l\'abonnement', err);
        setError('Impossible de vérifier le statut de votre abonnement');
        setLoading(false);
      }
    };
    
    checkSubscriptionStatus(transactionId);
  }, [token, location.search]);
  
  // Effet pour observer les changements d'abonnement (pour le debugging)
  useEffect(() => {
    if (abonnement) {
      console.log("Abonnement mis à jour:", abonnement);
    }
  }, [abonnement]);
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Date non disponible';
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };
  
  const redirectToDashboard = () => {
    window.location.href = '/dashboard';
  };
  
  const downloadInvoice = () => {
    if (abonnement && abonnement.facture) {
      window.open(`${BASE_URL}/storage/${abonnement.facture}`, '_blank');
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Une erreur est survenue</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.href = '/abonnement'}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Retour aux abonnements
          </button>
        </div>
      </div>
    );
  }
  
  // Si on arrive ici, c'est que loading est false et il n'y a pas d'erreur
  // Si abonnement est toujours null à ce stade, c'est qu'il y a un problème avec la réponse API
  if (!abonnement) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="text-yellow-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information manquante</h2>
          <p className="text-gray-600 mb-6">Les détails de votre abonnement n'ont pas pu être récupérés. Veuillez contacter le support.</p>
          <button
            onClick={() => window.location.href = '/dashboard'}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Accéder à mon espace
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="mt-5 text-center text-2xl font-extrabold text-gray-900">
            Paiement réussi !
          </h1>
          
          <p className="mt-2 text-center text-sm text-gray-600">
            Votre abonnement a été activé avec succès.
          </p>
          
          <div className="mt-8 space-y-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">Détails de l'abonnement</h3>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="text-gray-500">Offre</div>
                <div className="text-gray-900 font-medium">
                  {abonnement.offres_classe?.offre?.nom || 'Offre standard'}
                </div>
                
                <div className="text-gray-500">Date de début</div>
                <div className="text-gray-900">{formatDate(abonnement?.created_at)}</div>
                
                <div className="text-gray-500">Date de fin</div>
                <div className="text-gray-900">{formatDate(abonnement.fin_abonnement)}</div>
                
                <div className="text-gray-500">Montant</div>
                <div className="text-gray-900 font-medium">
                  {abonnement.montant 
                    ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(abonnement.montant)
                    : 'Non disponible'}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
            {abonnement.facture && (
              <button
                onClick={downloadInvoice}
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FileText className="mr-2 h-5 w-5" />
                Télécharger la facture
              </button>
            )}
            
            <button
              onClick={redirectToDashboard}
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Home className="mr-2 h-5 w-5" />
              Accéder à mon espace
            </button>
            
            <button
              onClick={() => window.location.href = '/dashboard/teacher/courses'}
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Découvrir les cours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;