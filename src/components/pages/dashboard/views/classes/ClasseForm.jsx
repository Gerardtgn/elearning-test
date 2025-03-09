import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import { updateClasse } from '../../../../../api/classe';
import { addClasse } from '../../../../../api/classe';
import { getLevels } from '../../../../../api/level';
import Swal from 'sweetalert2';

export const ClasseForm = ({ classe, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    nom: '',
    level_id: ''
  });
  const [niveaux, setNiveaux] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingNiveaux, setLoadingNiveaux] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const isEditMode = !!classe;

  useEffect(() => {
    // Charger les niveaux disponibles depuis l'API
    fetchNiveaux();
    
    // Si en mode édition, remplir le formulaire avec les données existantes
    if (classe) {
      setFormData({
        nom: classe.nom,
        level_id: classe.level.id
      });
    }
  }, [classe]);

  const fetchNiveaux = async () => {
    setLoadingNiveaux(true);
    try {
      const response = await getLevels();
      if (response) {
        setNiveaux(response);
      }
    } catch (err) {
      setError('Erreur lors du chargement des niveaux');
      console.error('Erreur lors du chargement des niveaux:', err);
    } finally {
      setLoadingNiveaux(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (isEditMode) {
        // Mode édition
        await updateClasse(classe.uid, formData);
      } else {
        // Mode ajout
        console.log(formData);
        await addClasse(formData);
      }
      onSave();
    } catch (err) {
      setError(
        err.response?.data?.message || 
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de la classe`
      );
      console.error(`Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de la classe:`, err);
      Swal.fire(
        'Erreur !',
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de la classe.`,
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {isEditMode ? 'Modifier la classe' : 'Ajouter une nouvelle classe'}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom de la classe
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="6ème A, Terminale C, CM2, etc."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="level_id" className="block text-sm font-medium text-gray-700 mb-1">
            Niveau
          </label>
          <select
            id="level_id"
            name="level_id"
            required
            value={formData.level_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            disabled={loadingNiveaux}
          >
            <option value="">Sélectionnez un niveau</option>
            {niveaux.map((niveau) => (
              <option key={niveau.id} value={niveau.id}>
                {niveau.nom}
              </option>
            ))}
          </select>
          {loadingNiveaux && (
            <div className="mt-1 text-sm text-gray-500">Chargement des niveaux...</div>
          )}
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 flex items-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement...
              </>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                {isEditMode ? 'Enregistrer' : 'Ajouter'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};