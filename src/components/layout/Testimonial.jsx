import React, { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('right');
  const intervalRef = useRef(null);
  
  // Augmentation du temps d'attente à 8 secondes
  const autoplayTimeout = 8000;
  
  // Données de témoignages
  const testimonials = [
    {
      img: "/api/placeholder/80/80", // Remplacer par le chemin de vos images
      name: "John Smith",
      role: "Développeur Python",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/api/placeholder/80/80",
      name: "Sarah Taylor",
      role: "Développeuse PHP",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/api/placeholder/80/80",
      name: "David Warner",
      role: "Développeur QA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Fonction pour démarrer l'autoplay
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
        setDirection('right');
      }
    }, autoplayTimeout);
  };

  // Auto-rotation des témoignages
  useEffect(() => {
    startAutoplay();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, testimonials.length]);

  // Fonctions de navigation
  const goToTestimonial = (index) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
    // Redémarrer l'autoplay après une interaction manuelle
    startAutoplay();
  };

  const nextTestimonial = () => {
    setDirection('right');
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    // Redémarrer l'autoplay après une interaction manuelle
    startAutoplay();
  };

  const prevTestimonial = () => {
    setDirection('left');
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    // Redémarrer l'autoplay après une interaction manuelle
    startAutoplay();
  };

  // Gestion des événements tactiles
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStart - touchEnd > 50) {
      // Swipe gauche
      setDirection('right');
      nextTestimonial();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe droit
      setDirection('left');
      prevTestimonial();
    }
  };

  // Calcul des animations pour chaque témoignage
  const getTestimonialAnimation = (index) => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Sur mobile, animation de glissement
      if (index === activeIndex) {
        return 'opacity-100 translate-x-0 transition-all duration-700 ease-out';
      } else if ((activeIndex === 0 && index === testimonials.length - 1) || 
                (index === activeIndex - 1)) {
        // Témoignage précédent
        return direction === 'right' 
          ? 'opacity-0 -translate-x-full transition-all duration-700 ease-out absolute inset-0' 
          : 'opacity-0 translate-x-full transition-all duration-700 ease-out absolute inset-0';
      } else if ((activeIndex === testimonials.length - 1 && index === 0) || 
                (index === activeIndex + 1)) {
        // Témoignage suivant
        return direction === 'right' 
          ? 'opacity-0 translate-x-full transition-all duration-700 ease-out absolute inset-0' 
          : 'opacity-0 -translate-x-full transition-all duration-700 ease-out absolute inset-0';
      } else {
        return 'opacity-0 hidden';
      }
    } else {
      // Sur desktop, afficher 3 témoignages
      const visibleIndices = [];
      for (let i = 0; i < 3; i++) {
        visibleIndices.push((activeIndex + i) % testimonials.length);
      }
      
      if (visibleIndices.includes(index)) {
        const position = visibleIndices.indexOf(index);
        // Animer l'entrée et la sortie des cartes
        return `opacity-100 transform transition-all duration-700 ease-out ${position === 0 ? 'scale-95' : position === 1 ? 'scale-100' : 'scale-95'}`;
      } else {
        return 'opacity-0 scale-90 absolute -left-full transition-all duration-700 ease-out';
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 relative overflow-hidden">
      {/* Formes décoratives animées */}
      <div className="absolute top-10 left-6 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-12 w-20 h-20 bg-yellow-100 rounded-full opacity-30 animate-ping animation-delay-2000"></div>
      <div className="absolute top-1/3 right-6 w-12 h-12 bg-green-100 rounded-full opacity-30 animate-bounce animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-purple-100 rounded-full opacity-30 animate-ping"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre avec animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ce que disent les gens à propos d'eLearniv</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Zone de témoignages avec animation */}
        <div 
          className="relative min-h-[350px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Barre de progression */}
          <div className="w-full h-1 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div 
              className={`h-full bg-blue-500 transition-all ease-linear rounded-full ${isPaused ? 'pause-animation' : ''}`}
              style={{
                width: '100%',
                animation: `progressBar ${autoplayTimeout}ms linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            ></div>
          </div>

          {/* Boutons de navigation (toujours visibles) */}
          <div className="mb-4 flex justify-end space-x-2">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors z-10 group"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors z-10 group"
              aria-label="Prochain témoignage"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Conteneur des témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`
                  ${getTestimonialAnimation(index)}
                  bg-white rounded-xl shadow-lg overflow-hidden
                  hover:shadow-xl
                `}
              >
                <div className="p-6">
                  {/* En-tête avec image et info */}
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className="relative">
                      {/* Effet de halo */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transform scale-110 opacity-70 animate-pulse"></div>
                      <img
                        src={item.img}
                        className="w-20 h-20 rounded-full border-4 border-white relative z-10 object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      <span className="inline-block bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm">{item.role}</span>
                    </div>
                  </div>
                  
                  {/* Texte du témoignage avec animation */}
                  <div className="relative">
                    <span className="absolute -top-2 -left-1 text-5xl text-blue-200 opacity-80">"</span>
                    <p className="text-gray-700 italic relative z-10 mb-2">{item.text}</p>
                    <span className="absolute -bottom-6 -right-1 text-5xl text-blue-200 opacity-80">"</span>
                    
                    {/* Étoiles de notation */}
                    <div className="flex justify-center sm:justify-start mt-6 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Effet de bordure animée */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>
              </div>
            ))}
          </div>

          {/* Indicateurs (points) */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 h-3 bg-blue-600 rounded-full' 
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-300'
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS pour les animations personnalisées */}
      <style jsx>{`
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradientX {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;