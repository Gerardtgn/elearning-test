import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Plus, Loader } from 'lucide-react';
import Swal from 'sweetalert2';
import { getLevels, deleteLevel } from '../../../../../api/level';
import {LevelForm} from './LevelForm';

const Level = () => {
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);

  useEffect(() => {
    fetchLevels();
  }, []);

  // Fonction pour récupérer les niveaux depuis l'API
  const fetchLevels = async () => {
    setLoading(true);
    try {
      const response = await getLevels();
      setLevels(response || []);
      setError(null);
    } catch (err) {
      setError('Erreur lors de la récupération des niveaux');
      console.error('Erreur lors de la récupération des niveaux:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour supprimer un niveau
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
        await deleteLevel(uid);
        fetchLevels(); // Rafraîchir la liste après suppression
        Swal.fire('Succès !', 'Niveau supprimé avec succès.', 'success');
      } catch (err) {
        setError('Erreur lors de la suppression du niveau');
        console.error('Erreur lors de la suppression du niveau:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Fonction pour ouvrir le formulaire en mode édition
  const handleEdit = (level) => {
    setCurrentLevel(level);
    setIsFormOpen(true);
  };

  // Fonction pour ouvrir le formulaire en mode ajout
  const handleAdd = () => {
    setCurrentLevel(null);
    setIsFormOpen(true);
  };

  // Fonction pour fermer le formulaire
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCurrentLevel(null);
  };

  // Fonction appelée après un ajout ou une modification réussie
  const handleLevelSaved = () => {
    fetchLevels();
    setIsFormOpen(false);
    setCurrentLevel(null);
    Swal.fire('Succès !', 'Action effectuée avec succès.', 'success');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gestion des niveaux</h2>
        <button
          onClick={handleAdd}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-pink-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Ajouter un niveau
        </button>
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

      {!loading && levels && levels.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Aucun niveau trouvé. Cliquez sur "Ajouter un niveau" pour en créer un.
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {levels.map((level, index) => (
                <tr key={level.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {level.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEdit(level)}
                        className="text-pink-600 hover:text-pink-900"
                        title="Modifier"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(level.uid)}
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
            <LevelForm
              level={currentLevel}
              onSave={handleLevelSaved}
              onCancel={handleCloseForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Level;