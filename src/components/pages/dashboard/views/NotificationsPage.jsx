import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, UserPlus, ArrowLeft, Calendar, BookOpen, FileText } from 'lucide-react';
import { getNotifications } from '../../../../api/notification';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await getNotifications();
      setNotifications(response);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications', error);
      setLoading(false);
    }
  };

  const handleNotificationClick = (notif) => {
    navigate(`/dashboard/notifications/${notif.id}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      // Aujourd'hui, afficher l'heure
      return `Aujourd'hui, ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else if (diffDays === 1) {
      return 'Hier';
    } else if (diffDays < 7) {
      const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      return days[date.getDay()];
    } else {
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'EnseignantInscritNotification':
        return <UserPlus className="w-5 h-5 text-white" />;
      case 'ValidateSupport':
        return <FileText className="w-5 h-5 text-white" />;
      case 'ReturnSupportResponse':
        return <BookOpen className="w-5 h-5 text-white" />;
      default:
        return <Bell className="w-5 h-5 text-white" />;
    }
  };

  const getNotificationBgColor = (type) => {
    switch(type) {
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

  const getNotificationTitle = (notification) => {
    switch(notification.type) {
      case 'EnseignantInscritNotification':
        return 'Nouvelle demande d\'inscription';
      case 'ValidateSupport':
        return 'Nouveau contenu à valider';
      case 'ReturnSupportResponse':
        return 'Réponse au support';
      default:
        return notification.type || 'Notification';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête avec bouton de retour et titre */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={goBack}
              className="inline-flex items-center justify-center p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors text-gray-600"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          </div>
          
          <div className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full text-sm font-medium">
            {notifications.length} {notifications.length > 1 ? 'notifications' : 'notification'}
          </div>
        </div>
        
        {/* État de chargement */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
          </div>
        )}
        
        {/* Liste des notifications vide */}
        {!loading && notifications.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune notification</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Vous n'avez pas de notifications pour le moment. Les nouvelles notifications apparaîtront ici.
            </p>
          </div>
        )}
        
        {/* Liste des notifications */}
        {!loading && notifications.length > 0 && (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="p-5">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 p-2 rounded-lg ${getNotificationBgColor(notification.type)}`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-base font-semibold text-gray-900">
                          {getNotificationTitle(notification)}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500 mt-1 sm:mt-0">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{formatDate(notification.created_at)}</span>
                        </div>
                      </div>
                      
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {notification.data.message || "Cliquez pour voir les détails"}
                      </p>
                      
                      <div className="mt-3 flex items-center">
                        <span className="text-xs font-medium text-indigo-600 border-b border-indigo-600 pb-0.5 inline-flex items-center">
                          Voir les détails
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;