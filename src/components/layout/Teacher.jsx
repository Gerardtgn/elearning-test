import React, { useState } from 'react';
import TeacherComponent from './TeacherComponent';
const Teacher = () => {
  // Données d'exemple des enseignants
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Prof. Marie Dupont",
      avatar: "/api/placeholder/150/150",
      subjects: ["Mathématiques", "Physique"],
      followers: 1250,
      coursesCount: 24,
      bio: "Docteur en mathématiques appliquées avec 10 ans d'expérience dans l'enseignement universitaire."
    },
    {
      id: 2,
      name: "Dr. Thomas Martin",
      avatar: "/api/placeholder/150/150",
      subjects: ["Biologie", "Chimie"],
      followers: 890,
      coursesCount: 16,
      bio: "Chercheur en biologie moléculaire passionné par la vulgarisation scientifique."
    },
    {
      id: 3,
      name: "Julie Lefèvre",
      avatar: "/api/placeholder/150/150",
      subjects: ["Français", "Littérature", "Histoire"],
      followers: 1430,
      coursesCount: 32,
      bio: "Auteure publiée et enseignante de littérature française depuis 15 ans."
    },
    {
      id: 4,
      name: "Alexandre Chen",
      avatar: "/api/placeholder/150/150",
      subjects: ["Informatique", "Mathématiques"],
      followers: 2100,
      coursesCount: 28,
      bio: "Développeur full-stack et enseignant en programmation avec expertise en IA."
    }
  ]);

  const handleTeacherClick = (teacherId) => {
    console.log(`Naviguer vers la page de l'enseignant ${teacherId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header avec effet de dégradé */}
      <header className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: `linear-gradient(135deg, #fe4a55 0%, #ff8a8f 100%)`,
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Nos enseignants d'exception</h1>
          <p className="mt-3 text-xl text-white opacity-90 max-w-2xl">
            Découvrez les experts qui vous accompagneront dans votre parcours d'apprentissage
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <TeacherComponent id={teacher.id} teacher={teacher}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Teacher;