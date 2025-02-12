import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useAuthStore } from '../../../store/authStore';
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
  BarChart
} from 'lucide-react';

export function Sidebar() {
  const { user } = {};
  const isTeacher = user?.role === 'teacher';

  const studentLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes cours', to: '/dashboard/courses', icon: BookOpen },
    { name: 'Mes TD', to: '/dashboard/assignments', icon: FileText },
    { name: 'Planning', to: '/dashboard/schedule', icon: Calendar },
    { name: 'Messages', to: '/dashboard/messages', icon: MessageSquare },
    { name: 'Paramètres', to: '/dashboard/settings', icon: Settings },
  ];

  const teacherLinks = [
    { name: 'Tableau de bord', to: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes cours', to: '/dashboard/courses', icon: BookOpen },
    { name: 'Mes élèves', to: '/dashboard/students', icon: Users },
    { name: 'TD & Exercices', to: '/dashboard/assignments', icon: ClipboardList },
    { name: 'Visioconférences', to: '/dashboard/meetings', icon: Video },
    { name: 'Statistiques', to: '/dashboard/stats', icon: BarChart },
    { name: 'Messages', to: '/dashboard/messages', icon: MessageSquare },
    { name: 'Paramètres', to: '/dashboard/settings', icon: Settings },
  ];

  const links = isTeacher ? teacherLinks : studentLinks;

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">EduPlatform</span>
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
            </div>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src={user?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
              alt={user?.full_name}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">{user?.full_name || 'Utilisateur'}</p>
              <p className="text-xs text-gray-500">{isTeacher ? 'Enseignant' : 'Apprenant'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}