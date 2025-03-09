import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, Users, Plus } from 'lucide-react';
import axios from 'axios';
import ExerciceComponent from './sections/ExerciceSection';
import { getTD } from '../../../../../../api/td';
import TDComponent from '../../../../../layout/TDComponent';
const Exercice = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [exercices, setExercices] = useState([{'test': 0}, {'test': 1}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    fetchExercices();
  }, []);

  const fetchExercices = async () => {
    try {
      
      const response = await getTD('exercice', user.profile_id);
      setExercices(response);
      console.log(response.data);
    } catch (err) {
      setError('Erreur lors du chargement des Exercices');
      console.log('erreur' + err);
      
      
    }
    finally{
      setLoading(false);
    }
  };

  const handleExerciceClick = (Exercice) => {
    //navigate('/dashboard/teacher/detail-cours', { state: { course } });
  };


  const handleCreateExercice = () => {
    navigate('/dashboard/teacher/create-exercice');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {user.profile=='enseignant' && <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mes Exercices</h1>
        <button
          onClick={handleCreateExercice}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="w-5 h-5 mr-2" />
          Partager un nouveau exercice
        </button>
      </div>}

      {exercices.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-4">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun exercice disponible</h3>
          {user.profile=='enseignant' && (<><p className="mt-1 text-sm text-gray-500">
            Commencez par partager un exercice.
          </p>
          <div className="mt-6">
            <button
              onClick={handleCreateExercice}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="w-5 h-5 mr-2" />
              Partager un exercice
            </button>
          </div> </>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercices.map((exercice) => (
           <div key={exercice.id} onClick={()=> handleExerciceClick(exercice) }>
             <div 
                key={td.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-4 border-b">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "#fe4a55" }}>
                        {td.titre}
                      </h3>
                      <p className="text-gray-700 text-sm">{td.user.nom} {td.user.prenom}</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-lg font-bold uppercase" style={{ color: "#fe4a55" }}>
                      {td.format}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {td.chapitres_enseigne.matieres_classe.matiere.nom}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {td.chapitres_enseigne.matieres_classe.classe.nom}
                    </span>
                    {td.correction ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        Avec correction
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                        Sans correction
                      </span>
                    )}
                  </div>
                  
                  <div className="text-gray-500 text-xs mb-4">
                    <div>Taille: {'2MO'}</div>
                    <div>Mis en ligne le: {td.created_at}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 p-2 text-white rounded-md text-sm font-medium"
                      style={{ backgroundColor: "#fe4a55" }}
                      //onClick={}
                    >
                      Télécharger
                    </button>
                    
                    {td.correction? (
                      <button 
                        className="flex-1 p-2 border text-sm font-medium rounded-md hover:bg-gray-50"
                        style={{ color: "#fe4a55", borderColor: "#fe4a55" }}
                        //onClick={() =>{} }
                      >
                        Voir correction
                      </button>
                    ): ''}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercice;