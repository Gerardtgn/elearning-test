import React, { useState, useEffect } from "react";
import { GraduationCap, Users, Loader } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import banner2 from '../../../assets/img/banner/banner-img2.png';
import Swal from 'sweetalert2';
const RegisterPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [classes, setClasses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const [role, setRole] = useState(null);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    profile: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    level_id: '',
    classes: [],
    matieres: [],
    classe_id: '',
    nom_parent: '',
    email_parent: '',
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const fetchedRoles = await fetchRoles();
      const fetchedClasses = await fetchClasses();
      const fetchedLevels = await fetchLevels();
      const fetchedMatieres = await fetchMatieres();
      setLoading(false);
      setRoles(fetchedRoles);
      setClasses(fetchedClasses);
      setLevels(fetchedLevels);
      setMatieres(fetchedMatieres);
      if (fetchedLevels.length > 0) {
        setFormData(prev => ({ ...prev, level_id: fetchedLevels[0].id }));
      }
      if (fetchedClasses.length > 0) {
        setFormData(prev => ({ ...prev, classe_id: fetchedClasses[0].id }));
      }
    };

    loadData();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get-roles');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles :', error);
      return [];
    }
  }

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get-classes');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des classes :', error);
      return [];
    }
  }

  const fetchLevels = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get-levels');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des niveaux :', error);
      return [];
    }
  }

  const fetchMatieres = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get-matieres');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des matieres :', error);
      return [];
    }
  }

  const handleRoleSelect = (selectedRole) => {
    const jsonRole = roles.find((role) => role.profile === selectedRole);
    setRole(jsonRole.profile);
    setFormData({ ...formData, role: jsonRole.id });
    setStep(1);
  };

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;

    if (type === 'select-multiple') {
      const selectedValues = Array.from(selectedOptions).map(option => option.value);
      setFormData(prev => ({
        ...prev,
        [name]: selectedValues
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default submission

    const data = {
      profile_id: formData.role,
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone ?? null,
      password: formData.password,
      level_id: formData.level_id,
      classes: formData.classes ?? null,
      matieres: formData.matieres ?? null,
      classe_id: (role == 'enseignant')? null: formData.classe_id,
      nom_parent: formData.nom_parent ?? null,
      email_parent: formData.email_parent ?? null,
    };

    try {
      setLoading(true);
      await axios.post('http://localhost:8000/api/register', data);
      setLoading(false);
      //alert('Inscription réussie');
      Swal.fire({
        title: 'Succès !',
        text: 'Inscription éffectuée avec succès.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate('/login'); // Use navigate instead of redirect
    } catch (error) {
      //console.error('Erreur lors de l\'inscription :', error);
      //alert('Erreur lors de l\'inscription');
      setLoading(false);
        Swal.fire({
          title: 'Erreur !',
          text: 'Une erreur est survenue.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
    }
  };

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Choisissez votre profile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          type="button"
          onClick={() => handleRoleSelect('enseignant')}
          className={`p-6 text-left border rounded-lg hover:border-indigo-500 transition-colors ${
            role === 'enseignant' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
          }`}
        >
          <GraduationCap className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Enseignant</h3>
          <p className="mt-2 text-sm text-gray-500">
            Créez des cours, partagez votre savoir et accompagnez les apprenants
          </p>
        </button>

        <button
          type="button"
          onClick={() => handleRoleSelect('apprenant')}
          className={`p-6 text-left border rounded-lg hover:border-indigo-500 transition-colors ${
            role === 'apprenant' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
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
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone"
          value={formData.telephone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );

  const renderRoleSpecificInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        {role === 'enseignant' ? 'Informations professionnelles' : 'Informations scolaires'}
      </h2>
      <div className="space-y-4">
        {role === 'enseignant' ? (
          <>
            <select
              id="level_id"
              name="level_id"
              value={formData.level_id}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.nom}
                </option>
              ))}
            </select>

            {((levels.find((level) => level.nom === 'cours primaire')).id != formData.level_id) &&  <select
                id="matieres"
                name="matieres"
                value={formData.matieres}
                multiple
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                {matieres.map((matiere) => (
                  <option key={matiere.id} value={matiere.id}>
                    {matiere.nom}
                  </option>
                ))}
              </select>}

            <select
              id="classes"
              name="classes"
              value={formData.classes}
              multiple
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              {classes
                // .filter((classe) => classe.level_id === formData.level_id)
                .map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.nom}
                </option>
              ))}
            </select>
          </>
        ) : (
          <>
            <select
              id="classe_id"
              name="classe_id"
              value={formData.classe_id}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              {classes.map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.nom}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="nom_parent"
              placeholder="Nom du parent/tuteur"
              value={formData.nom_parent}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <input
              type="email"
              name="email_parent"
              placeholder="Email du parent/tuteur"
              value={formData.email_parent}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
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
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
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

  return (
    <div className="flex min-h-screen">
       {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader className="w-12 h-12 animate-spin text-indigo-600" />
        </div>
      )}
      <div className="hidden lg:flex w-1/2 bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${banner2})` }}
      ></div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-lg mx-auto p-6 bg-white">
        <div className="rounded-lg shadow-lg overflow-hidden p-8">
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