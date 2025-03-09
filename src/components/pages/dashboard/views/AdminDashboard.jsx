import React, { useEffect, useState } from 'react';
import { getStatistiques } from '../../../../api/statistique';
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
  const [stats, setStats] = useState([]);


  // Données factices pour les approbations en attente
  useEffect(() => {
    fetchStatistqiues();
  }, []);

  const fetchStatistqiues = async () => {
      try {
        const response = await getStatistiques();
        setStats(response);
        
      } catch (err) {
        console.log('erreur lors de la récupération des données ', err);
        setError('Erreur lors de la récupération des données');
      }
    };

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
              <p className="text-2xl font-semibold text-gray-900">{stats.apprenants|0}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{stats.enseignants|0}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{stats.cours|0}</p>
            </div>
          </div>
        </div>

        
      </div>

      {/* Statistiques secondaires */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Utilisateurs actifs</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.activeUsers}</p>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Taux de complétion</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.completionRate}</p>
            </div>
          </div>
        </div> */}

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Approbations en attente</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.approbations|0}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{stats.evenements|0}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      
    </div>
  );
}

export default AdminDashboard;