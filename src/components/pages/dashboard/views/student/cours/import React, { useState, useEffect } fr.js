import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  Calendar,
  Settings,
  GraduationCap,
  ClipboardList,
  Video,
  MessageSquare,
  BarChart,
  LogOut,
  Loader,
  Bell,
  Menu,
  X
} from 'lucide-react';

export function Sidebar() {

  useEffect(() => {
    fetchNotifications();
  }, []);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const profile = user.profile;
  const [loading, setLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  // Données factices pour les notifications
  // const notifications = [
  //   {
  //     id: 1,
  //     type: 'user_request',
  //     title: 'Nouvelle demande d\'inscription',
  //     message: 'Sarah Martin souhaite rejoindre votre classe de mathématiques.',
  //     timestamp: '2024-02-29T10:30:00',
  //     status: 'unread',
  //     data: {
  //       userId: '123',
  //       userName: 'Sarah Martin',
  //       userEmail: 'sarah.martin@example.com',
  //       userClass: 'Mathématiques CM2',
  //       userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  //     }
  //   },
  //   {
  //     id: 2,
  //     type: 'content_submission',
  //     title: 'Nouveau contenu soumis',
  //     message: 'Thomas Dubois a soumis un nouveau cours pour validation.',
  //     timestamp: '2024-02-29T09:15:00',
  //     status: 'unread',
  //     data: {
  //       contentId: '456',
  //       authorName: 'Thomas Dubois',
  //       contentTitle: 'Introduction à l\'algèbre',
  //       contentType: 'course',
  //       previewUrl: '/preview/course/456',
  //       authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  //     }
  //   }
  // ];
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/get-notifications', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNotifications(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications', error);
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const studentLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes cours', to: '/dashboard/student/courses', icon: BookOpen },
    { name: 'Mes exercices', to: '/dashboard/student/exercices', icon: FileText },
    { name: 'Planning', to: '/dashboard/schedule', icon: Calendar },
    { name: 'Messages', to: '/dashboard/messages', icon: MessageSquare },
    { name: 'Paramètres', to: '/dashboard/settings', icon: Settings },
  ];

  const teacherLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes cours', to: '/dashboard/teacher/courses', icon: BookOpen },
    { name: ' Exercices', to: '/dashboard/teacher/exercices', icon: ClipboardList },
    { name: 'Mes élèves', to: '/dashboard/students', icon: Users },
    { name: 'Visioconférences', to: '/dashboard/meetings', icon: Video },
    { name: 'Statistiques', to: '/dashboard/stats', icon: BarChart },
    { name: 'Messages', to: '/dashboard/messages', icon: MessageSquare },
    { name: 'Paramètres', to: '/dashboard/settings', icon: Settings },
  ];

  const adminLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Statistiques', to: '/dashboard/stats', icon: BarChart },
    { name: 'Messages', to: '/dashboard/messages', icon: MessageSquare },
    { name: 'Paramètres', to: '/dashboard/settings', icon: Settings },
  ];

  const links = profile === 'enseignant' ? teacherLinks : profile === 'apprenant' ? studentLinks : adminLinks;

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:8000/api/logout', { user }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');

      window.location.href = '/login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
      setLoading(false);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNotificationClick = (notif) => {

    navigate(`/dashboard/notifications/${notif.id}`);
    setShowNotifications(false);
  }

  return (
    <div className="flex h-full relative">
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ELearning</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`
                    }
                    onClick={toggleSidebar}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {link.name}
                  </NavLink>
                );
              })}
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
                disabled={loading}
              >
                {loading ? (
                  <Loader className="w-5 h-5 mr-3 animate-spin" />
                ) : (
                  <LogOut className="w-5 h-5 mr-3" />
                )}
                Déconnexion
              </button>
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
      </div>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ELearning</span>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="px-4 pt-4">
                <div className="space-y-1">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                            isActive
                              ? 'bg-indigo-50 text-indigo-600'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`
                        }
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {link.name}
                      </NavLink>
                    );
                  })}
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader className="w-5 h-5 mr-3 animate-spin" />
                    ) : (
                      <LogOut className="w-5 h-5 mr-3" />
                    )}
                    Déconnexion
                  </button>
                </div>
              </nav>
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                    alt={user.prenom}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">{user?.prenom + ' ' + user?.nom}</p>
                    <p className="text-xs text-gray-500">{profile?.charAt(0).toUpperCase()}{profile.slice(1)}</p>
                  </div>
                </div>
                <button onClick={toggleNotifications} className="relative">
                  <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      {notifications.length}
                    </span>
                  )}
                </button>
              </div>
              {showNotifications && (
              <div className="bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className='block px-4 py-3 hover:bg-gray-50 transition-colors duration-150'
                    >
                      <div className="flex items-center">
                        
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.type == '' && 'Demande d\'inscription'}
                          </p>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {notification.data.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="md:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          {sidebarOpen && (
            <div className="flex items-center">
              <img
                src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                alt={user.prenom}
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{user?.prenom + ' ' + user?.nom}</p>
                <p className="text-xs text-gray-500">{profile?.charAt(0).toUpperCase()}{profile.slice(1)}</p>
              </div>
              <button onClick={toggleNotifications} className="relative ml-4">
                <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {notifications.length}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
        
        {/* Contenu principal */}
        <main className="flex-1 overflow-y-auto p-4">
          {/* Votre contenu ici */}
        </main>
      </div>
    </div>
  );
}