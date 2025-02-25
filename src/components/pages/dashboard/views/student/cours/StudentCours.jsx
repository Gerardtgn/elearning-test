import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, Users, Plus } from 'lucide-react';
import axios from 'axios';
import CoursComponent from './sections/coursComponent';


const StudentCours = () => {
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
      const response = await axios.get('http://localhost:8000/api/get-studentCourses', 
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
      console.log(err.response.data);
      setLoading(false);
    }
  };

  const handleCourseClick = (course) => {
    navigate('/dashboard/teacher/detail-cours', { state: { course } });
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
      {courses.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-4">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          </div>
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

export default StudentCours;