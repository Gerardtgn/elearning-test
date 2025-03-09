import React, { useState, useEffect } from "react";
import { GraduationCap, Users, Loader, Upload } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import banner2 from '../../../assets/img/banner/banner-img2.png';
import Swal from 'sweetalert2';
import { getEcoles, getProfiles } from "../../../api/public";
import { getLevels } from "../../../api/public";
import { getClasses } from "../../../api/public";
import { getMatieres } from "../../../api/public";
import { addUser } from "../../../api/publicUpload";


const RegisterPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [classes, setClasses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const [ecoles, setEcoles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    profile_id: '',
    ecole_id: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    image: null,
    password: '',
    confirmPassword: '',
    level_id: '',
    classe_id: '',
    classes: [], // Array of class IDs
    matieres: [], // Array of subject IDs
    bio: '',
    nom_parent: '',
    email_parent: '',
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const fetchedProfiles = await fetchProfiles();
        const fetchedClasses = await fetchClasses();
        const fetchedLevels = await fetchLevels();
        const fetchedMatieres = await fetchMatieres();
        const fetchedEcoles = await fetchEcoles();
        
        // Filter out admin profile
        const filteredProfiles = fetchedProfiles.filter(profile => 
          profile.nom.toLowerCase() !== 'administrateur');
        
        setProfiles(filteredProfiles);
        setClasses(fetchedClasses);
        setLevels(fetchedLevels);
        setMatieres(fetchedMatieres);
        setEcoles(fetchedEcoles);
        
        if (fetchedLevels.length > 0) {
          setFormData(prev => ({ ...prev, level_id: fetchedLevels[0].id }));
        }
        if (fetchedClasses.length > 0) {
          setFormData(prev => ({ ...prev, classe_id: fetchedClasses[0].id }));
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
        Swal.fire({
          title: 'Erreur !',
          text: 'Impossible de charger les données nécessaires.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await getProfiles();
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des profiles :', error);
      return [];
    }
  }

  const fetchEcoles = async () => {
    try {
      const response = await getEcoles();
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des éoles :', error);
      return [];
    }
  }

  const fetchClasses = async () => {
    try {
      const response = await getClasses();
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des classes :', error);
      return [];
    }
  }

  const fetchLevels = async () => {
    try {
      const response = await getLevels();
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des niveaux :', error);
      return [];
    }
  }

  const fetchMatieres = async () => {
    try {
      const response = await getMatieres();
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération des matières :', error);
      return [];
    }
  }

  const handleProfileSelect = (profileId) => {
    const profile = profiles.find(p => p.id === profileId);
    setSelectedProfile(profile.nom);
    setFormData({ ...formData, profile_id: profileId });
    setStep(1);
  };

  const handleChange = (e) => {
    const { name, value, type, files, selectedOptions } = e.target;

    if (type === 'file') {
      if (files[0]) {
        setFormData(prev => ({
          ...prev,
          [name]: files[0]
        }));
        
        // Create preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(files[0]);
      }
    } else if (type === 'select-multiple') {
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

    // Clear error for the field being changed
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    const requiredFields = ['nom', 'prenom', 'email', 'password', 'confirmPassword'];
    
    if (selectedProfile === 'enseignant') {
      requiredFields.push('level_id', 'bio');
      
      // Validate that at least one matiere and one class is selected
      if (formData.matieres.length === 0) {
        newErrors.matieres = 'Sélectionnez au moins une matière';
      }
      
      if (formData.classes.length === 0) {
        newErrors.classes = 'Sélectionnez au moins une classe';
      }
    } else if (selectedProfile === 'apprenant') {
      requiredFields.push('classe_id', 'ecole_id', 'nom_parent', 'email_parent');
    }
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Ce champ est requis';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (formData.email_parent && !/\S+@\S+\.\S+/.test(formData.email_parent)) {
      newErrors.email_parent = 'Email du parent invalide';
    }
    
    // Password validation
    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    // Phone validation
    if (formData.telephone && !/^\d{8,15}$/.test(formData.telephone.replace(/[+\s-]/g, ''))) {
      newErrors.telephone = 'Numéro de téléphone invalide';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1: // Personal info
        return validatePersonalInfo();
      case 2: // Role specific info
        return validateRoleInfo();
      case 3: // Password
        return validatePassword();
      default:
        return true;
    }
  };

  const validatePersonalInfo = () => {
    const newErrors = {};
    
    if (!formData.nom) newErrors.nom = 'Ce champ est requis';
    if (!formData.prenom) newErrors.prenom = 'Ce champ est requis';
    if (!formData.email) newErrors.email = 'Ce champ est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    
    if (formData.telephone && !/^\d{8,15}$/.test(formData.telephone.replace(/[+\s-]/g, ''))) {
      newErrors.telephone = 'Numéro de téléphone invalide';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRoleInfo = () => {
    const newErrors = {};
    
    if (selectedProfile === 'apprenant') {
      if (!formData.classe_id) newErrors.classe_id = 'Ce champ est requis';
      if (!formData.ecole_id) newErrors.ecole_id = 'Ce champ est requis';
      if (!formData.nom_parent) newErrors.nom_parent = 'Ce champ est requis';
      if (!formData.email_parent) newErrors.email_parent = 'Ce champ est requis';
      else if (!/\S+@\S+\.\S+/.test(formData.email_parent)) newErrors.email_parent = 'Email invalide';
    } else if (selectedProfile === 'enseignant') {
      if (!formData.level_id) newErrors.level_id = 'Ce champ est requis';
      if (!formData.bio) newErrors.bio = 'Ce champ est requis';
      if (formData.matieres.length === 0) newErrors.matieres = 'Sélectionnez au moins une matière';
      if (formData.classes.length === 0) newErrors.classes = 'Sélectionnez au moins une classe';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    
    if (!formData.password) newErrors.password = 'Ce champ est requis';
    else if (formData.password.length < 8) newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Ce champ est requis';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const formDataToSend = new FormData();
    
    // Append form fields to FormData
    Object.keys(formData).forEach(key => {
      if (key !== 'confirmPassword' && formData[key] !== null && formData[key] !== undefined) {
        // Handle arrays specifically
        if (Array.isArray(formData[key])) {
          formData[key].forEach(value => {
            formDataToSend.append(`${key}[]`, value);
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    });
    
    try {
      setLoading(true);
      await addUser(formDataToSend);
      //console.log(formDataToSend);
      setLoading(false);
      
      Swal.fire({
        title: 'Succès !',
        text: 'Inscription effectuée avec succès.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      navigate('/login');
    } catch (error) {
      setLoading(false);
      
      // Handle API validation errors
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        Swal.fire({
          title: 'Erreur !',
          text: 'Une erreur est survenue lors de l\'inscription.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const renderProfileSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Choisissez votre profil
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map(profile => (
          <button
            key={profile.id}
            type="button"
            onClick={() => handleProfileSelect(profile.id)}
            className={`p-6 text-left border rounded-lg hover:border-indigo-500 transition-colors ${
              formData.profile_id === profile.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
            }`}
          >
            {profile.nom === 'enseignant' ? (
              <GraduationCap className="w-8 h-8 text-indigo-600 mb-4" />
            ) : (
              <Users className="w-8 h-8 text-indigo-600 mb-4" />
            )}
            <h3 className="text-lg font-medium text-gray-900">{profile.nom.charAt(0).toUpperCase() + profile.nom.slice(1)}</h3>
            <p className="mt-2 text-sm text-gray-500">
              {profile.nom === 'enseignant' ? 
                'Créez des cours, partagez votre savoir et accompagnez les apprenants' : 
                'Accédez aux cours, suivez votre progression et interagissez avec les enseignants'}
            </p>
          </button>
        ))}
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
          <div>
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.prenom ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.prenom && <p className="mt-1 text-sm text-red-500">{errors.prenom}</p>}
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.nom ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
          </div>
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.telephone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.telephone && <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>}
        </div>
        
        <div>
          <div className="flex items-center space-x-2">
            <label className="block w-full">
              <div className={`w-full px-4 py-2 border rounded-md flex items-center cursor-pointer ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              }`}>
                <Upload className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-500">
                  {formData.image ? formData.image.name : "Choisir une photo de profil"}
                </span>
              </div>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            
            {imagePreview && (
              <div className="h-12 w-12 rounded-full overflow-hidden border border-gray-200">
                <img src={imagePreview} alt="Aperçu" className="h-full w-full object-cover" />
              </div>
            )}
          </div>
          {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
        </div>
      </div>
    </div>
  );

  const renderRoleSpecificInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        {selectedProfile === 'enseignant' ? 'Informations professionnelles' : 'Informations scolaires'}
      </h2>
      <div className="space-y-4">
        {selectedProfile === 'enseignant' ? (
          <>
            <div>
              <label htmlFor="level_id" className="block text-sm font-medium text-gray-700 mb-1">
                Niveau d'enseignement
              </label>
              <select
                id="level_id"
                name="level_id"
                value={formData.level_id}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.level_id ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Sélectionner un niveau</option>
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.nom}
                  </option>
                ))}
              </select>
              {errors.level_id && <p className="mt-1 text-sm text-red-500">{errors.level_id}</p>}
            </div>
            
            <div>
              <label htmlFor="classes" className="block text-sm font-medium text-gray-700 mb-1">
                Classes enseignées
              </label>
              <select
                id="classes"
                name="classes"
                multiple
                value={formData.classes}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.classes ? 'border-red-500' : 'border-gray-300'
                }`}
                size="3"
              >
                {classes.map((classe) => (
                  <option key={classe.id} value={classe.id}>
                    {classe.nom}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Maintenez la touche Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs classes.
              </p>
              {errors.classes && <p className="mt-1 text-sm text-red-500">{errors.classes}</p>}
            </div>
            
            <div>
              <label htmlFor="matieres" className="block text-sm font-medium text-gray-700 mb-1">
                Matières enseignées
              </label>
              <select
                id="matieres"
                name="matieres"
                multiple
                value={formData.matieres}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.matieres ? 'border-red-500' : 'border-gray-300'
                }`}
                size="3"
              >
                {matieres.map((matiere) => (
                  <option key={matiere.id} value={matiere.id}>
                    {matiere.nom}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Maintenez la touche Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs matières.
              </p>
              {errors.matieres && <p className="mt-1 text-sm text-red-500">{errors.matieres}</p>}
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio / Description
              </label>
              <textarea
                id="bio"
                name="bio"
                rows="4"
                placeholder="Parlez de votre parcours, vos méthodes d'enseignement, votre expérience..."
                value={formData.bio}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.bio ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.bio && <p className="mt-1 text-sm text-red-500">{errors.bio}</p>}
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="classe_id" className="block text-sm font-medium text-gray-700 mb-1">
                Classe
              </label>
              <select
                id="classe_id"
                name="classe_id"
                value={formData.classe_id}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.classe_id ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Sélectionner une classe</option>
                {classes.map((classe) => (
                  <option key={classe.id} value={classe.id}>
                    {classe.nom}
                  </option>
                ))}
              </select>
              {errors.classe_id && <p className="mt-1 text-sm text-red-500">{errors.classe_id}</p>}
            </div>
            {/* Sélection de l'école */}
            <div>
              <label htmlFor="ecole_id" className="block text-sm font-medium text-gray-700 mb-1">
                Ecole
              </label>
              <select
                id="ecole_id"
                name="ecole_id"
                value={formData.ecole_id}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.ecole_id ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Sélectionner une école</option>
                {ecoles.map((ecole) => (
                  <option key={ecole.id} value={ecole.id}>
                    {ecole.nom}
                  </option>
                ))}
              </select>
              {errors.ecole_id && <p className="mt-1 text-sm text-red-500">{errors.ecole_id}</p>}
            </div>
            
            <div>
              <input
                type="text"
                name="nom_parent"
                placeholder="Nom du parent/tuteur"
                value={formData.nom_parent}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.nom_parent ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.nom_parent && <p className="mt-1 text-sm text-red-500">{errors.nom_parent}</p>}
            </div>
            
            <div>
              <input
                type="email"
                name="email_parent"
                placeholder="Email du parent/tuteur"
                value={formData.email_parent}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.email_parent ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email_parent && <p className="mt-1 text-sm text-red-500">{errors.email_parent}</p>}
            </div>
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
        <div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe (8 caractères minimum)"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>
        
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderProfileSelection();
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

  // Progress bar
  const progress = (step / 3) * 100;

  return (
    <div className="flex min-h-screen">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader className="w-12 h-12 animate-spin text-indigo-600" />
        </div>
      )}
      
      <div className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner2})` }}
      ></div>
      
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-2xl mx-auto p-6 bg-white">
        <div className="rounded-lg shadow-lg overflow-hidden p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
            Inscription
          </h1>
          
          {step > 0 && (
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Profil</span>
                <span>Informations</span>
                <span>Détails</span>
                <span>Sécurité</span>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStepContent()}

            <div className="flex justify-between mt-8">
              {step > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Précédent
                </button>
              )}
              
              {step === 0 ? (
                <div></div>
              ) : step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  S'inscrire
                </button>
              )}
            </div>
          </form>
          
          {step === 0 && (
            <div className="mt-6 text-center text-sm text-gray-500">
              Vous avez déjà un compte ?{" "}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Connectez-vous
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;