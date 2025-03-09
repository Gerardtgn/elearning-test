import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import { updateOffre, addOffre } from '../../../../../api/offre';
import Swal from 'sweetalert2';

export const OffreForm = ({ offre, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    nom: '',
    duree: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const isEditMode = !!offre;

  useEffect(() => {
    if (offre) {
      setFormData({
        nom: offre.nom,
        duree: offre.duree
      });
    }
  }, [offre]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convertir la durée en nombre si nécessaire
    const processedValue = name === 'duree' ? parseInt(value, 10) || 0 : value;
    
    setFormData({
      ...formData,
      [name]: processedValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (isEditMode) {
        // Mode édition
        await updateOffre(offre.uid, formData);
      } else {
        // Mode ajout
        await addOffre(formData);
      }
      onSave();
    } catch (err) {
      setError(
        err.response?.data?.message || 
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'offre`
      );
      console.error(`Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'offre:`, err);
      Swal.fire(
        'Erreur !',
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'offre`,
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
          {isEditMode ? 'Modifier l\'offre' : 'Ajouter une nouvelle offre'}
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
            Nom de l'offre
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Mensuel, semestriel,  annuel, etc.."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duree" className="block text-sm font-medium text-gray-700 mb-1">
            Durée (mois)
          </label>
          <input
            type="number"
            id="duree"
            name="duree"
            required
            min="1"
            value={formData.duree}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="30"
          />
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