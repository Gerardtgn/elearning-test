import React from 'react';
import { Heart, BookOpen, Users } from 'lucide-react';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Mathématiques - Algèbre linéaire",
      description: "Maîtrisez les concepts fondamentaux de l'algèbre linéaire avec des exercices pratiques et des exemples concrets.",
      level: "CM1",
      subject: "Mathématiques",
      instructor: {
        name: "Alex Morgan",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 2,
      title: "Français - Grammaire avancée",
      description: "Perfectionnez votre maîtrise de la langue française avec des cours structurés et des exercices pratiques.",
      level: "CM2",
      subject: "Français",
      instructor: {
        name: "Sarah Taylor",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      id: 3,
      title: "Sciences - Introduction à la physique",
      description: "Découvrez les principes fondamentaux de la physique à travers des expériences et des démonstrations interactives.",
      level: "CM2",
      subject: "Sciences",
      instructor: {
        name: "David Warner",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Devenez meilleur avec nous</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Les cours populaires d'e-Learning
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explorez tous nos cours et choisissez ceux qui vous conviennent pour vous inscrire et commencer à apprendre avec nous !
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 relative">
                <video className="h-48 w-full object-cover" poster={course.thumbnail} controls>
                  <source src="path/to/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-indigo-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-sm font-medium text-gray-900">{course.level}</span>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <img className="h-10 w-10 rounded-full" src={course.instructor.avatar} alt={course.instructor.name} />
                    <p className="ml-3 text-sm font-medium text-indigo-600">{course.instructor.name}</p>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <a href="#" className="hover:text-indigo-600">
                      {course.title}
                    </a>
                  </h3>
                  <p className="text-base text-gray-500">{course.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.subject}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Voir tous les cours
          </a>
        </div>
      </div>
    </div>
  );
}