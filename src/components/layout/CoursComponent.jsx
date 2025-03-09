import React, { useState, useEffect } from "react";
import poster from "../../assets/img/college-website/admission-img1.jpg";
import { BASE_URL } from "../../api/api";

export default function CoursComponent({ cours }) {
  const [videoDuration, setVideoDuration] = useState("-");

  useEffect(() => {

  }, []);

  return (
    <div
      key={cours.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => naviguerVersCours(cours.id)}
    >
      <div className="relative">
        <img
          src={cours.image_descriptive? cours.image_descriptive:  poster}
          alt={cours.titre}
          className="w-full h-48 object-cover"
        />
        
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-indigo-500">
          {cours.titre}
        </h3>
        <p className="text-gray-700 text-xs mb-2">
          {cours.user.nom} {cours.user.prenom}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
            {cours.chapitres_enseigne.matieres_classe.matiere.nom}
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
            {cours.chapitres_enseigne.matieres_classe.classe.nom}
          </span>
        </div>

        <div className="text-gray-500 text-xs mt-3">
          {cours.nbr_de_vue} vues
        </div>
      </div>
    </div>
  );
}