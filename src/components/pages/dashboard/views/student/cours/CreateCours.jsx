import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, BookOpen, GraduationCap, Book, Video } from 'lucide-react';
import axios from 'axios';

const CreateCours = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rawData, setRawData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    class_id: '',
    matiere_id: '',
    chapitre_id: '',
  });

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get-chapitresEnseignes', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setRawData(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error.response?.data);
    }
  };

  // Extraire les classes uniques
  const classes = Array.from(new Set(
    rawData.map(item => item.matieres_classes_enseignant.classe.id)
  )).map(classId => {
    const item = rawData.find(item => item.matieres_classes_enseignant.classe.id === classId);
    return item.matieres_classes_enseignant.classe;
  });

  // Obtenir les matières pour la classe sélectionnée
  const matieres = formData.class_id ? Array.from(new Set(
    rawData
      .filter(item => item.matieres_classes_enseignant.classe.id === parseInt(formData.class_id))
      .map(item => item.matieres_classes_enseignant.matiere.id)
  )).map(matiereId => {
    const item = rawData.find(item => item.matieres_classes_enseignant.matiere.id === matiereId);
    return item.matieres_classes_enseignant.matiere;
  }) : [];

  // Obtenir les chapitres pour la matière sélectionnée
  const chapitres = formData.matiere_id ? Array.from(new Set(
    rawData
      .filter(item => 
        item.matieres_classes_enseignant.classe.id === parseInt(formData.class_id) &&
        item.matieres_classes_enseignant.matiere.id === parseInt(formData.matiere_id)
      )
      .map(item => item.chapitre.id)
  )).map(chapitreId => {
    const item = rawData.find(item => item.chapitre.id === chapitreId);
    return item.chapitre;
  }) : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const chapitre = rawData.find(item => item.chapitre.id === parseInt(formData.chapitre_id));
        const data = {
            'title': formData.title,
            'description': formData.description,
            'video' :selectedFile,
            'case_id' : chapitre.id

        };
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      if (selectedFile) {
        formDataToSend.append('video', selectedFile);
      }

      
      // Ajouter l'ID de la case ayant chapitre_id égal à formData.chapitre_id
      if (chapitre) {
        formDataToSend.append('case_id', chapitre.id);
      }
    //   for (let pair of formDataToSend.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    //   }
      console.log(token);
      await axios.post('http://localhost:8000/api/store-courses', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('succes');
      navigate('/dashboard/teacher/courses');
    } catch (error) {
      console.error('Erreur lors de la création du cours:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Créer un nouveau cours</h1>
              <button
                onClick={() => navigate('/dashboard/cours')}
                className="text-gray-600 hover:text-gray-900"
              >
                Retour aux cours
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Titre et Description */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Titre du cours
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Sélecteurs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="class_id" className="block text-sm font-medium text-gray-700">
                    <GraduationCap className="inline-block w-4 h-4 mr-1" />
                    Classe
                  </label>
                  <select
                    id="class_id"
                    name="class_id"
                    value={formData.class_id}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
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
                  <label htmlFor="matiere_id" className="block text-sm font-medium text-gray-700">
                    <BookOpen className="inline-block w-4 h-4 mr-1" />
                    Matière
                  </label>
                  <select
                    id="matiere_id"
                    name="matiere_id"
                    value={formData.matiere_id}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    required
                    disabled={!formData.class_id}
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
                  <label htmlFor="chapitre_id" className="block text-sm font-medium text-gray-700">
                    <Book className="inline-block w-4 h-4 mr-1" />
                    Chapitre
                  </label>
                  <select
                    id="chapitre_id"
                    name="chapitre_id"
                    value={formData.chapitre_id}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    required
                    disabled={!formData.matiere_id}
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

              {/* Upload de vidéo */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  <Video className="inline-block w-4 h-4 mr-1" />
                  Vidéo du cours
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="video-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Télécharger une vidéo</span>
                        <input
                          id="video-upload"
                          name="video"
                          type="file"
                          accept="video/*"
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">MP4, WebM ou OGG jusqu'à 2GB</p>
                  </div>
                </div>
                {previewUrl && (
                  <div className="mt-4">
                    <video
                      className="w-full rounded-lg shadow-lg"
                      controls
                      src={previewUrl}
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                )}
              </div>

              {/* Bouton de soumission */}
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Création en cours...
                    </>
                  ) : (
                    'Créer le cours'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCours;