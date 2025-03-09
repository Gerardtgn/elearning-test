import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Menu, GraduationCap } from 'lucide-react';

export function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar pour mobile et desktop */}
      <Sidebar 
        isMobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
        desktopMode={true}
        toggleMobileMenu={toggleMobileMenu} // Nouvelle prop
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center">
              <button
                className="inline-flex items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-none mr-3"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <div className="flex items-center">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
                <span className="ml-2 text-lg font-bold text-gray-900">ELearning</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}