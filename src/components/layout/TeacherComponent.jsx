import { useNavigate } from "react-router-dom"
export default function TeacherComponent({teacher}){
    const navigate = useNavigate();
        return (
        <>
            <div
              key={teacher.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => handleTeacherClick(teacher.id)}
            >
              {/* Courbe décorative en haut de la carte */}
              <div className="absolute top-0 left-0 right-0 h-4 z-10" style={{ background: '#fe4a55' }}></div>
              <div className="h-40 bg-gray-200 relative">
                {/* Élément décoratif */}
                <div className="absolute inset-0 opacity-20" style={{ 
                  backgroundImage: 'radial-gradient(circle, #fe4a55 10%, transparent 10%), radial-gradient(circle, #fe4a55 10%, transparent 10%)',
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 15px'
                }}></div>
                
                <div className="absolute -bottom-12 left-6">
                  <div className="rounded-full border-4 border-white p-1 shadow-lg" style={{ backgroundColor: '#fe4a55' }}>
                    <img 
                      src={teacher.avatar} 
                      alt={teacher.name} 
                      className="h-24 w-24 rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-6 px-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{teacher.name}</h2>
                
                <div className="flex flex-wrap mt-3 mb-4">
                  {teacher.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-600 ring-1 ring-inset ring-pink-200"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-5 line-clamp-3">{teacher.bio}</p>
                
                <div className="flex space-x-4 mb-6">
                  <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg py-2 px-3 flex-1">
                    <span className="text-lg font-bold text-gray-800">{teacher.followers}</span>
                    <span className="text-xs text-gray-500">Abonnés</span>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg py-2 px-3 flex-1">
                    <span className="text-lg font-bold text-gray-800">{teacher.coursesCount}</span>
                    <span className="text-xs text-gray-500">Cours</span>
                  </div>
                </div>
                
                <button 
                  className="w-full py-3 rounded-lg font-medium text-white transition-colors duration-300 group-hover:bg-pink-600 flex items-center justify-center"
                  style={{ backgroundColor: '#fe4a55' }}
                  onClick={()=>{
                    navigate('/detail-teacher');
                  }}
                >
                  <span>Voir le profil</span>
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
        </>
    )
}