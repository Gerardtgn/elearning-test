import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, BookOpen, GraduationCap, Book, Video, Plus, Trash2, CheckCircle, Image } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import api from '../../../../../../api/api';
import { getChapitresEnseigne } from '../../../../../../api/chapitresEnseigne';
import { addCours } from '../../../../../../api/cours';

const CreateCours = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rawData, setRawData] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // État pour la sélection initiale
  const [classChapitreSelection, setClassChapitreSelection] = useState({
    class_id: '',
    matiere_id: '',
    chapitre_id: '',
  });

  // État pour les multiples cours
  const [courses, setCourses] = useState([
    { 
      title: '', 
      description: '', 
      video: null, 
      image: null, 
      previewUrl: null, 
      imagePreviewUrl: null, 
      uploadProgress: 0 
    }
  ]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await getChapitresEnseigne();
      if(response){
        console.log(response);

        setRawData(response);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error.response?.data);
    }
  };

  // Extraire les classes uniques
  const classes = Array.from(new Set(
    rawData.map(item => item.matieres_classe.classe.id)
  )).map(classId => {
    const item = rawData.find(item => item.matieres_classe.classe.id === classId);
    return item.matieres_classe.classe;
  });

  // Obtenir les matières pour la classe sélectionnée
  const matieres = classChapitreSelection.class_id ? Array.from(new Set(
    rawData
      .filter(item => item.matieres_classe.classe.id === parseInt(classChapitreSelection.class_id))
      .map(item => item.matieres_classe.matiere.id)
  )).map(matiereId => {
    const item = rawData.find(item => item.matieres_classe.matiere.id === matiereId);
    return item.matieres_classe.matiere;
  }) : [];

  // Obtenir les chapitres pour la matière sélectionnée
  const chapitres = classChapitreSelection.matiere_id ? Array.from(new Set(
    rawData
      .filter(item => 
        item.matieres_classe.classe.id === parseInt(classChapitreSelection.class_id) &&
        item.matieres_classe.matiere.id === parseInt(classChapitreSelection.matiere_id)
      )
      .map(item => item.chapitre.id)
  )).map(chapitreId => {
    const item = rawData.find(item => item.chapitre.id === chapitreId);
    return item.chapitre;
  }) : [];

  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    setClassChapitreSelection(prev => {
      const newData = {
        ...prev,
        [name]: value
      };

      // Réinitialiser les sélections en cascade
      if (name === 'class_id') {
        newData.matiere_id = '';
        newData.chapitre_id = '';
      } else if (name === 'matiere_id') {
        newData.chapitre_id = '';
      }

      return newData;
    });
  };

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const handleFileChange = (index, e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      const updatedCourses = [...courses];
      
      if (fileType === 'video') {
        updatedCourses[index].video = file;
        updatedCourses[index].previewUrl = URL.createObjectURL(file);
      } else if (fileType === 'image') {
        updatedCourses[index].image = file;
        updatedCourses[index].imagePreviewUrl = URL.createObjectURL(file);
      }
      
      setCourses(updatedCourses);
    }
  };

  const addCourse = () => {
    setCourses([...courses, { 
      title: '', 
      description: '', 
      video: null, 
      image: null, 
      previewUrl: null, 
      imagePreviewUrl: null, 
      uploadProgress: 0 
    }]);
  };

  const removeCourse = (index) => {
    if (courses.length > 1) {
      const updatedCourses = [...courses];
      if (updatedCourses[index].previewUrl) {
        URL.revokeObjectURL(updatedCourses[index].previewUrl);
      }
      if (updatedCourses[index].imagePreviewUrl) {
        URL.revokeObjectURL(updatedCourses[index].imagePreviewUrl);
      }
      updatedCourses.splice(index, 1);
      setCourses(updatedCourses);
    }
  };

  const simulateProgress = (index) => {
    let progress = 0;
    const updatedCourses = [...courses];
    
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      
      updatedCourses[index].uploadProgress = progress;
      setCourses([...updatedCourses]);
    }, 300);
    
    return interval;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!classChapitreSelection.chapitre_id) {
      alert("Veuillez sélectionner une classe, une matière et un chapitre.");
      return;
    }
    
    if (courses.some(course => !course.title || !course.description || !course.video || !course.image)) {
      alert("Veuillez remplir toutes les informations pour chaque cours, y compris l'image descriptive.");
      return;
    }
    
    setLoading(true);
    setUploading(true);
    
    const chapitre = rawData.find(item => 
      item.chapitre.id === parseInt(classChapitreSelection.chapitre_id) &&
      item.matieres_classe.matiere.id === parseInt(classChapitreSelection.matiere_id) &&
      item.matieres_classe.classe.id === parseInt(classChapitreSelection.class_id)
    );
    
    if (!chapitre) {
      alert("Chapitre non trouvé.");
      setLoading(false);
      setUploading(false);
      return;
    }
    
    // Simuler le chargement pour chaque cours
    const progressIntervals = courses.map((_, index) => simulateProgress(index));
    
    try {
      // Soumettre chaque cours
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        
        const formDataToSend = new FormData();
        formDataToSend.append('title', course.title);
        formDataToSend.append('description', course.description);
        formDataToSend.append('video', course.video);
        formDataToSend.append('image', course.image); // Ajout de l'image
        formDataToSend.append('case_id', chapitre.id);
        console.log(chapitre.id);
        
        await addCours(formDataToSend);
      }
      
      // Nettoyer les intervalles
      progressIntervals.forEach(interval => clearInterval(interval));
      
      // Mettre tous les cours à 100%
      setCourses(courses.map(course => ({...course, uploadProgress: 100})));
      
      setSubmissionSuccess(true);
      setTimeout(() => {
        navigate('/dashboard/teacher/courses');
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de la création des cours:', error);
      alert("Une erreur s'est produite lors de la création des cours.");
      
      // Nettoyer les intervalles en cas d'erreur
      progressIntervals.forEach(interval => clearInterval(interval));
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const isSelectionComplete = classChapitreSelection.class_id && 
                             classChapitreSelection.matiere_id && 
                             classChapitreSelection.chapitre_id;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-indigo-100">
          <div className="px-6 py-8 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2 md:mb-0">
                <span className="border-b-2 border-indigo-600 pb-1">Créer de nouveaux cours</span>
              </h1>
              <button
                onClick={() => navigate('/dashboard/cours')}
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Retour aux cours
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Étape 1: Sélection Classe/Matière/Chapitre */}
              <div className="p-6 bg-indigo-50 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-indigo-900 mb-4">Étape 1: Sélection du chapitre</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="class_id" className="block text-sm font-medium text-gray-700 mb-1">
                      <GraduationCap className="inline-block w-4 h-4 mr-1 text-indigo-700" />
                      Classe
                    </label>
                    <select
                      id="class_id"
                      name="class_id"
                      value={classChapitreSelection.class_id}
                      onChange={handleSelectionChange}
                      className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                      required
                    >
                      <option value="">Sélectionner une classe</option>
                      {classes.map((classe) => (
                        <option key={classe.id} value={classe.id}>
                          {classe.nom}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="matiere_id" className="block text-sm font-medium text-gray-700 mb-1">
                      <BookOpen className="inline-block w-4 h-4 mr-1 text-indigo-700" />
                      Matière
                    </label>
                    <select
                      id="matiere_id"
                      name="matiere_id"
                      value={classChapitreSelection.matiere_id}
                      onChange={handleSelectionChange}
                      className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                      required
                      disabled={!classChapitreSelection.class_id}
                    >
                      <option value="">Sélectionner une matière</option>
                      {matieres.map((matiere) => (
                        <option key={matiere.id} value={matiere.id}>
                          {matiere.nom}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="chapitre_id" className="block text-sm font-medium text-gray-700 mb-1">
                      <Book className="inline-block w-4 h-4 mr-1 text-indigo-700" />
                      Chapitre
                    </label>
                    <select
                      id="chapitre_id"
                      name="chapitre_id"
                      value={classChapitreSelection.chapitre_id}
                      onChange={handleSelectionChange}
                      className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                      required
                      disabled={!classChapitreSelection.matiere_id}
                    >
                      <option value="">Sélectionner un chapitre</option>
                      {chapitres.map((chapitre) => (
                        <option key={chapitre.id} value={chapitre.id}>
                          {chapitre.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Étape 2: Ajout des cours */}
              {isSelectionComplete && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-indigo-900">Étape 2: Ajout des cours</h2>
                    <button 
                      type="button" 
                      onClick={addCourse}
                      className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      <Plus size={16} />
                      Ajouter un cours
                    </button>
                  </div>

                  {courses.map((course, index) => (
                    <div 
                      key={index} 
                      className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Cours #{index + 1}</h3>
                        <button 
                          type="button" 
                          onClick={() => removeCourse(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          disabled={courses.length === 1}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                            Titre du cours
                          </label>
                          <input
                            type="text"
                            id={`title-${index}`}
                            value={course.title}
                            onChange={(e) => handleCourseChange(index, 'title', e.target.value)}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                          </label>
                          <textarea
                            id={`description-${index}`}
                            value={course.description}
                            onChange={(e) => handleCourseChange(index, 'description', e.target.value)}
                            rows={3}
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Upload de vidéo */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Video className="inline-block w-4 h-4 mr-1 text-indigo-700" />
                            Vidéo du cours
                          </label>
                          
                          {!course.video ? (
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-200">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                  <label htmlFor={`video-upload-${index}`} className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Télécharger une vidéo</span>
                                    <input
                                      id={`video-upload-${index}`}
                                      type="file"
                                      accept="video/*"
                                      onChange={(e) => handleFileChange(index, e, 'video')}
                                      className="sr-only"
                                      required
                                    />
                                  </label>
                                </div>
                                <p className="text-xs text-gray-500">MP4, WebM ou OGG jusqu'à 2GB</p>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-4 space-y-3">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-indigo-600 h-2.5 rounded-full" 
                                  style={{ width: `${course.uploadProgress}%` }}
                                />
                              </div>
                              
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">
                                  {course.video.name} ({(course.video.size / (1024 * 1024)).toFixed(2)} MB)
                                </span>
                                <span className="text-indigo-700 font-medium">
                                  {course.uploadProgress === 100 ? (
                                    <span className="flex items-center">
                                      <CheckCircle size={16} className="mr-1 text-green-600" />
                                      Téléchargé
                                    </span>
                                  ) : (
                                    `${course.uploadProgress}%`
                                  )}
                                </span>
                              </div>
                              
                              <video
                                className="w-full rounded-lg shadow-md"
                                controls
                                src={course.previewUrl}
                              >
                                Votre navigateur ne supporte pas la lecture de vidéos.
                              </video>
                            </div>
                          )}
                        </div>

                        {/* Upload d'image descriptive */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Image className="inline-block w-4 h-4 mr-1 text-indigo-700" />
                            Image descriptive
                          </label>
                          
                          {!course.image ? (
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-200">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                  <label htmlFor={`image-upload-${index}`} className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Télécharger une image</span>
                                    <input
                                      id={`image-upload-${index}`}
                                      type="file"
                                      accept="image/*"
                                      onChange={(e) => handleFileChange(index, e, 'image')}
                                      className="sr-only"
                                      required
                                    />
                                  </label>
                                </div>
                                <p className="text-xs text-gray-500">JPG, PNG ou GIF jusqu'à 5MB</p>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-4 space-y-3">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">
                                  {course.image.name} ({(course.image.size / (1024 * 1024)).toFixed(2)} MB)
                                </span>
                                <span className="text-indigo-700 font-medium">
                                  <span className="flex items-center">
                                    <CheckCircle size={16} className="mr-1 text-green-600" />
                                    Téléchargé
                                  </span>
                                </span>
                              </div>
                              
                              <img
                                src={course.imagePreviewUrl}
                                alt="Aperçu"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bouton de soumission */}
              {isSelectionComplete && (
                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    disabled={loading || submissionSuccess}
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                      (loading || submissionSuccess) ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Téléchargement en cours...
                      </>
                    ) : submissionSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Cours créés avec succès!
                      </>
                    ) : (
                      'Créer les cours'
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCours;