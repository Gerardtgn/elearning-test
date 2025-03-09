import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Plus, Loader } from 'lucide-react';
import { OffreClasseForm } from './OffreClasseForm';
import { getOffresClasses, deleteOffresClasse } from '../../../../../api/offreClasse';
import Swal from 'sweetalert2';

const OffreClasse = () => {
  const [offresClasses, setOffresClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentOffresClasse, setCurrentOffresClasse] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchOffresClasses();
  }, []);

  // Fonction pour récupérer les offres depuis l'API
  const fetchOffresClasses = async () => {
    setLoading(true);
    try {
      const response = await getOffresClasses();
      if(response){
        //setOffresClasses(response);
        setOffresClasses(Array.isArray(response) ? response : []);
      }
      setError(null);
    } catch (err) {
      setError('Erreur lors de la récupération des données');
      console.error('Erreur lors de la récupération des associations offre-classe:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour supprimer une association offre-classe
  const handleDelete = async (uid) => {
    const result = await Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: "Cette action est irréversible !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Oui, supprimer',
        cancelButtonText: 'Annuler'
    });
    
    if (result.isConfirmed) {
      setLoading(true);
      try {
        await deleteOffresClasse(uid);
        fetchOffresClasses(); // Rafraîchir la liste après suppression
        //alerte de succès
        Swal.fire(
            'Supprimé !',
            'L\'association offre-classe a été supprimée avec succès.',
            'success'
        );
      } catch (err) {
        setError('Erreur lors de la suppression de l\'association offre-classe');
        Swal.fire(
            'Erreur !',
            'Une erreur est survenue lors de la suppression.',
            'error'
        );
      } finally {
        setLoading(false);
      }
    }
  };

  // Fonction pour ouvrir le formulaire en mode édition
  const handleEdit = (offresClasse) => {
    setCurrentOffresClasse(offresClasse);
    setIsFormOpen(true);
  };

  // Fonction pour ouvrir le formulaire en mode ajout
  const handleAdd = () => {
    setCurrentOffresClasse(null);
    setIsFormOpen(true);
  };

  // Fonction pour fermer le formulaire
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCurrentOffresClasse(null);
  };

  // Fonction appelée après un ajout ou une modification réussie
  const handleOffresClasseSaved = () => {
    fetchOffresClasses();
    setIsFormOpen(false);
    setCurrentOffresClasse(null);
    Swal.fire(
        'Succès !',
        'Action effectuée avec succès.',
        'success'
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gestion des associations Offre-Classe</h2>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Ajouter une association
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-8">
          <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      )}

      {!loading && offresClasses && offresClasses.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Aucune association offre-classe trouvée. Cliquez sur "Ajouter une association" pour en créer une.
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
                  Classe
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Offre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {offresClasses?.map((offresClasse, index) => (
                <tr key={offresClasse.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {offresClasse.classe.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {offresClasse.offre.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {offresClasse.montant.toLocaleString()} FCFA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEdit(offresClasse)}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Modifier"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(offresClasse.uid)}
                        className="text-red-600 hover:text-red-900"
                        title="Supprimer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <OffreClasseForm
              offresClasse={currentOffresClasse}
              onSave={handleOffresClasseSaved}
              onCancel={handleCloseForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OffreClasse;