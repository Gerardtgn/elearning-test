import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import { updateEcole } from '../../../../../api/ecole';
import { addEcole } from '../../../../../api/ecole';
import Swal from 'sweetalert2';

export const EcoleForm = ({ ecole, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    telephone: '',
    email: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const isEditMode = !!ecole;

  useEffect(() => {
    if (ecole) {
      setFormData({
        nom: ecole.nom || '',
        adresse: ecole.adresse || '',
        telephone: ecole.telephone || '',
        email: ecole.email || '',
        description: ecole.description || ''
      });
    }
  }, [ecole]);

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
        await updateEcole(ecole.uid, formData);
      } else {
        // Mode ajout
        await addEcole(formData);
      }
      onSave();
    } catch (err) {
      setError(
        err.response?.data?.message || 
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'école`
      );
      console.error(`Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'école:`, err);
      Swal.fire(
        'Erreur !',
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} de l'école.`,
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
          {isEditMode ? 'Modifier l\'école' : 'Ajouter une nouvelle école'}
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
            Nom de l'école
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Nom de l'école"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse
          </label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            required
            value={formData.adresse}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Adresse de l'école"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Numéro de téléphone"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Adresse email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Description de l'école (optionnel)"
          ></textarea>
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