import React from 'react';
import {
  Users,
  GraduationCap,
  BookOpen,
  Video as VideoIcon,
  FileText,
  BarChart2,
  DollarSign,
  Activity,
  Clock,
  AlertCircle,
  CheckCircle,
  UserPlus,
  School,
  Calendar
} from 'lucide-react';

export function AdminDashboard() {
  // Données factices pour les statistiques
  const stats = {
    totalStudents: 1245,
    totalTeachers: 48,
    totalCourses: 156,
    totalRevenue: '45,250€',
    activeUsers: 892,
    completionRate: '78%',
    pendingApprovals: 12,
    upcomingEvents: 8
  };

  // Données factices pour les activités récentes
  const recentActivities = [
    {
      id: 1,
      type: 'new_registration',
      user: 'Marie Dupont',
      action: 's\'est inscrite comme étudiante',
      timestamp: '2 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 2,
      type: 'course_published',
      user: 'Prof. Thomas Martin',
      action: 'a publié un nouveau cours de mathématiques',
      timestamp: '15 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 3,
      type: 'payment_received',
      user: 'Lucas Bernard',
      action: 'a effectué un paiement de 250€',
      timestamp: '1 heure ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  // Données factices pour les approbations en attente
  const pendingApprovals = [
    {
      id: 1,
      type: 'teacher',
      name: 'Dr. Sophie Lambert',
      subject: 'Physique',
      status: 'pending',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 2,
      type: 'course',
      name: 'Introduction à l\'Algèbre',
      author: 'Prof. Marc Dubois',
      status: 'pending',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord Administrateur</h1>
        <p className="text-gray-600">Gérez et supervisez l'ensemble de la plateforme</p>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Étudiants inscrits</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Enseignants</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalTeachers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Cours actifs</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Revenus totaux</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalRevenue}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques secondaires */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Utilisateurs actifs</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Taux de complétion</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.completionRate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Approbations en attente</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.pendingApprovals}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Calendar className="w-6 h-6 text-pink-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Événements à venir</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.upcomingEvents}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section gauche et centrale */}
        <div className="lg:col-span-2 space-y-8">
          {/* Graphique des inscriptions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Évolution des inscriptions</h2>
              <select className="text-sm border-gray-300 rounded-md">
                <option>7 derniers jours</option>
                <option>30 derniers jours</option>
                <option>Cette année</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart2 className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Graphique des inscriptions</span>
            </div>
          </div>

          {/* Activités récentes */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Activités récentes</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="p-6">
                  <div className="flex items-center">
                    <img
                      src={activity.avatar}
                      alt={activity.user}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.user} {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">{activity.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section droite */}
        <div className="space-y-8">
          {/* Approbations en attente */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Approbations en attente</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={approval.avatar}
                        alt={approval.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{approval.name}</p>
                        <p className="text-sm text-gray-500">
                          {approval.type === 'teacher' ? approval.subject : `Par ${approval.author}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                        <AlertCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions rapides */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
                <div className="flex items-center">
                  <UserPlus className="w-5 h-5 mr-3" />
                  <span>Ajouter un enseignant</span>
                </div>
                <span className="text-indigo-500">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
                <div className="flex items-center">
                  <School className="w-5 h-5 mr-3" />
                  <span>Créer une classe</span>
                </div>
                <span className="text-green-500">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>Planifier un événement</span>
                </div>
                <span className="text-purple-500">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;