import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, X, Eye, Download, Loader, ArrowLeft, Calendar, Clock, User, BookOpen, FileText } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { acceptSupport } from '../../../api/confirmation';

export function NotificationDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { uid } = useParams();
  const token = localStorage.getItem('token');
  const [notification, setNotification] = useState(null);
  const [matieresSelected, setMatieresSelected] = useState([]);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetchNotification();
  }, []);

  const fetchNotification = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/get-notification/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNotification(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la notification', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions).map(option => option.value);
    setMatieresSelected(selectedValues);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleAccept = async () => {
    setProcessing(true);
    try {
      if (notification.type === 'EnseignantInscritNotification') {
        // Validation pour s'assurer qu'au moins une matière est sélectionnée
        if (matieresSelected.length === 0) {
          Swal.fire({
            title: 'Attention !',
            text: 'Veuillez sélectionner au moins une classe à affecter à l\'enseignant',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
          setProcessing(false);
          return;
        }

        const data = {
          'enseignant_id': notification.data.enseignant_id,
          'statut': 'accepté',
          'matieresSelected': matieresSelected,
          'notification' :notification.id
        };
        await axios.post('http://localhost:8000/api/accept-user', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } else if (notification.type === 'ValidateSupport') {
        const data = {
          'statut': 'accepté',
          'titre': notification.support.titre,
          'type': notification.data.type,
          'support_id': notification.data.support_id,
          'enseignant_id': notification.support.user.id,
          'notification' :notification.id
        };
        await acceptSupport(data);
      }
      
      Swal.fire({
        title: 'Succès !',
        text: 'Confirmation effectuée avec succès',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn-success'
        }
      });
      
      navigate('/dashboard');
    } catch (error) {
      Swal.fire({
        title: 'Erreur !',
        text: 'Une erreur est survenue, veuillez réessayer',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setProcessing(false);
    }
  };

  const handleReject = async () => {
    // Confirmation avant rejet
    const result = await Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Voulez-vous vraiment refuser cette demande ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, refuser',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    });
    
    if (result.isConfirmed) {
      setProcessing(true);
      try {
        if (notification.type === 'EnseignantInscritNotification') {
          const data = {
            'enseignant_id': notification.data.enseignant_id,
            'statut': 'refusé',
            'notification': notification.id
          };
          await axios.post('http://localhost:8000/api/accept-user', data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        } else if (notification.type === 'ValidateSupport') {
          const data = {
            'statut': 'refusé',
            'titre': notification.support.titre,
            'type': notification.data.type,
            'support_id': notification.data.support_id,
            'enseignant_id': notification.support.chapitres_enseigne.matieres_classes_enseignant.user.id,
            'notification' :notification.id
          };
          await axios.post('http://localhost:8000/api/accept-support', data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }
        
        Swal.fire({
          title: 'Succès !',
          text: 'Demande refusée avec succès',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        
        navigate('/dashboard');
      } catch (error) {
        Swal.fire({
          title: 'Erreur !',
          text: 'Une erreur est survenue',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        setProcessing(false);
      }
    }
  };

  const getNotificationIcon = () => {
    if (!notification) return <Bell className="w-6 h-6 text-white" />;
    
    switch(notification.type) {
      case 'EnseignantInscritNotification':
        return <User className="w-6 h-6 text-white" />;
      case 'ValidateSupport':
        return <FileText className="w-6 h-6 text-white" />;
      case 'ReturnSupportResponse':
        return <BookOpen className="w-6 h-6 text-white" />;
      default:
        return <Bell className="w-6 h-6 text-white" />;
    }
  };

  const getNotificationTitle = () => {
    if (!notification) return 'Chargement...';
    
    switch(notification.type) {
      case 'EnseignantInscritNotification':
        return 'Demande d\'inscription enseignant';
      case 'ValidateSupport':
        return 'Validation de contenu pédagogique';
      case 'ReturnSupportResponse':
        return 'Réponse au support';
      default:
        return notification.type || 'Notification';
    }
  };

  const getNotificationColor = () => {
    if (!notification) return 'bg-gray-600';
    
    switch(notification.type) {
      case 'EnseignantInscritNotification':
        return 'bg-blue-600';
      case 'ValidateSupport':
        return 'bg-purple-600';
      case 'ReturnSupportResponse':
        return 'bg-green-600';
      default:
        return 'bg-indigo-600';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des informations...</p>
        </div>
      </div>
    );
  }

  if (!notification) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Notification non trouvée</h2>
          <p className="text-gray-500 mb-6">Cette notification n'existe pas ou a été supprimée.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Retour au tableau de bord
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header avec bouton retour et titre */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${getNotificationColor()} mr-3`}>
              {getNotificationIcon()}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{getNotificationTitle()}</h1>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{notification.created_at ? formatDate(notification.created_at) : 'Date inconnue'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Contenu spécifique selon le type de notification */}
          {notification.type === 'EnseignantInscritNotification' && (
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="bg-blue-50 p-4 rounded-lg mb-6 md:mb-0 md:mr-6 md:w-1/3">
                  <h3 className="font-medium text-lg text-gray-900 mb-3">Informations enseignant</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Nom complet</p>
                      <p className="text-base font-semibold text-gray-900">
                        {notification.user?.nom} {notification.user?.prenom}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-base text-gray-900">{notification.user?.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Téléphone</p>
                      <p className="text-base text-gray-900">{notification.user?.telephone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Niveau</p>
                      <p className="text-base text-gray-900">{notification.user?.level?.nom}</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:flex-1">
                  <div className="mb-6">
                    <h3 className="font-medium text-lg text-gray-900 mb-3">Compétences et préférences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500 mb-2">Matière(s) enseignée(s)</p>
                        <div className="space-y-1">
                          {notification.user?.matieres_enseignants?.map((mat) => (
                            <div key={mat.id} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              <span className="text-gray-900">{mat.matiere?.nom}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500 mb-2">Classes préférées</p>
                        <div className="space-y-1">
                          {notification.user?.preferences?.map((pref) => (
                            <div key={pref.id} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-gray-900">{pref.classe?.nom}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg text-gray-900 mb-3">Affectation de classes</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Sélectionnez les classes et matières que vous souhaitez affecter à cet enseignant :
                    </p>
                    <select
                      id="matieresSelected"
                      name="matieresSelected"
                      value={matieresSelected}
                      multiple
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      size={notification.availableClasses?.length > 0 ? Math.min(5, notification.availableClasses.length) : 3}
                    >
                      {notification.availableClasses?.map((availableClasse) => (
                        <option key={availableClasse.id} value={availableClasse.id}>
                          {availableClasse.matiere?.nom} - {availableClasse.classe?.nom}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-2">
                      * Maintenez la touche Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs classes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {notification.type === 'ValidateSupport' && (
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="bg-purple-50 p-4 rounded-lg mb-6 md:mb-0 md:mr-6 md:w-1/3">
                  <h3 className="font-medium text-lg text-gray-900 mb-3">Informations du contenu</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Enseignant</p>
                      <p className="text-base font-semibold text-gray-900">
                        {notification.support?.user?.nom} {notification.support?.user?.prenom}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Titre</p>
                      <p className="text-base text-gray-900">{notification.support?.titre || 'Non spécifié'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Type</p>
                      <p className="text-base text-gray-900 capitalize">{notification.data.type || 'Non spécifié'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Date de soumission</p>
                      <p className="text-base text-gray-900">
                        {notification.support?.created_at ? new Date(notification.support.created_at).toLocaleDateString('fr-FR') : 'Non spécifiée'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:flex-1">
                  <div className="mb-6">
                    <h3 className="font-medium text-lg text-gray-900 mb-3">Détails du cours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Classe</p>
                        <p className="text-base text-gray-900">{notification.support?.chapitres_enseigne?.matieres_classe?.classe?.nom}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">Matière</p>
                        <p className="text-base text-gray-900">{notification.support?.chapitres_enseigne?.matieres_classe?.matiere?.nom}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-medium text-gray-500">Chapitre</p>
                      <p className="text-base text-gray-900">{notification.support?.chapitres_enseigne?.chapitre?.nom}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-500">Description</p>
                      <p className="text-base text-gray-900 mt-1">
                        {notification.support?.description || 'Aucune description fournie'}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg text-gray-900 mb-3">Contenu du support</h3>
                    
                    {notification.data.type === 'lecon' ? (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500 mb-2">Vidéo du cours</p>
                        <video
                          className="w-full rounded-lg shadow-sm"
                          controls
                          src={`http://localhost:8000/storage/${notification.support?.contenu}`}
                          poster="/placeholder-video.jpg"
                        >
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-500 mb-3">Fichiers attachés</p>
                          
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors">
                            <div className="flex items-center">
                              <FileText className="w-5 h-5 text-blue-500 mr-3" />
                              <div>
                                <span className="text-sm font-medium text-gray-900 block">
                                  {notification.support?.contenu?.split("/").pop() || 'Document'}
                                </span>
                                <span className="text-xs text-gray-500">
                                  Document principal
                                </span>
                              </div>
                            </div>
                            <button 
                              className="flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-700 hover:bg-blue-200 transition-colors"
                              onClick={() => {
                                const link = document.createElement("a");
                                link.href = `http://localhost:8000/storage/${notification.support?.contenu}`;
                                link.download = notification.support?.contenu.split("/").pop();
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        {notification.support?.correction && (
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Download className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{notification.support?.correction}</span>
                    </div>
                    <button
                      className="text-indigo-600 hover:text-indigo-800"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = `http://localhost:8000/storage/${notification.support?.correction}`;
                        link.download = notification.support?.correction.split("/").pop(); // Nom du fichier
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {notification.type === 'ReturnSupportResponse' && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">A savoir</p>
                  <p className="text-base text-gray-900 mt-1">
                    {notification.data.message}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {notification.type === 'EnseignantInscritNotification' && !notification.user?.statut && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleReject}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <X className="w-4 h-4 mr-2" />
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Check className="w-4 h-4 mr-2" />
                Accepter
              </button>
            </div>
          </div>
        )}

        {notification.type === 'ValidateSupport' && !notification.support?.approbation && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleReject}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <X className="w-4 h-4 mr-2" />
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Check className="w-4 h-4 mr-2" />
                Accepter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationDetail;
