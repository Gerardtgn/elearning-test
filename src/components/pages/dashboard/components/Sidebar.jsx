import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  LayoutDashboard,
  BookOpen,
  LogOut,
  GraduationCap,
  Bell,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  Settings,
  Users,
  BookText,
  Layers,
  BookmarkPlus,
  UserPlus,
  ScrollText,
  ArrowRight
} from 'lucide-react';
import { BASE_URL } from '../../../../api/api';
import { handleLogout } from '../../../../api/user';
import { getNotifications } from '../../../../api/notification';

export function Sidebar({ 
  isMobileOpen = false, 
  onMobileClose = () => {},
  toggleMobileMenu = () => {}
}) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const profile = user?.profile;
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [loading, setLoading] = useState();
  
  const notificationRef = useRef(null);
  const bellRef = useRef(null);

  // Fermer les notifications quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showNotifications && 
        notificationRef.current && 
        bellRef.current &&
        !notificationRef.current.contains(event.target) && 
        !bellRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotifications]);

  useEffect(() => {
    fetchNotifications();
    
    // Gérer le resize de l'écran
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Cette ligne causait une erreur car sidebarOpen n'est pas défini
        // setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await getNotifications();
      setNotifications(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications', error);
    }
  };

  // Ajout du lien de notifications pour tous les utilisateurs
  const notificationLink = { name: 'Notifications', to: '/dashboard/notifications', icon: Bell };

  const studentLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes cours', to: '/dashboard/student/courses', icon: BookOpen },
    { name: 'Mes abonnements', to: '/dashboard/abonnements', icon: BookOpen },
    { name: 'Notifications', to: '/dashboard/notifications', icon: Bell },
  ];

  const teacherLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes cours', to: '/dashboard/teacher/courses', icon: BookOpen },
    { name: 'Notifications', to: '/dashboard/notifications', icon: Bell },
  ];

  // Définition des liens administrateur avec un accordion
  const adminLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Cours', to: '/dashboard/teacher/courses', icon: BookOpen },
    { name:'Abonnements', to: '/dashboard/abonnements', icon: BookOpen },
    { name: 'Notifications', to: '/dashboard/notifications', icon: Bell },
    { 
      name: 'Paramètres', 
      id: 'settings-accordion', 
      icon: Settings, 
      isAccordion: true,
      subItems: [
        //{ name: 'Utilisateurs', to: '/dashboard/admin/users', icon: Users },
        { name: 'Matières', to: '/dashboard/matieres', icon: BookText },
        { name: 'Classes', to: '/dashboard/classes', icon: Users },
        { name: 'Ecoles', to: '/dashboard/ecoles', icon: Users },
        { name: 'Offres', to: '/dashboard/offres', icon: Users },
        { name: 'Offre des classes', to: '/dashboard/offre-classe', icon: Users },
        { name: 'Niveaux', to: '/dashboard/levels', icon: Layers },
        { name: 'Profils', to: '/dashboard/profiles', icon: UserPlus },
        { name: 'Chapitres', to: '/dashboard/chapitres', icon: ScrollText },
        { name: 'Matières à classe', to: '/dashboard/add-matieres', icon: BookmarkPlus },
        { name: 'Chapitres à Matière', to: '/dashboard/add-chapitres', icon: BookmarkPlus },
      ]
    }
  ];

  const links = profile === 'enseignant' ? teacherLinks : profile === 'apprenant' ? studentLinks : adminLinks;

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleAccordion = (accordionId) => {
    setExpandedAccordion(expandedAccordion === accordionId ? null : accordionId);
  };

  const handleNotificationClick = (notif) => {
    navigate(`/dashboard/notifications/${notif.id}`);
    setShowNotifications(false);
  };

  const navigateToNotifications = () => {
    navigate('/dashboard/notifications');
    setShowNotifications(false);
    if (isMobileOpen) {
      onMobileClose();
    }
  };

  const renderNavLinks = (linkItems) => {
    return linkItems.map((link) => {
      if (link.isAccordion) {
        const isExpanded = expandedAccordion === link.id;
        const Icon = link.icon;
        
        return (
          <div key={link.id} className="mb-1">
            <button
              onClick={() => toggleAccordion(link.id)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 ease-in-out"
              aria-expanded={isExpanded}
              aria-controls={`${link.id}-content`}
            >
              <div className="flex items-center">
                <Icon className="w-5 h-5 mr-3 text-gray-500" />
                <span>{link.name}</span>
              </div>
              <div className="transition-transform duration-200 ease-in-out">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </button>
            
            <div
              id={`${link.id}-content`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-6 mt-1 space-y-1">
                {link.subItems.map((subItem) => {
                  const SubIcon = subItem.icon;
                  return (
                    <NavLink
                      key={subItem.to}
                      to={subItem.to}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`
                      }
                      onClick={() => isMobileOpen && onMobileClose()}
                    >
                      <SubIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="truncate">{subItem.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
      
      const Icon = link.icon;
      // Modification spécifique pour le lien de notifications
      if (link.name === 'Notifications') {
        return (
          <NavLink
            key={link.to || link.name}
            to={link.to || '#'}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
            onClick={() => isMobileOpen && onMobileClose()}
          >
            <div className="relative mr-3">
              <Bell className="w-5 h-5 flex-shrink-0 text-gray-500" />
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </div>
            <span className="truncate">{link.name}</span>
          </NavLink>
        );
      }
      
      return (
        <NavLink
          key={link.to || link.name}
          to={link.to || '#'}
          className={({ isActive }) =>
            `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out ${
              isActive
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
          onClick={() => isMobileOpen && onMobileClose()}
        >
          <Icon className="w-5 h-5 mr-3 flex-shrink-0 text-gray-500" />
          <span className="truncate">{link.name}</span>
        </NavLink>
      );
    });
  };

  // Composant pour le dropdown des notifications
  const NotificationsDropdown = () => {
    if (!showNotifications) return null;
  
    return (
      <div
        ref={notificationRef}
        className="absolute right-0 mt-2 w-80 origin-top-right bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          transform: showNotifications ? 'scale(1)' : 'scale(0.95)',
          opacity: showNotifications ? 1 : 0,
          maxHeight: showNotifications ? '24rem' : '0'
        }}
      >
        <div className="sticky top-0 z-10 px-4 py-2 border-b border-gray-200 bg-white">
          <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              Aucune notification pour le moment
            </div>
          ) : (
            notifications.map((notification) => (
              <button
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                className="w-full block px-4 py-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-indigo-100 rounded-full">
                    {notification.type === '' ? (
                      <UserPlus className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <Bell className="w-4 h-4 text-indigo-600" />
                    )}
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.type === '' ? 'Demande d\'inscription' : notification.type}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-0.5">
                      {notification.data.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(notification.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
        <div className="sticky bottom-0 px-4 py-2 border-t border-gray-200 bg-white">
          <button 
            onClick={navigateToNotifications}
            className="w-full flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Voir toutes les notifications
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    );
  };

  // Composant pour l'information de l'utilisateur
  const UserInfo = ({ isMobile = false }) => (
    <div className={`flex items-center ${isMobile ? 'justify-between w-full' : ''}`}>
      <div className="flex items-center">
        <img
          src={`${BASE_URL}/storage/${user.image}`}
          alt={user?.prenom}
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">{user?.prenom + ' ' + user?.nom}</p>
          <p className="text-xs text-gray-500">{profile ? `${profile.charAt(0).toUpperCase()}${profile.slice(1)}` : ''}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Sidebar desktop */}
      <div className="hidden md:block w-64 bg-white border-r border-gray-200 h-full flex flex-col">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">ELearning</span>
        </div>

        <div className="flex-1 pt-5 px-4 overflow-y-auto">
          <nav className="space-y-1.5">
            {renderNavLinks(links)}
            {/* Bouton de déconnexion */}
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out text-gray-700 hover:bg-gray-100 w-full"
            >
              <LogOut className="w-5 h-5 mr-3 flex-shrink-0 text-gray-500" />
              <span className="truncate">Déconnexion</span>
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src={`${BASE_URL}/storage/${user.image}`}
              alt={user?.prenom}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">{user?.prenom + ' ' + user?.nom}</p>
              <p className="text-xs text-gray-500">
                {profile ? `${profile.charAt(0).toUpperCase()}${profile.slice(1)}` : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar mobile */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto md:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <div className="flex items-center">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ELearning</span>
            </div>
            <button
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="pt-5 px-4">
            <nav className="space-y-1.5">
              {renderNavLinks(links)}
              {/* Bouton de déconnexion */}
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out text-gray-700 hover:bg-gray-100 w-full"
              >
                <LogOut className="w-5 h-5 mr-3 flex-shrink-0 text-gray-500" />
                <span className="truncate">Déconnexion</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}