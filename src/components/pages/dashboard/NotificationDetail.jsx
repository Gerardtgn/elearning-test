import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, X, Eye, Download, Loader } from 'lucide-react';
import axios from 'axios';

export function NotificationDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { uid } = useParams();
  const token = localStorage.getItem('token');
  const [notification, setNotification] = useState(null);
  const [matieresSelected, setMatieresSelected] = useState([]);

  useEffect(() => {
    fetchNotification();
  }, []);

  const fetchNotification = async () => {
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
    }
  };

  const handleChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions).map(option => option.value);
    setMatieresSelected(selectedValues);
  };

  if (!notification) {
    return (
      <div className="p-8">
        <p className="text-gray-500">Notification non trouvée</p>
      </div>
    );
  }

  const handleAccept = async () => {
    setIsLoading(true);
    try {
      if (notification.type === 'EnseignantInscritNotification') {
        const data = {
          'enseignant_id': notification.data.enseignant_id,
          'statut': 'accepté',
          'matieresSelected': matieresSelected,
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
          'enseignant_id': notification.support.chapitres_enseigne.matieres_classes_enseignant.user.id,
        };
        await axios.post('http://localhost:8000/api/accept-support', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      setIsLoading(false);
      Swal.fire({
                    title: 'Succès !',
                    text: 'Confirmation éffectué avec succès',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
      //alert('Confirmation effectuée avec succès');
      navigate('/dashboard');
    } catch (error) {
      //alert('Erreur de la confirmation...');
      //console.log(error);
      Swal.fire({
                    title: 'Erreur !',
                    text: 'Une erreur est survenue, veuillez rééssayer',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
      
      setIsLoading(false);
    }
  };

  const handleReject = async () => {
    setIsLoading(true);
    try {
      if (notification.type === 'EnseignantInscritNotification') {
        const data = {
          'enseignant_id': notification.data.enseignant_id,
          'statut': 'refusé',
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
        };
        await axios.post('http://localhost:8000/api/accept-support', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      setIsLoading(false);
      Swal.fire({
                    title: 'Succes !',
                    text: 'Inscription éffectuée ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
      //alert('Confirmation effectuée avec succès');
      navigate('/dashboard');
    } catch (error) {
      //alert('Erreur de la confirmation...');
      //console.log(error);
      setIsLoading(false);
      Swal.fire({
                    title: 'Erreur !',
                    text: 'Une erreur est survenue',
                    icon: 'error',
                    confirmButtonText: 'OK'
 });
    }
  };

  return (
    <div className="p-8">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader className="w-12 h-12 animate-spin text-indigo-600" />
        </div>
      )}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {notification.type === 'EnseignantInscritNotification' && 'Nouvelle demande d\'inscription'}
            {notification.type === 'ValidateSupport' && 'Nouvelle soumission de contenu'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Reçu le {new Date(notification.created_at).toLocaleString()}
          </p>
        </div>

        <div className="p-6">
          {notification.type === 'EnseignantInscritNotification' && (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {notification.user?.nom} {notification.user?.prenom}
                  </h3>
                  <p className="text-gray-500">{notification.user?.email}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Niveau demandé</p>
                  {notification.user?.level?.nom}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Matière(s) enseignée(s)</p>
                  <ol>
                    {notification.user?.matieres_enseignants?.map((mat) => (
                      <li key={mat.id}>{mat.matiere?.nom}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Classes préférées</p>
                  <ol>
                    {notification.user?.preferences?.map((pref) => (
                      <li key={pref.id}>{pref.classe?.nom}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Téléphone</p>
                  <p className="text-base text-gray-900">{notification.user?.telephone}</p>
                </div>
              </div>

              <div>
                <h2>Affecter des classes à l'enseignant</h2>
                <select
                  id="matieresSelected"
                  name="matieresSelected"
                  value={matieresSelected}
                  multiple
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {notification.availableClasses?.map((availableClasse) => (
                    <option key={availableClasse.id} value={availableClasse.id}>
                      {availableClasse.matiere?.nom} - {availableClasse.classe?.nom}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {notification.type === 'ValidateSupport' && (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {notification.support?.chapitres_enseigne?.matieres_classes_enseignant?.user?.nom}
                  </h3>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Matière</p>
                    <p className="text-base text-gray-900">{notification.support?.chapitres_enseigne?.matieres_classes_enseignant?.matiere?.nom}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Description</p>
                  <p className="text-base text-gray-900 mt-1">
                    {notification.support?.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Pièces jointes</p>
                  <div className="space-y-2">
                    {notification.data.type === 'lecon' ? (
                      <div className="mt-4">
                        <video
                          className="w-full rounded-lg shadow-lg"
                          controls
                          src={`http://localhost:8000/storage/${notification.support?.contenu}`}
                        >
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <Download className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-900">{notification.support?.contenu}</span>
                          </div>
                          <button className="text-indigo-600 hover:text-indigo-800"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = `http://localhost:8000/storage/${notification.support?.contenu}`;
                            link.download = notification.support?.contenu.split("/").pop(); // Nom du fichier
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          >
                            <Download className="w-5 h-5" />
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
