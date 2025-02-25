import React, { useState } from 'react';
import user1 from '../../assets/img/user/user1.jpg';
import img1 from '../../assets/img/courses/img1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
const TeacherDetailPage = () => {
  // Données d'exemple pour un enseignant
  const [teacher, setTeacher] = useState({
    id: 1,
    name: "Prof. Marie Dupont",
    avatar: "/api/placeholder/150/150",
    coverImage: "/api/placeholder/1200/300",
    subjects: ["Mathématiques", "Physique", "Statistiques"],
    followers: 1250,
    coursesCount: 24,
    bio: "Docteur en mathématiques appliquées avec 10 ans d'expérience dans l'enseignement universitaire. Spécialisée dans la pédagogie innovante et l'apprentissage par projet. Ancienne chercheuse au CNRS et auteure de plusieurs ouvrages de référence dans le domaine des statistiques appliquées.",
    education: [
      "Doctorat en Mathématiques Appliquées - Université de Paris",
      "Master en Sciences des Données - École Polytechnique"
    ],
    experience: [
      "Professeure de mathématiques - Université de Lyon (2018-présent)",
      "Chercheuse en statistiques - CNRS (2014-2018)"
    ],
    isSubscribed: false
  });

  // Données d'exemple pour les cours de l'enseignant
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Algèbre linéaire pour débutants",
      thumbnail:img1,
      duration: "12h 30min",
      level: "Débutant",
      students: 458,
      rating: 4.8
    },
    {
      id: 2,
      title: "Statistiques avancées et analyse de données",
      thumbnail: img2,
      duration: "16h 45min",
      level: "Avancé",
      students: 312,
      rating: 4.9
    },
    {
      id: 3,
      title: "Calcul différentiel et intégral",
      thumbnail: img3,
      duration: "14h 15min",
      level: "Intermédiaire",
      students: 275,
      rating: 4.7
    }
  ]);

  const handleSubscribe = () => {
    setTeacher(prev => ({
      ...prev,
      isSubscribed: !prev.isSubscribed,
      followers: prev.isSubscribed ? prev.followers - 1 : prev.followers + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec image de couverture */}
      <div className="relative h-64 bg-gray-300">
        <img 
          src={user1} 
          alt="Couverture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      </div>

      {/* Section d'info sur l'enseignant */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-xl shadow-lg -mt-20 relative z-10 overflow-hidden">
          <div className="p-6 pb-0 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex flex-col items-center">
              <div className="rounded-full border-4 border-white shadow-lg -mt-24 mb-4" style={{ backgroundColor: '#fe4a55' }}>
                <img 
                  src={teacher.avatar} 
                  alt={teacher.name} 
                  className="h-36 w-36 rounded-full object-cover bg-white"
                />
              </div>
              <h1 className="text-2xl font-bold text-center mb-2">{teacher.name}</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {teacher.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-600 ring-1 ring-inset ring-pink-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-8 w-full mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{teacher.followers}</p>
                  <p className="text-sm text-gray-500">Abonnés</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{teacher.coursesCount}</p>
                  <p className="text-sm text-gray-500">Cours</p>
                </div>
              </div>
              <button 
                onClick={handleSubscribe}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center ${teacher.isSubscribed ? 'bg-gray-600 hover:bg-gray-700' : ''}`}
                style={{ backgroundColor: teacher.isSubscribed ? '' : '#fe4a55' }}
              >
                {teacher.isSubscribed ? 'Désabonner' : "S'abonner"}
                {!teacher.isSubscribed && (
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                )}
              </button>
            </div>
            
            <div className="md:w-3/4">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Biographie</h2>
                <p className="text-gray-600">{teacher.bio}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Formation</h2>
                  <ul className="space-y-2">
                    {teacher.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Expérience</h2>
                  <ul className="space-y-2">
                    {teacher.experience.map((exp, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-gray-700">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section des cours */}
          <div className="mt-8 p-6 pt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Cours populaires</h2>
              <a 
                href="#" 
                className="text-sm font-medium flex items-center" 
                style={{ color: '#fe4a55' }}
              >
                Voir tous les cours
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded">
                      {course.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded shadow" style={{ color: '#fe4a55' }}>
                      {course.level}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{course.students} étudiants</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailPage;