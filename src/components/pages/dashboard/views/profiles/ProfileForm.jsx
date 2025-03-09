import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import axios from 'axios';
import { updateProfile } from '../../../../../api/profile';
import { addProfile } from '../../../../../api/profile';
import { p } from 'framer-motion/client';
import Swal from 'sweetalert2';


export const ProfileForm = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    nom: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const isEditMode = !!profile;

  useEffect(() => {
    if (profile) {
      setFormData({
        nom: profile.nom
      });
    }
  }, [profile]);

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
        await updateProfile(profile.uid, formData);
      } else {
        // Mode ajout
        await addProfile(formData);
      }
      onSave();
    } catch (err) {
      setError(
        err.response?.data?.message || 
        `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} du profil`
      );
      console.error(`Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} du profil:`, err);
       Swal.fire(
                  'Erreur !',
                  `Erreur lors de ${isEditMode ? 'la modification' : 'l\'ajout'} du profil:`, err,
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
          {isEditMode ? 'Modifier le profil' : 'Ajouter un nouveau profil'}
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
            Nom du profil
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enseignant, Apprenant, Admin, etc."
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