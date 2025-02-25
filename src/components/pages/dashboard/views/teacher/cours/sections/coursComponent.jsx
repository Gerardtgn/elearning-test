import React from 'react';
import { Heart, BookOpen, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

const CoursComponent = ({ course }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const publishedDate = new Date(course.created_at);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true, locale: fr });

  const handleCourseClick = (course) => {
    navigate(`/dashboard/teacher/detail-cours/${course.uid}`);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <video 
          className="w-full h-48 sm:h-64 md:h-48 lg:h-64 object-cover"  
          controls
        >
          <source src={`http://localhost:8000/storage/${course.contenu}`} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
            <Heart className="w-5 h-5 text-indigo-600" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-sm font-medium text-gray-900">{user.profile !== 'apprenant' && course.chapitres_enseigne.matieres_classes_enseignant.classe.nom}</span>
        </div>
      </div>

      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <img 
              className="h-10 w-10 rounded-full object-cover" 
              src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} 
              alt={course.chapitres_enseigne.matieres_classes_enseignant.user.nom} 
            />
            <p className="ml-3 text-sm font-medium text-indigo-600">{course.chapitres_enseigne.matieres_classes_enseignant.user.nom} {course.chapitres_enseigne.matieres_classes_enseignant.user.prenom}</p>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {course.chapitres_enseigne.matieres_classes_enseignant.matiere.nom} - {course.chapitres_enseigne.chapitre.nom}
          </h3>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            <a onClick={() => handleCourseClick(course)}>
              {course.titre}
            </a>
          </h3>
          <p className="text-sm sm:text-base text-gray-500 line-clamp-2">{course.description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>Cours détaillé</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>Publié {timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursComponent;