import React, { useState, useEffect } from 'react';
import { getClasses } from '../../../../../api/classe';
import { getMatieres } from '../../../../../api/matiere';
import { addMatiereClasse } from '../../../../../api/matiereClasse';

const AjouterMatiereClasse = () => {
  // États pour suivre les sélections et le statut
  const [classeSelectionnee, setClasseSelectionnee] = useState('');
  const [matieresSelectionnees, setMatieresSelectionnees] = useState([]);
  const [notification, setNotification] = useState({ visible: false, message: '', type: '' });
  const [classes, setClasses] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchClasses();
    fetchMatieres();
  }, []);

  // Récupération des classes
  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await getClasses();
      setClasses(response || []);
    } catch (err) {
      setError('Erreur lors de la récupération des classes');
      console.error('Erreur lors de la récupération des classes:', err);
    } finally {
      setLoading(false);
    }
  }

  // Récupération des matières
  const fetchMatieres = async () => {
    setLoading(true);
    try {
      const response = await getMatieres();
      setMatieres(response || []);
    } catch (err) {
      setError('Erreur lors de la récupération des matières');
      console.error('Erreur lors de la récupération des matières:', err);
    } finally {
      setLoading(false);
    }
  }

  // Gestion du changement de classe
  const handleClasseChange = (event) => {
    setClasseSelectionnee(event.target.value);
  };

  // Gestion du changement de matières
  const handleMatieresChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setMatieresSelectionnees(selectedOptions);
  };

  // Soumission du formulaire avec FormData
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!classeSelectionnee) {
      afficherNotification('Veuillez sélectionner une classe', 'error');
      return;
    }
    
    if (matieresSelectionnees.length === 0) {
      afficherNotification('Veuillez sélectionner au moins une matière', 'error');
      return;
    }

    setIsSubmitting(true);
    
    // Création du FormData
    const formData = new FormData();
    formData.append('classeId', classeSelectionnee);
    
    // Ajout des matières sélectionnées au FormData
    matieresSelectionnees.forEach((matiereId, index) => {
      formData.append(`matieres[${index}]`, matiereId);
      console.log(matiereId);
    });
    
    try {
      // Appel à la fonction d'ajout de matières
      const response = await addMatiereClasse(formData);
      afficherNotification('Matières ajoutées avec succès à la classe', 'success');
      
      // Réinitialiser le formulaire
      setClasseSelectionnee('');
      setMatieresSelectionnees([]);
    } catch (err) {
      afficherNotification('Erreur lors de l\'ajout des matières', 'error');
      console.error('Erreur lors de l\'ajout des matières:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Afficher une notification
  const afficherNotification = (message, type) => {
    setNotification({ visible: true, message, type });
    setTimeout(() => {
      setNotification({ visible: false, message: '', type: '' });
    }, 3000);
  };

  // Affichage du loader pendant le chargement initial
  if (loading && (!classes.length || !matieres.length)) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ajouter des Matières à une Classe</h2>
        
        {notification.visible && (
          <div className={`mb-4 p-3 rounded-md ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {notification.message}
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-100 text-red-700">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="classe" className="block text-gray-700 font-medium mb-2">
              Sélectionner une classe
            </label>
            <select
              id="classe"
              value={classeSelectionnee}
              onChange={handleClasseChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading || isSubmitting}
            >
              <option value="">Choisir une classe</option>
              {classes.map(classe => (
                <option key={classe.id} value={classe.id}>
                  {classe.nom}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="matieres" className="block text-gray-700 font-medium mb-2">
              Sélectionner les matières à ajouter
            </label>
            <select
              id="matieres"
              multiple
              value={matieresSelectionnees}
              onChange={handleMatieresChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-48"
              disabled={loading || isSubmitting}
            >
              {matieres.map(matiere => (
                <option key={matiere.id} value={matiere.id}>
                  {matiere.nom}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Maintenez la touche Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs matières
            </p>
          </div>
          
          <div className="flex justify-center">
            {isSubmitting ? (
              <button
                type="button"
                className="px-6 py-2 bg-gray-400 text-white font-medium rounded-md cursor-not-allowed flex items-center"
                disabled
              >
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement en cours...
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                disabled={loading}
              >
                Ajouter les matières
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouterMatiereClasse;