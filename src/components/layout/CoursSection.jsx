import React, { useState } from 'react';
import img1 from '../../assets/img/courses/img1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
import { useEffect, } from 'react';
import CoursComponent from './CoursComponent';
import { getCourses } from '../../api/public';
import { useNavigate } from 'react-router-dom';

const CoursSection = () => {
  // Données d'exemple pour les cours
  const navigate = useNavigate();
  const [cours, setcours] = useState([]);
      useEffect(() => {
          fetchCourses();
        }, []);
        const fetchCourses = async () => {
            
            try {
              const response = await getCourses(true);
              setcours(response || []);
            } catch (err) {
              //setError('Erreur lors de la récupération des données');
              console.error('Erreur lors de la récupération des données:', err);
            } 
          };

  // Filtres disponibles
  const [filtreMatiere, setFiltreMatiere] = useState("");
  const [filtreClasse, setFiltreClasse] = useState("");
  
  // Fonction pour extraire les matières uniques
  const matieres = [...new Set(cours.map(cours => cours.chapitres_enseigne?.matieres_classe.matiere.nom))];
  
  // Fonction pour extraire les classes uniques
  const classes = [...new Set(cours.map(cours => cours.chapitres_enseigne?.matieres_classe.classe.nom))];
  
  // Fonction pour filtrer les cours
  const coursFiltres = cours.filter(cours => {
    if (filtreMatiere && cours.chapitres_enseigne?.matieres_classe.matiere.nom !== filtreMatiere) return false;
    if (filtreClasse && cours.chapitres_enseigne?.matieres_classe.classe.nom !== filtreClasse) return false;
    return true;
  });
  
  // Fonction pour rediriger vers la page du cours
  const naviguerVersCours = () => {
    //alert(`Navigation vers le cours #${id} - Cette fonctionnalité sera développée ultérieurement`);
    navigate('/dashboard/teacher/courses');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold" style={{ color: "#fe4a55" }}>Cours Disponibles</h1>
          <p className="text-gray-600 mt-2">Découvrez tous les cours vidéo disponibles sur notre plateforme</p>
        </div>
      </header>

      {/* Section de filtrage */}
      <div className="container mx-auto py-6 px-6">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Matière</label>
            <select 
              className="w-full md:w-64 p-2 border border-gray-300 rounded-md"
              value={filtreMatiere}
              onChange={(e) => setFiltreMatiere(e.target.value)}
            >
              <option value="">Toutes les matières</option>
              {matieres.map((matiere, index) => (
                <option key={index} value={matiere}>{matiere}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Classe</label>
            <select 
              className="w-full md:w-64 p-2 border border-gray-300 rounded-md"
              value={filtreClasse}
              onChange={(e) => setFiltreClasse(e.target.value)}
            >
              <option value="">Toutes les classes</option>
              {classes.map((classe, index) => (
                <option key={index} value={classe}>{classe}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-auto flex items-end">
            <button 
              className="p-2 px-4 text-white rounded-md"
              style={{ backgroundColor: "#fe4a55" }}
              onClick={() => {
                setFiltreMatiere("");
                setFiltreClasse("");
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>

      {/* Grille de cours */}
      <div className="container mx-auto px-6 pb-12">
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coursFiltres.map((cours) => (
            <div key={cours.id} onClick={() => naviguerVersCours()}>
              <CoursComponent cours={cours}/>
            </div>
          ))}
        </div>
        
        {coursFiltres.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun cours ne correspond à votre recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursSection;