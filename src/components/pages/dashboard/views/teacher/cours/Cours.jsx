import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, Users, Plus } from 'lucide-react';
import axios from 'axios';
import CoursComponent from './sections/coursComponent';
import { use } from 'react';

const user = JSON.parse(localStorage.getItem('user'));
const Cours = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  // const courses = [
  //   {
  //     id: 1,
  //     title: "Mathématiques - Algèbre linéaire",
  //     description: "Maîtrisez les concepts fondamentaux de l'algèbre linéaire avec des exercices pratiques et des exemples concrets.",
  //     level: "CM1",
  //     subject: "Mathématiques",
  //     instructor: {
  //       name: "Alex Morgan",
  //       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //     },
  //     thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
  //   },
  //   {
  //     id: 2,
  //     title: "Français - Grammaire avancée",
  //     description: "Perfectionnez votre maîtrise de la langue française avec des cours structurés et des exercices pratiques.",
  //     level: "CM2",
  //     subject: "Français",
  //     instructor: {
  //       name: "Sarah Taylor",
  //       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //     },
  //     thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
  //   },
  //   {
  //     id: 3,
  //     title: "Sciences - Introduction à la physique",
  //     description: "Découvrez les principes fondamentaux de la physique à travers des expériences et des démonstrations interactives.",
  //     level: "CM2",
  //     subject: "Sciences",
  //     instructor: {
  //       name: "David Warner",
  //       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //     },
  //     thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
  //   }
  // ];

//   useEffect(() => {
//     fetchCourses();
//   }, []);
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      
      const response = await axios.get(user.profile == 'enseignant' ? 'http://localhost:8000/api/get-teacherCourses': 'http://localhost:8000/api/get-studentCourses', 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    });
      setCourses(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      setError('Erreur lors du chargement des cours');
      console.log('erreur' + err);
      setLoading(false);
    }
  };

  const handleCourseClick = (course) => {
    navigate(`/dashboard/teacher/detail-cours/${course.uid}`);
  };


  const handleCreateCourse = () => {
    navigate('/dashboard/teacher/create-course');
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
      {user.profile == 'enseignant' && (<div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mes Cours</h1>
        <button
          onClick={handleCreateCourse}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="w-5 h-5 mr-2" />
          Poster un nouveau cours
        </button>
      </div>)}

      {courses.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-4">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun cours</h3>
          {user.profile == 'enseignant' && (<><p className="mt-1 text-sm text-gray-500">
            Commencez par créer votre premier cours.
          </p>
          <div className="mt-6">
            <button
              onClick={handleCreateCourse}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouveau cours
            </button>
          </div> </>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
           <div key={course.id} onClick={()=> handleCourseClick(course) }>
             <CoursComponent course={course}  />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cours;