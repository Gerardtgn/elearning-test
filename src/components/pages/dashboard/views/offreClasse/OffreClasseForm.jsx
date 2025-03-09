import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import { updateOffresClasse, addOffresClasse } from '../../../../../api/offreClasse';
import Swal from 'sweetalert2';
import { getOffres } from '../../../../../api/offre';
import { getClasses } from '../../../../../api/classe';

export const OffreClasseForm = ({ offresClasse, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    classe_id: '',
    offre_id: '',
    montant: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const isEditMode = !!offresClasse;
  const [offres, setOffres] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchOffres();
    fetchClasses();
  }, []);

  useEffect(() => {
    if (offresClasse) {
      setFormData({
        classe_id: offresClasse.classe_id,
        offre_id: offresClasse.offre_id,
        montant: offresClasse.montant
      });
    }
  }, [offresClasse]);

  const fetchOffres = async () => {
    setLoading(true);
    try {
      const response = await getOffres();
      if (response) {
        setOffres(response);
      }
      setError(null);
    } catch (err) {
      setError('Erreur lors de la récupération des offres');
      console.error('Erreur lors de la récupération des offres:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await getClasses();
      if (response) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Convertir le montant en nombre si nécessaire
    const processedValue = name === 'montant' ? parseInt(value, 10) || 0 : value;
    
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
        
        await updateOffresClasse(offresClasse.uid, formData);
      } else {
        // Mode ajout
        
        await addOffresClasse(formData);
      }
      onSave();
    } catch (err) {
      setError(
        err.response?.data?.message || 
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'association offre-classe`
      );
      console.error(`Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'association offre-classe:`, err);
      Swal.fire(
        'Erreur !',
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'association offre-classe`,
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  // Vérifier si les données pour le formulaire sont chargées
  if (loading && offres.length === 0 && classes.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {isEditMode ? 'Modifier l\'association offre-classe' : 'Ajouter une nouvelle association offre-classe'}
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
          <label htmlFor="classe_id" className="block text-sm font-medium text-gray-700 mb-1">
            Classe
          </label>
          <select
            id="classe_id"
            name="classe_id"
            required
            value={formData.classe_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Sélectionner une classe</option>
            {classes.map(classe => (
              <option key={classe.uid} value={classe.id}>
                {classe.nom}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="offre_id" className="block text-sm font-medium text-gray-700 mb-1">
            Offre
          </label>
          <select
            id="offre_id"
            name="offre_id"
            required
            value={formData.offre_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Sélectionner une offre</option>
            {offres.map(offre => (
              <option key={offre.uid} value={offre.id}>
                {offre.nom}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="montant" className="block text-sm font-medium text-gray-700 mb-1">
            Montant (FCFA)
          </label>
          <input
            type="number"
            id="montant"
            name="montant"
            required
            min="0"
            value={formData.montant}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="100000"
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