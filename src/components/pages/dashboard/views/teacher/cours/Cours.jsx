import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, Users, Plus, Search, X, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import CoursComponent from '../../../../../layout/CoursComponent';
import { BASE_URL } from '../../../../../../api/api';
import { getUserMatieres } from '../../../../../../api/user';
import { getCourses } from '../../../../../../api/cours';

const Cours = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // États pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMatiere, setSelectedMatiere] = useState('Tous');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [MATIERES, setMATIERES] = useState(['Tous']);

  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(6);

  useEffect(() => {
    fetchCourses();
    fetchUserMatieres();
  }, []);

  const fetchUserMatieres = async () => {
    try {
      const response = await getUserMatieres();
      console.log(response);
      const matieresArray = Object.values(response);

      setMATIERES([...new Set(matieresArray.map((matiere) => matiere.nom))]);
    } catch (err) {
      console.log('erreur lors de la récupération des matières ', err);
      setError('Erreur lors de la récupération des matières');
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      console.log(response);
      setCourses(response);
      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement des données');
      console.log(err);
      setLoading(false);
    }
  };

  // Filtrage et recherche des cours
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = searchTerm.length === 0 || 
        [course.titre, course.description, course.chapitres_enseigne.chapitre.nom]
          .some(field => 
            field && field.toLowerCase().includes(searchTerm.toLowerCase())
          );
      
      const matchesMatiere = selectedMatiere === 'Tous' || 
        course.chapitres_enseigne.matieres_classe.matiere.nom === selectedMatiere;
      
      return matchesSearch && matchesMatiere;
    });
  }, [courses, searchTerm, selectedMatiere]);

  // Logique de pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Changement de page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Remonter en haut de la liste des cours
      window.scrollTo({
        top: document.getElementById('courses-container')?.offsetTop - 20 || 0,
        behavior: 'smooth'
      });
    }
  };

  const handleCourseClick = (course) => {
    navigate(`/dashboard/teacher/detail-cours/${course.uid}`);
  };

  const handleCreateCourse = () => {
    navigate('/dashboard/teacher/create-course');
  };

  const renderFilterModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filtrer par matière</h2>
          <button 
            onClick={() => setIsFilterModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-2">
          {MATIERES.map((matiere) => (
            <button
              key={matiere}
              onClick={() => {
                setSelectedMatiere(matiere);
                setIsFilterModalOpen(false);
                setCurrentPage(1); // Réinitialiser la pagination lors du changement de filtre
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedMatiere === matiere 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {matiere}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Composant de pagination
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex space-x-1">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            // Afficher les 5 pages autour de la page actuelle
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
            ) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === pageNumber
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              (pageNumber === currentPage - 3 && currentPage > 3) ||
              (pageNumber === currentPage + 3 && currentPage < totalPages - 2)
            ) {
              return <span key={pageNumber} className="px-1">...</span>;
            }
            return null;
          })}
        </div>
        
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${
            currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
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
    <div className="px-4 sm:px-6 py-1">
      {/* En tête pour enseignant*/}
      {user.profile == 'enseignant' && (
        <div className="flex justify-between items-center mb-6 space-x-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Mes Cours</h1>
          <button
            onClick={handleCreateCourse}
            className="inline-flex items-center px-2 py-1.5 sm:px-4 sm:py-2 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Poster un nouveau cours</span>
            <span className="sm:hidden">Nouveau</span>
          </button>
        </div>
      )}
      {/* Barre de recherche et filtres */}
      <div className="mb-6 flex items-center space-x-2">
        <div className="relative flex-grow">
          <input 
            type="text"
            placeholder="Rechercher un cours..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Réinitialiser la pagination lors de la recherche
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchTerm && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setCurrentPage(1); // Réinitialiser la pagination
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <button 
          onClick={() => setIsFilterModalOpen(true)}
          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Affichage du filtre sélectionné */}
      {selectedMatiere !== 'Tous' && (
        <div className="mb-4 flex items-center">
          <span className="mr-2 text-sm text-gray-600">Filtré par :</span>
          <div className="flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
            <span className="mr-2 text-sm">{selectedMatiere}</span>
            <button 
              onClick={() => {
                setSelectedMatiere('Tous');
                setCurrentPage(1); // Réinitialiser la pagination
              }}
              className="text-indigo-700 hover:text-indigo-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Information sur le nombre de résultats et pagination */}
      {filteredCourses.length > 0 && (
        <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-gray-600 mb-2 sm:mb-0">
            {filteredCourses.length} cours trouvés • Page {currentPage} sur {totalPages}
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Cours par page:</span>
            <select
              value={coursesPerPage}
              onChange={(e) => {
                setCoursesPerPage(Number(e.target.value));
                setCurrentPage(1); // Réinitialiser à la première page
              }}
              className="border border-gray-300 rounded p-1 text-sm"
            >
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
      )}

      {/* Section des cours */}
      <div id="courses-container">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="mb-4">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Aucun cours trouvé
            </h3>
            {searchTerm && (
              <p className="mt-1 text-sm text-gray-500">
                Aucun résultat pour "{searchTerm}"
              </p>
            )}
            {user.profile == 'enseignant' && (
              <div className="mt-6">
                <button
                  onClick={handleCreateCourse}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Nouveau cours
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course) => (
              <div key={course.id} onClick={() => handleCourseClick(course)}>
                <CoursComponent cours={course} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Composant de pagination */}
      {renderPagination()}

      {/* Modal de filtrage */}
      {isFilterModalOpen && renderFilterModal()}
    </div>
  );
};

export default Cours;