import React, { useState } from 'react';
import img1 from '../../assets/img/courses/img1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
import CoursComponent from './CoursComponent';

const CoursSection = () => {
  // Données d'exemple pour les cours
  const [cours, setCours] = useState([
    {
      id: 1,
      titre: "Introduction à la physique quantique",
      enseignant: "Prof. Martin Dubois",
      matiere: "Physique",
      classe: "Terminale S",
      vignette: img1,
      duree: "45 min",
      vues: 1245
    },
    {
      id: 2,
      titre: "Les équations du second degré",
      enseignant: "Dr. Sophie Laurent",
      matiere: "Mathématiques",
      classe: "Seconde",
      vignette: img2,
      duree: "32 min",
      vues: 987
    },
    {
      id: 3,
      titre: "La Révolution française",
      enseignant: "Prof. Alexandre Moreau",
      matiere: "Histoire",
      classe: "4ème",
      vignette: img3,
      duree: "58 min",
      vues: 2341
    },
    {
      id: 4,
      titre: "L'accord du participe passé",
      enseignant: "Mme. Clara Benoit",
      matiere: "Français",
      classe: "6ème",
      vignette: img1,
      duree: "25 min",
      vues: 1678
    },
    {
      id: 5,
      titre: "Les réactions d'oxydoréduction",
      enseignant: "Dr. Thomas Mercier",
      matiere: "Chimie",
      classe: "Première S",
      vignette: img2,
      duree: "41 min",
      vues: 893
    },
    {
      id: 6,
      titre: "Introduction à la programmation Python",
      enseignant: "Prof. Julie Lemoine",
      matiere: "Informatique",
      classe: "Seconde",
      vignette: img3,
      duree: "37 min",
      vues: 3215
    },
  ]);

  // Filtres disponibles
  const [filtreMatiere, setFiltreMatiere] = useState("");
  const [filtreClasse, setFiltreClasse] = useState("");
  
  // Fonction pour extraire les matières uniques
  const matieres = [...new Set(cours.map(cours => cours.matiere))];
  
  // Fonction pour extraire les classes uniques
  const classes = [...new Set(cours.map(cours => cours.classe))];
  
  // Fonction pour filtrer les cours
  const coursFiltres = cours.filter(cours => {
    if (filtreMatiere && cours.matiere !== filtreMatiere) return false;
    if (filtreClasse && cours.classe !== filtreClasse) return false;
    return true;
  });
  
  // Fonction pour rediriger vers la page du cours
  const naviguerVersCours = (id) => {
    alert(`Navigation vers le cours #${id} - Cette fonctionnalité sera développée ultérieurement`);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coursFiltres.map((cours) => (
            <CoursComponent cours={cours}/>
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