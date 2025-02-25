import React from 'react';

const Courses = () => {
  // Données de cours (à remplacer par vos données réelles)
  const courses = [
    {
      id: 1,
      title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
      instructor: 'Sarah Taylor',
      price: '$49',
      lessons: 20,
      students: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 2,
      title: 'Python for Finance: Investment Fundamentals & Data Analytics',
      instructor: 'Alex Morgan',
      price: '$39',
      lessons: 15,
      students: 75,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    // Ajoutez d'autres cours ici
  ];

  // Données de TD (à remplacer par vos données réelles)
  const tds = [
    {
      id: 1,
      title: 'TD 1: Introduction à Python',
      description: 'Exercices pratiques sur les bases de Python.',
      link: '/tds/td1', // Lien vers le TD
    },
    {
      id: 2,
      title: 'TD 2: Algorithmes de Machine Learning',
      description: 'Implémentation d\'algorithmes de ML avec Python.',
      link: '/tds/td2', // Lien vers le TD
    },
    // Ajoutez d'autres TD ici
  ];

  return (
    <div className="p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Nos Cours Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border rounded p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="italic text-gray-600 mb-1">Par {course.instructor}</p>
              <p className="font-bold text-blue-600 mb-1">{course.price}</p>
              <p className="text-sm text-gray-700 mb-1">{course.lessons} Lessons</p>
              <p className="text-sm text-gray-700 mb-1">{course.students} Students</p>
              <p className="text-sm text-gray-800 mb-2">{course.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir le cours
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-4">Travaux Dirigés (TD)</h2>
        <ul className="list-none p-0">
          {tds.map((td) => (
            <li key={td.id} className="border rounded p-3 mb-2">
              <h3 className="text-lg font-semibold">{td.title}</h3>
              <p className="text-gray-700">{td.description}</p>
              <a href={td.link} className="text-blue-600 hover:underline">
                Accéder au TD
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Courses;