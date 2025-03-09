import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader, Check, ArrowLeft, BadgeCheck } from 'lucide-react';
import { getOffresClasse } from '../../api/offreClasse';
import { pay } from '../../api/payment';


const AbonnementPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  
  const fetchClassSubscriptions = async () => {
    try {
       const response = await getOffresClasse();
       return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des abonnements', error);
      throw error;
    }
  };

  useEffect(() => {
    const getOffers = async () => {
      try {
        setLoading(true);
        const data = await fetchClassSubscriptions();
        setOffers(data);
        setLoading(false);
      } catch (err) {
        setError('Impossible de récupérer les offres d\'abonnement');
        setLoading(false);
      }
    };

    getOffers();
  }, []);

  const handleSubscribe = async (offer) => {
    setLoading(true);
    try {
      const data = {
          'amount' : offer.montant,
          'offre' : offer.id
      };
      const response = await pay(data);
      window.location.href = response.url;
      //window.location.href = response.redirect_url;
      //console.log(response.url);
      
    } catch (error) {
      console.error('Erreur lors de la souscription', error);
      setError('Une erreur est survenue lors de la souscription');
      setLoading(false);
    }
  };

  const returnToPendingPage = () => {
    window.location.href = '/pending-page';
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(price);
  };

  if (loading && offers.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-12 h-12 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader className="w-12 h-12 animate-spin text-indigo-600" />
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <button 
            onClick={returnToPendingPage}
            className="inline-flex items-center mr-4 text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Retour
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Choisir un abonnement</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Bienvenue, {user?.nom} {user?.prenom}</h2>
          <p className="text-gray-600 mb-4">
            Veuillez choisir l'offre d'abonnement qui vous convient pour accéder à tous nos cours et ressources.
          </p>
        </div>

        {offers.length === 0 && !loading ? (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-gray-600">Aucune offre d'abonnement n'est disponible pour votre classe pour le moment.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-800">{offer.offre.nom}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900">{formatPrice(offer.montant)}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">/{offer.offre.duree} mois</span>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-6">
                  <ul className="space-y-3">
                    {offer.avantages && offer.avantages.split(',').map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{advantage.trim()}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button
                      onClick={() => handleSubscribe(offer)}
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <BadgeCheck className="w-5 h-5 mr-2" />
                      Je prends cette offre
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AbonnementPage;