import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FileText, Heart, GraduationCap, DownloadIcon } from "lucide-react";

export default function TdComponent ({td}){
    const location = useLocation();
    //const td = location.state;
    return (
                <div className="bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-8 h-8 text-indigo-600" />
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="Alex Morgan"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Alex Morgan</p>
                          <p className="text-sm text-gray-500">Mathématiques</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Calcul Mental</h3>
                      <p className="text-gray-600 mb-6">Améliorez vos compétences en calcul mental avec des exercices adaptés au niveau primaire.</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          Cours Primaire
                        </span>
                        <a 
                          href="/td1.pdf" 
                          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                        >
                          <DownloadIcon className="w-5 h-5 mr-2" />
                          Télécharger
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
    );

    
};