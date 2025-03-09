import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Plus, Loader } from 'lucide-react';
import { ClasseForm } from './ClasseForm';
import { getClasses } from '../../../../../api/classe';
import { deleteClasse } from '../../../../../api/classe';
import Swal from 'sweetalert2';

const Classe = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentClasse, setCurrentClasse] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchClasses();
  }, []);

  // Fonction pour récupérer les classes depuis l'API
  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await getClasses();
      if(response){
        setClasses(response);
      }
      setError(null);
    } catch (err) {
      setError('Erreur lors de la récupération des classes');
      console.error('Erreur lors de la récupération des classes:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour supprimer une classe
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
         await deleteClasse(uid);
        fetchClasses(); // Rafraîchir la liste après suppression
        //alerte de succès
        Swal.fire(
            'Supprimé !',
            'La classe a été supprimée avec succès.',
            'success'
        );
      } catch (err) {
        setError('Erreur lors de la suppression de la classe');
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
  const handleEdit = (classe) => {
    setCurrentClasse(classe);
    setIsFormOpen(true);
  };

  // Fonction pour ouvrir le formulaire en mode ajout
  const handleAdd = () => {
    setCurrentClasse(null);
    setIsFormOpen(true);
  };

  // Fonction pour fermer le formulaire
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCurrentClasse(null);
  };

  // Fonction appelée après un ajout ou une modification réussie
  const handleClasseSaved = () => {
    fetchClasses();
    setIsFormOpen(false);
    setCurrentClasse(null);
    Swal.fire(
        'Succès !',
        'Action effectuée avec succès.',
        'success'
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gestion des classes</h2>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Ajouter une classe
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

      {!loading && classes && classes.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Aucune classe trouvée. Cliquez sur "Ajouter une classe" pour en créer une.
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
                  Niveau
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {classes.map((classe, index) => (
                <tr key={classe.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {classe.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {classe.level.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEdit(classe)}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Modifier"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(classe.uid)}
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
            <ClasseForm
              classe={currentClasse}
              onSave={handleClasseSaved}
              onCancel={handleCloseForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Classe;