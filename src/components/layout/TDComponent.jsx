export default function TDComponent({td}){

    return (
        <>
            <div 
                key={td.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-4 border-b">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: "#fe4a55" }}>
                        {td.titre}
                      </h3>
                      <p className="text-gray-700 text-sm">{td.enseignant}</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-lg font-bold uppercase" style={{ color: "#fe4a55" }}>
                      {td.format}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {td.matiere}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {td.classe}
                    </span>
                    {td.avecCorrection ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        Avec correction
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                        Sans correction
                      </span>
                    )}
                  </div>
                  
                  <div className="text-gray-500 text-xs mb-4">
                    <div>Taille: {td.taille}</div>
                    <div>Mis en ligne le: {td.dateUpload}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 p-2 text-white rounded-md text-sm font-medium"
                      style={{ backgroundColor: "#fe4a55" }}
                      onClick={() => telechargerTD(td.id)}
                    >
                      Télécharger
                    </button>
                    
                    {td.avecCorrection && (
                      <button 
                        className="flex-1 p-2 border text-sm font-medium rounded-md hover:bg-gray-50"
                        style={{ color: "#fe4a55", borderColor: "#fe4a55" }}
                        onClick={() => voirCorrection(td.id)}
                      >
                        Voir correction
                      </button>
                    )}
                  </div>
                </div>
              </div>
        </>
    );
}