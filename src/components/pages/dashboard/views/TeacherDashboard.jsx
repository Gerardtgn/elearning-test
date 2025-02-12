import React from 'react';
import {
  Users,
  BookOpen,
  Video as VideoIcon,
  FileText,
  BarChart2,
  Calendar,
  Clock,
  TrendingUp
} from 'lucide-react';

export function TeacherDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord Enseignant</h1>
        <p className="text-gray-600">Gérez vos cours et suivez vos élèves</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Élèves actifs</p>
              <p className="text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Cours publiés</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <VideoIcon className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Visioconférences</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">TD créés</p>
              <p className="text-2xl font-semibold text-gray-900">32</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section gauche */}
        <div className="lg:col-span-2 space-y-8">
          {/* Graphique de progression */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Progression des élèves</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart2 className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Graphique de progression</span>
            </div>
          </div>

          {/* Dernières activités */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Dernières activités</h2>
            </div>
            <div className="p-6">
              {/* Liste des activités */}
            </div>
          </div>
        </div>

        {/* Section droite */}
        <div className="space-y-8">
          {/* Prochains cours */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Prochains cours</h2>
            </div>
            <div className="p-6">
              {/* Liste des cours */}
            </div>
          </div>

          {/* TD à corriger */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">TD à corriger</h2>
            </div>
            <div className="p-6">
              {/* Liste des TD */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}