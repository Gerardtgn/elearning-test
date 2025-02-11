import React, { useState } from "react";
import banner2 from '../../../assets/img/banner/banner-img2.png';

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    day: "",
    month: "",
    year: "",
    username: "",
    password: ""
  });

  const steps = ["Nom", "Contact", "Anniversaire", "Identifiants"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (validateStep()) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const validateStep = () => {
    return true; // Ajoute une logique de validation ici si nécessaire
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire soumis avec succès !");
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner2})` }}></div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-lg mx-auto p-6 bg-white">
        <div className='rounded-lg shadow-lg overflow-hidden p-8'>
          <h2 className="text-2xl font-bold text-center">{steps[currentStep]}</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            {currentStep === 0 && (
              <>
                <input type="text" name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
                <input type="text" name="lastName" placeholder="Nom de famille" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
              </>
            )}
            {currentStep === 1 && (
              <>
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
                <input type="text" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
              </>
            )}
            {currentStep === 2 && (
              <>
                <input type="text" name="day" placeholder="Jour" value={formData.day} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
                <input type="text" name="month" placeholder="Mois" value={formData.month} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
                <input type="text" name="year" placeholder="Année" value={formData.year} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
              </>
            )}
            {currentStep === 3 && (
              <>
                <input type="text" name="username" placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
                <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded" />
              </>
            )}
            <div className="flex justify-between mt-4">
              {currentStep > 0 && (
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Précédent</button>
              )}
              {currentStep < steps.length - 1 ? (
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Suivant</button>
              ) : (
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Soumettre</button>
              )}
            </div>
            <div style={{"textAlign":"center", "marginTop":"40px"}}>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
