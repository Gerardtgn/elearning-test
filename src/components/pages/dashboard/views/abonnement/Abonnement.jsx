import React, { useState, useEffect } from 'react';
import { Download, Loader, Search } from 'lucide-react';
import Swal from 'sweetalert2';
import { getAbonnements } from '../../../../../api/abonnement';

const Abonnement = () => {
  const [abonnements, setAbonnements] = useState([]);
  const [filteredAbonnements, setFilteredAbonnements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAbonnements();
  }, []);

  // Effet pour filtrer les abonnements lorsque le terme de recherche change
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredAbonnements(abonnements);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = abonnements.filter((abonnement) => {
      return (
        abonnement.user.nom.toLowerCase().includes(lowercasedSearch) ||
        abonnement.user.prenom.toLowerCase().includes(lowercasedSearch) ||
        abonnement.user.ecole.nom.toLowerCase().includes(lowercasedSearch) ||
        abonnement.offres_classe.offre.nom.toLowerCase().includes(lowercasedSearch)
      );
    });

    setFilteredAbonnements(filtered);
  }, [searchTerm, abonnements]);

  // Fonction pour récupérer les abonnements depuis l'API
  const fetchAbonnements = async () => {
    setLoading(true);
    try {
      const response = await getAbonnements();
      setAbonnements(response || []);
      setFilteredAbonnements(response || []);
      setError(null);
    } catch (err) {
      setError('Erreur lors de la récupération des abonnements');
      console.error('Erreur lors de la récupération des abonnements:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour télécharger la facture
  const handleDownloadInvoice = (factureUrl) => {
    if (!factureUrl) {
      Swal.fire('Erreur', 'Aucune facture disponible pour cet abonnement', 'error');
      return;
    }
    
    // Crée un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = factureUrl;
    link.setAttribute('download', 'facture.pdf'); // Nom par défaut (peut être modifié)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  };

  // Fonction pour gérer le changement dans la barre de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gestion des abonnements</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-8">
          <Loader className="w-8 h-8 text-pink-600 animate-spin" />
        </div>
      )}

      {!loading && filteredAbonnements.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {searchTerm ? 'Aucun résultat trouvé pour votre recherche.' : 'Aucun abonnement trouvé.'}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prénom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  École
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Abonnement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date début
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date fin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAbonnements.map((abonnement, index) => (
                <tr key={abonnement.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {abonnement.user.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {abonnement.user.prenom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {abonnement.user.ecole.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {abonnement.offres_classe.offre.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(abonnement.created_at)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(abonnement.fin_abonnement)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${abonnement.statut ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {abonnement.statut ? 'Actif' : 'Expiré'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleDownloadInvoice(abonnement.facture)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Télécharger la facture"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Abonnement;