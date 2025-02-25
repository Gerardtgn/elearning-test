import { useNavigate } from "react-router-dom"
export default function BlogComponent({article}){
    const navigate = useNavigate();
    return (
        <>
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-semibold shadow" style={{ color: '#fe4a55' }}>
                      En vedette
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src={article.authorAvatar} alt={article.author} className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm font-medium">{article.author}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {article.date} · {article.readTime}
                      </div>
                    </div>
                    <button 
                      className="mt-4 py-2 px-4 rounded-lg font-medium text-white transition-colors duration-300 w-full"
                      style={{ backgroundColor: '#fe4a55' }}
                      onClick={()=>{
                        navigate(`/detail-article/${article.id}`);
                      }}
                    >
                      Lire l'article
                    </button>
                  </div>
                </div>
        </>
    )
}