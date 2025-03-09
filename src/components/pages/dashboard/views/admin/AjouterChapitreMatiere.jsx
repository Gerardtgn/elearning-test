import React, { useState, useEffect } from 'react';
import { getChapitres } from '../../../../../api/chapitre';
import { getMatieresClasses } from '../../../../../api/matiereClasse';
import { addChapitresEnseigne } from '../../../../../api/chapitresEnseigne';
import Swal from 'sweetalert2';
const AjouterChapitreMatiere = () => {
  useEffect(() => {
    fetchChapitres();
    fetchMatieresClasses();
  }, []);

  const [loading, setLoading] = useState(false);
  const [chapitres, setChapitres] = useState([]);
  const [matieresClasses, setMatieresClasses] = useState([]);
  const [selectedMatiereClasse, setSelectedMatiereClasse] = useState('');
  const [selectedChapitres, setSelectedChapitres] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchChapitres = async () => {
    setLoading(true);
    try {
      const response = await getChapitres();
      setChapitres(response || []);
    } catch (err) {
      console.error('erreur lors de la récupération des données ', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMatieresClasses = async () => {
    setLoading(true);
    try {
      const response = await getMatieresClasses();
      setMatieresClasses(response || []);
    } catch (err) {
      console.error('erreur lors de la récupération des données ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation de base
    if (!selectedMatiereClasse) {
      setErrorMessage('Veuillez sélectionner une matière de classe');
      return;
    }
    
    if (selectedChapitres.length === 0) {
      setErrorMessage('Veuillez sélectionner au moins un chapitre');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');
    setSubmitLoading(true);

    try {
      // Préparation des données pour l'API
      const data = {
        matiereClasseId: selectedMatiereClasse,
        chapitreIds: selectedChapitres
      };
      
      // Appel à l'API
      await addChapitresEnseigne(data);
      
      // Réinitialisation du formulaire après soumission réussie
      setSelectedMatiereClasse('');
      setSelectedChapitres([]);
      //setSuccessMessage('Les chapitres ont été ajoutés avec succès');
      Swal.fire(
        'Ajouté',
        'Les chapitres ont été ajouté avec succès.',
        'success'
    );

    } catch (err) {
      console.error('Erreur lors de l\'ajout des chapitres', err);
      //setErrorMessage('Une erreur est survenue lors de l\'ajout des chapitres');
       
      Swal.fire({
                title: 'Erreur !',
                text: 'Une erreur est survenue lors du chargement des chapitres.',
                icon: 'error',
                confirmButtonText: 'OK'
              });
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleChapitreChange = (e) => {
    // Conversion des valeurs sélectionnées en tableau
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedChapitres(values);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Ajouter des chapitres à une matière</h2>
        
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="matiereClasse" className="block text-sm font-medium text-gray-700 mb-2">
              Matière - Classe
            </label>
            <select
              id="matiereClasse"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={selectedMatiereClasse}
              onChange={(e) => setSelectedMatiereClasse(e.target.value)}
              disabled={submitLoading}
            >
              <option value="">-- Sélectionnez une matière --</option>
              {matieresClasses.map((matiereClasse) => (
                <option key={matiereClasse.id} value={matiereClasse.id}>
                  {matiereClasse.matiere.nom} - {matiereClasse.classe.nom}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="chapitres" className="block text-sm font-medium text-gray-700 mb-2">
              Chapitres (maintenez Ctrl pour sélectionner plusieurs)
            </label>
            <select
              id="chapitres"
              multiple
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-64"
              value={selectedChapitres}
              onChange={handleChapitreChange}
              disabled={submitLoading}
            >
              {chapitres.map((chapitre) => (
                <option key={chapitre.id} value={chapitre.id}>
                  {chapitre.nom}
                </option>
              ))}
            </select>
            <p className="mt-1 text-sm text-gray-500">
              Vous pouvez sélectionner plusieurs chapitres en maintenant la touche Ctrl (ou Cmd sur Mac)
            </p>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={submitLoading}
            >
              {submitLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement en cours...
                </span>
              ) : (
                'Ajouter les chapitres'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouterChapitreMatiere;