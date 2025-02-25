import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour envoyer les données à un backend
    console.log("Données du formulaire :", formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
        <Navbar/>
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 relative pb-6">
          Contacter eLearning
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500 rounded-full" 
                style={{ backgroundColor: '#fe4a55' }}></span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vous avez des questions ou besoin d'informations supplémentaires ? N'hésitez pas à nous contacter ! 
              Notre équipe est à votre disposition pour vous accompagner et répondre à toutes vos demandes. 
              Remplissez le formulaire ou utilisez nos coordonnées pour nous joindre directement.
            </p>
            
            <ul className="space-y-8">
              <ContactInfoItem 
                icon="bx-map" 
                title="Notre adresse" 
                content="2750 Quadra Street Victoria Road, New York, Canada" 
              />
              
              <ContactInfoItem 
                icon="bx-phone-call" 
                title="Contact" 
                content={
                  <>
                    <p className="text-gray-600">
                      Mobile: <a href="tel:+44457895789" className="hover:underline" style={{ color: '#fe4a55' }}>
                        (+44) - 45789 - 5789
                      </a>
                    </p>
                    <p className="text-gray-600">
                      Mail: <a href="mailto:contact@elearning.com" className="hover:underline" style={{ color: '#fe4a55' }}>
                        contact@elearning.com
                      </a>
                    </p>
                  </>
                } 
              />
              
              <ContactInfoItem 
                icon="bx-time-five" 
                title="Disponibilité" 
                content="Lundi-dimanche 24h/24" 
              />
            </ul>
          </div>
          
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Prêt à commencer ?</h2>
            <p className="text-gray-500 text-sm mb-6">
              Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués par *
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Votre nom *"
                  className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ 
                    "--tw-ring-color": "rgba(254, 74, 85, 0.5)",
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000" 
                  }}
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Votre adresse email *"
                  className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ 
                    "--tw-ring-color": "rgba(254, 74, 85, 0.5)",
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000" 
                  }}
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="phoneNumber" 
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required 
                  placeholder="Votre numéro de téléphone *"
                  className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ 
                    "--tw-ring-color": "rgba(254, 74, 85, 0.5)",
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000" 
                  }}
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Écrivez votre message... *"
                  className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ 
                    "--tw-ring-color": "rgba(254, 74, 85, 0.5)",
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000" 
                  }}
                  rows="5"
                />
              </div>
              
              <div>
                <AnimatedButton type="submit" text="Envoyer le message" />
                
                {formSubmitted && (
                  <div className="text-center text-lg mt-4" style={{ color: '#fe4a55' }}>
                    Votre message a été envoyé avec succès!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
    </>
  );
};

// Composant pour les boutons avec animation
const AnimatedButton = ({ type, text }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleClick = (e) => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);
  };

  return (
    <button
      type={type}
      className="relative overflow-hidden rounded-full font-medium py-4 px-8 transition duration-300 transform hover:-translate-y-1 text-white"
      style={{ backgroundColor: '#fe4a55', zIndex: 10 }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {text}
      {isRippling && (
        <span
          className="absolute rounded-full bg-white bg-opacity-30"
          style={{
            left: coords.x,
            top: coords.y,
            width: 300,
            height: 300,
            marginLeft: -150,
            marginTop: -150,
            transform: 'scale(0)',
            animation: 'ripple 600ms linear',
            zIndex: -1
          }}
        />
      )}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
};

// Composant pour les éléments d'information de contact
const ContactInfoItem = ({ icon, title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="relative pl-16">
      <div
        className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
        style={{
          backgroundColor: isHovered ? '#fe4a55' : 'rgba(254, 74, 85, 0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i className={`bx ${icon} text-2xl`} style={{ color: isHovered ? 'white' : '#fe4a55' }} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {typeof content === 'string' ? <p className="text-gray-600">{content}</p> : content}
    </li>
  );
};

export default ContactPage;