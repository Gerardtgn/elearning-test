import { FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import axios from "axios";
export default function CreateTD(){

    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [rawData, setRawData] = useState([]);
      const [formData, setFormData] = useState({
        title: '',
        description: '',
        class_id: '',
        matiere_id: '',

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
          console.log('Erreur lors du chargement des données:', error);
        }
        finally{
            setLoading(false);
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

      //handlesubmit
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
          } 
    
          return newData;
        });
      };
      const  handleSubmit = ()=>{
        return null;
      };
      if (loading) {
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        );
      }

    return(
        <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Ajouter un nouveau TD</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Titre et Description */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Titre du Td
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
                {/* Le chapitre n'est pas nécéssaire */}
              </div>

              {/* Upload du td */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  <FileText className="inline-block w-4 h-4 mr-1" />
                  Contenu du td
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    <input type="file" name="td" id="td" />
                    <p className="text-xs text-gray-500">des fichiers pdf jusqu'à 10MO</p>
                  </div>
                </div>

              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  <FileText className="inline-block w-4 h-4 mr-1" />
                  Correction de l'épreuve
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    <input type="file" name="td" id="td" />
                    <p className="text-xs text-gray-500">des fichiers pdf jusqu'à 10MO</p>
                  </div>
                </div>

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