import React from 'react';
import { ArrowRight, BookOpen, Video, Users, Award, HeartHandshake } from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: <BookOpen size={36} />,
      title: "Cours Personnalisés",
      description: "Des programmes adaptés à chaque étudiant selon son niveau et ses objectifs académiques."
    },
    {
      icon: <Video size={36} />,
      title: "Formations en Ligne",
      description: "Accès illimité à notre plateforme de cours vidéo et ressources pédagogiques."
    },
    {
      icon: <Users size={36} />,
      title: "Ateliers Collaboratifs",
      description: "Sessions de groupe pour développer l'esprit d'équipe et apprendre par le partage."
    },
    {
      icon: <Award size={36} />,
      title: "Certification Reconnue",
      description: "Obtenez des certifications valorisées par les employeurs et institutions académiques."
    },
    {
      icon: <HeartHandshake size={36} />,
      title: "Mentorat Professionnel",
      description: "Accompagnement par des experts du secteur pour orienter votre parcours professionnel."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-16">
        {/* <h1 className="text-4xl font-bold mb-6">Nos Services</h1> */}
        <h2 className="text-2xl mb-8" style={{ color: '#fe4a55' }}>
          Que proposons-nous concrètement à nos étudiants ?
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Notre mission est de transformer l'expérience d'apprentissage en offrant des services éducatifs innovants, 
          personnalisés et axés sur les résultats concrets. Découvrez comment nous pouvons vous accompagner vers l'excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md border-t-4 hover:shadow-xl transition-shadow duration-300"
            style={{ borderTopColor: '#fe4a55' }}
          >
            <div style={{ color: '#fe4a55' }} className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="mb-4 text-gray-600">{service.description}</p>
            <button 
              className="flex items-center text-sm font-medium transition-colors duration-200"
              style={{ color: '#fe4a55' }}
            >
              En savoir plus <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg border-l-4" style={{ borderLeftColor: '#fe4a55' }}>
        <h3 className="text-2xl font-bold mb-4">Notre Engagement Envers l'Excellence</h3>
        <p className="mb-6">
          Nous croyons que chaque étudiant mérite un enseignement de qualité supérieure. Notre équipe de formateurs experts 
          s'engage à fournir un accompagnement personnalisé et des méthodes pédagogiques innovantes pour garantir votre réussite.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium"
            style={{ backgroundColor: '#fe4a55' }}
          >
            Prendre rendez-vous
          </button>
          <button 
            className="px-6 py-3 rounded-md font-medium border"
            style={{ borderColor: '#fe4a55', color: '#fe4a55' }}
          >
            Consulter nos forfaits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;