import React, { useState } from 'react';
import TDComponent from './TDComponent';

const TD = () => {
  // Données d'exemple pour les TD
  const [tds, setTds] = useState([
    {
      id: 1,
      titre: "Exercices sur les intégrales",
      matiere: "Mathématiques",
      classe: "Terminale S",
      format: "pdf",
      dateUpload: "15/01/2025",
      taille: "1.2 MB",
      avecCorrection: true,
      enseignant: "Dr. Sophie Laurent",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 2,
      titre: "TD sur l'électromagnétisme",
      matiere: "Physique",
      classe: "Terminale S",
      format: "pdf",
      dateUpload: "22/01/2025",
      taille: "2.5 MB",
      avecCorrection: true,
      enseignant: "Prof. Martin Dubois",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 3,
      titre: "Analyse de textes littéraires",
      matiere: "Français",
      classe: "Première L",
      format: "pdf",
      dateUpload: "05/02/2025",
      taille: "0.8 MB",
      avecCorrection: false,
      enseignant: "Mme. Clara Benoit",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 4,
      titre: "Exercices de grammaire",
      matiere: "Français",
      classe: "6ème",
      format: "txt",
      dateUpload: "10/02/2025",
      taille: "0.3 MB",
      avecCorrection: true,
      enseignant: "Mme. Clara Benoit",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 5,
      titre: "TD sur les fonctions",
      matiere: "Mathématiques",
      classe: "Seconde",
      format: "pdf",
      dateUpload: "18/02/2025",
      taille: "1.5 MB",
      avecCorrection: false,
      enseignant: "Dr. Sophie Laurent",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 6,
      titre: "Exercices sur les équations chimiques",
      matiere: "Chimie",
      classe: "Première S",
      format: "pdf",
      dateUpload: "20/02/2025",
      taille: "1.1 MB",
      avecCorrection: true,
      enseignant: "Dr. Thomas Mercier",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 7,
      titre: "TD d'algorithmique",
      matiere: "Informatique",
      classe: "Seconde",
      format: "txt",
      dateUpload: "22/02/2025",
      taille: "0.5 MB",
      avecCorrection: false,
      enseignant: "Prof. Julie Lemoine",
      vignette: "/api/placeholder/320/180"
    },
    {
      id: 8,
      titre: "Exercices sur la Guerre Froide",
      matiere: "Histoire",
      classe: "Terminale",
      format: "pdf",
      dateUpload: "23/02/2025",
      taille: "1.8 MB",
      avecCorrection: true,
      enseignant: "Prof. Alexandre Moreau",
      vignette: "/api/placeholder/320/180"
    },
  ]);

  // États pour les filtres
  const [filtreMatiere, setFiltreMatiere] = useState("");
  const [filtreClasse, setFiltreClasse] = useState("");
  const [filtreCorrection, setFiltreCorrection] = useState("tous");
  const [recherche, setRecherche] = useState("");

  // Extraire les matières et classes uniques
  const matieres = [...new Set(tds.map(td => td.matiere))];
  const classes = [...new Set(tds.map(td => td.classe))];

  // Fonction pour filtrer les TD
  const tdsFiltres = tds.filter(td => {
    // Filtrage par recherche
    if (recherche && !td.titre.toLowerCase().includes(recherche.toLowerCase())) return false;
    
    // Filtrage par matière
    if (filtreMatiere && td.matiere !== filtreMatiere) return false;
    
    // Filtrage par classe
    if (filtreClasse && td.classe !== filtreClasse) return false;
    
    // Filtrage par correction
    if (filtreCorrection === "avec" && !td.avecCorrection) return false;
    if (filtreCorrection === "sans" && td.avecCorrection) return false;
    
    return true;
  });

  // Fonction pour télécharger un TD
  const telechargerTD = (id) => {
    alert(`Téléchargement du TD #${id} - Cette fonctionnalité sera implémentée ultérieurement`);
  };

  // Fonction pour afficher la correction
  const voirCorrection = (id) => {
    alert(`Affichage de la correction du TD #${id} - Cette fonctionnalité sera implémentée ultérieurement`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold" style={{ color: "#fe4a55" }}>Travaux Dirigés (TD)</h1>
          <p className="text-gray-600 mt-2">Accédez à tous les exercices et leurs corrections pour approfondir vos connaissances</p>
        </div>
      </header>

      {/* Section de filtrage et recherche */}
      <div className="container mx-auto py-6 px-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Rechercher un TD..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Matière</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filtreMatiere}
                onChange={(e) => setFiltreMatiere(e.target.value)}
              >
                <option value="">Toutes les matières</option>
                {matieres.map((matiere, index) => (
                  <option key={index} value={matiere}>{matiere}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Classe</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filtreClasse}
                onChange={(e) => setFiltreClasse(e.target.value)}
              >
                <option value="">Toutes les classes</option>
                {classes.map((classe, index) => (
                  <option key={index} value={classe}>{classe}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correction</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={filtreCorrection}
                onChange={(e) => setFiltreCorrection(e.target.value)}
              >
                <option value="tous">Tous les TD</option>
                <option value="avec">Avec correction</option>
                <option value="sans">Sans correction</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button 
              className="p-2 px-4 text-white rounded-md"
              style={{ backgroundColor: "#fe4a55" }}
              onClick={() => {
                setFiltreMatiere("");
                setFiltreClasse("");
                setFiltreCorrection("tous");
                setRecherche("");
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>

      {/* Liste des TD */}
      <div className="container mx-auto px-6 pb-12">
        {tdsFiltres.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tdsFiltres.map((td) => (
              <TDComponent td={td}/>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun TD ne correspond à votre recherche</p>
            <button 
              className="mt-4 p-2 px-4 text-white rounded-md"
              style={{ backgroundColor: "#fe4a55" }}
              onClick={() => {
                setFiltreMatiere("");
                setFiltreClasse("");
                setFiltreCorrection("tous");
                setRecherche("");
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TD;