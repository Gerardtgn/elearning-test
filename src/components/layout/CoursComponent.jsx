export default function CoursComponent({cours}){

    return(
        <>
            <div 
              key={cours.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => naviguerVersCours(cours.id)}
            >
              <div className="relative">
                <img 
                  src={cours.vignette} 
                  alt={cours.titre} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded">
                  {cours.duree}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-2" style={{ color: "#fe4a55" }}>
                  {cours.titre}
                </h3>
                <p className="text-gray-700 text-sm mb-2">{cours.enseignant}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {cours.matiere}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {cours.classe}
                  </span>
                </div>
                
                <div className="text-gray-500 text-xs mt-3">
                  {cours.vues.toLocaleString()} vues
                </div>
              </div>
            </div>
        </>
    );
}