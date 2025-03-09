import React, { useState } from 'react';
import axios from 'axios';
import { Loader, AlertCircle, BookOpen, CheckCircle } from 'lucide-react';

const PendingPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:8000/api/logout', { user }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
      setLoading(false);
    }
  };

  const redirectToSubscription = () => {
    window.location.href = '/abonnement';
  };

  // Vérifier si l'utilisateur est un enseignant
  const isTeacher = user?.profile === 'enseignant';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader className="w-12 h-12 animate-spin text-indigo-600" />
        </div>
      )}
      
      <div className="w-full max-w-md p-8 m-4 bg-white rounded-lg shadow-lg">
        {isTeacher ? (
          // Interface pour les enseignants
          <div className="space-y-6 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full">
              <AlertCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Compte en attente d'activation</h2>
            <div className="space-y-4 text-gray-600">
              <p>Bonjour cher enseignant,</p>
              <p>Votre compte est actuellement en cours de vérification par notre équipe administrative.</p>
              <p>Vous recevrez un email dès que votre compte sera activé.</p>
              <div className="pt-4">
                <button 
                  onClick={handleLogout}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Interface pour les apprenants
          <div className="space-y-6 text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full">
              <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Abonnement requis</h2>
            <div className="space-y-4 text-gray-600">
              <p>Bonjour cher apprenant,</p>
              <p>Vous n'avez pas d'abonnement actif sur notre plateforme.</p>
              <p>Pour accéder à tous nos cours et ressources pédagogiques, veuillez souscrire à un abonnement adapté à votre niveau.</p>
              <div className="pt-4 space-y-3">
                <button 
                  onClick={redirectToSubscription}
                  className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Prendre un abonnement
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition duration-200"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingPage;