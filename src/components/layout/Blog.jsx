
import img1 from '../../assets/img/blog/img1.jpg';
import img2 from  '../../assets/img/blog/img2.jpg';
import img3 from '../../assets/img/blog/img3.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import user4 from '../../assets/img/user/user4.jpg';
import user5 from '../../assets/img/user/user5.jpg';
import user6 from '../../assets/img/user/user6.jpg';
import { useState } from 'react';
export default function Blog(){
    const [articles, setArticles] = useState([
        {
          id: 3,
          title: "Les 10 outils essentiels pour l'apprentissage à distance",
          excerpt: "Guide complet des applications et plateformes qui faciliteront votre parcours d'apprentissage en ligne.",
          image: user3,
          author: "Julie Lefèvre",
          authorAvatar: user3,
          date: "5 Fév 2025",
          readTime: "6 min",
          category: "resources"
        },
        {
          id: 4,
          title: "Comment créer un environnement d'étude productif chez soi",
          excerpt: "Conseils pratiques pour aménager un espace de travail optimal et maintenir votre concentration pendant vos sessions d'étude.",
          image: user4,
          author: "Alexandre Chen",
          authorAvatar: user4,
          date: "30 Jan 2025",
          readTime: "5 min",
          category: "guides"
        },
        {
          id: 5,
          title: "Tutoriel : Maîtriser les concepts avancés de programmation Python",
          excerpt: "Un guide étape par étape pour comprendre et appliquer les concepts de programmation avancés en Python.",
          image: user5,
          author: "Alexandre Chen",
          authorAvatar: user5,
          date: "25 Jan 2025",
          readTime: "15 min",
          category: "tutorials"
        },
        {
          id: 6,
          title: "Les tendances éducatives à surveiller en 2025",
          excerpt: "Analyse des innovations pédagogiques et des nouvelles approches qui façonnent l'avenir de l'éducation.",
          image: user6,
          author: "Marie Dupont",
          authorAvatar: user6,
          date: "20 Jan 2025",
          readTime: "7 min",
          category: "news"
        },
        {
          id: 7,
          title: "Comment gérer efficacement votre temps d'étude",
          excerpt: "Techniques de gestion du temps éprouvées pour optimiser vos sessions d'apprentissage et éviter la procrastination.",
          image: user2,
          author: "Julie Lefèvre",
          authorAvatar: user2,
          date: "15 Jan 2025",
          readTime: "6 min",
          category: "guides"
        },
        {
          id: 8,
          title: "Tutoriel : Créer des présentations interactives pour l'enseignement",
          excerpt: "Guide pratique pour concevoir des présentations engageantes qui captiveront l'attention de vos étudiants.",
          image: user3,
          author: "Thomas Martin",
          authorAvatar: user3,
          date: "10 Jan 2025",
          readTime: "9 min",
          category: "tutorials"
        }
      ]);
    return(
        <>
            <div class="blog-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">News and Blogs</span>
                    <h2>Our Latest Publications</h2>
                    <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-600 ring-1 ring-inset ring-pink-200">
                    {article.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={article.authorAvatar} alt={article.author} className="w-6 h-6 rounded-full mr-2" />
                    <span className="text-xs font-medium">{article.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
            </div>
        </div>
        </>
    )
}