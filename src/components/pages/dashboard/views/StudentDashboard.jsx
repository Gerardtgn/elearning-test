import React from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ChevronRight,
  FileText,
  Video as VideoIcon,
  TrendingUp,
  Download,
  Star
} from 'lucide-react';

export function StudentDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord Étudiant</h1>
        <p className="text-gray-600">Bienvenue sur votre espace d'apprentissage</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Cours suivis</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">TD complétés</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Heures d'étude</p>
              <p className="text-2xl font-semibold text-gray-900">24h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Progression</p>
              <p className="text-2xl font-semibold text-gray-900">75%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section gauche - Cours en cours */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Cours en cours</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {/* Cours items */}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Activités récentes</h2>
            </div>
            <div className="p-6">
              {/* Timeline des activités */}
            </div>
          </div>
        </div>

        {/* Section droite - Sidebar */}
        <div className="space-y-8">
          {/* Prochains événements */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Prochains événements</h2>
            </div>
            <div className="p-6">
              {/* Liste des événements */}
            </div>
          </div>

          {/* Ressources recommandées */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Ressources recommandées</h2>
            </div>
            <div className="p-6">
              {/* Liste des ressources */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}