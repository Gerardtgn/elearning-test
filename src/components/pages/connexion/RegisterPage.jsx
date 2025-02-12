import React, { useState } from "react";
import { GraduationCap, Users } from 'lucide-react';
import banner2 from '../../../assets/img/banner/banner-img2.png';

const RegisterPage = () => {
  const [role, setRole] = useState(null);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    // Champs spécifiques aux enseignants
    subject: '',
    experience: '',
    education: '',
    // Champs spécifiques aux apprenants
    grade: '',
    parentName: '',
    parentEmail: ''
  });

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setFormData({ ...formData, role: selectedRole });
    setStep(1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Choisissez votre rôle
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => handleRoleSelect('teacher')}
          className={`p-6 text-left border rounded-lg hover:border-indigo-500 transition-colors ${
            role === 'teacher' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
          }`}
        >
          <GraduationCap className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Enseignant</h3>
          <p className="mt-2 text-sm text-gray-500">
            Créez des cours, partagez votre savoir et accompagnez les apprenants
          </p>
        </button>

        <button
          onClick={() => handleRoleSelect('student')}
          className={`p-6 text-left border rounded-lg hover:border-indigo-500 transition-colors ${
            role === 'student' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
          }`}
        >
          <Users className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Apprenant</h3>
          <p className="mt-2 text-sm text-gray-500">
            Accédez aux cours, suivez votre progression et interagissez avec les enseignants
          </p>
        </button>
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Informations personnelles
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );

  const renderRoleSpecificInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        {role === 'teacher' ? 'Informations professionnelles' : 'Informations scolaires'}
      </h2>
      <div className="space-y-4">
        {role === 'teacher' ? (
          <>
            <input
              type="text"
              name="subject"
              placeholder="Matière enseignée"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="experience"
              placeholder="Années d'expérience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="education"
              placeholder="Diplôme le plus élevé"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="grade"
              placeholder="Niveau scolaire"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="parentName"
              placeholder="Nom du parent/tuteur"
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="email"
              name="parentEmail"
              placeholder="Email du parent/tuteur"
              value={formData.parentEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </>
        )}
      </div>
    </div>
  );

  const renderPassword = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Sécurité du compte
      </h2>
      <div className="space-y-4">
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderRoleSelection();
      case 1:
        return renderPersonalInfo();
      case 2:
        return renderRoleSpecificInfo();
      case 3:
        return renderPassword();
      default:
        return null;
    }
  };
  // const [currentStep, setCurrentStep] = useState(0);
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   day: "",
  //   month: "",
  //   year: "",
  //   username: "",
  //   password: ""
  // });

  // const steps = ["Nom", "Contact", "Anniversaire", "Identifiants"];

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const nextStep = () => {
  //   if (validateStep()) setCurrentStep((prev) => prev + 1);
  // };

  // const prevStep = () => {
  //   setCurrentStep((prev) => prev - 1);
  // };

  // const validateStep = () => {
  //   return true; // Ajoute une logique de validation ici si nécessaire
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Formulaire soumis avec succès !");
  // };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-no-repeat bg-center" style={{ backgroundImage: `url(${banner2})` }}></div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-lg mx-auto p-6 bg-white">
        <div className='rounded-lg shadow-lg overflow-hidden p-8'>
          <h2 className="text-2xl font-bold text-center"></h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStepContent()}

            {step > 0 && (
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Précédent
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    S'inscrire
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
