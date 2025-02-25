import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BlogComponent from '../layout/BlogComponent';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import user4 from '../../assets/img/user/user4.jpg';
import user5 from '../../assets/img/user/user5.jpg';
import user6 from '../../assets/img/user/user6.jpg';

const BlogPage = () => {
  // Catégories de blog
  const [categories, setCategories] = useState([
    { id: 'all', name: 'Tous les articles' },
    { id: 'tutorials', name: 'Tutoriels' },
    { id: 'news', name: 'Actualités' },
    { id: 'guides', name: 'Guides' },
    { id: 'resources', name: 'Ressources' }
  ]);
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Articles de blog
  const [featuredArticles, setFeaturedArticles] = useState([
    {
      id: 1,
      title: "Comment maîtriser l'apprentissage en ligne et réussir vos cours",
      excerpt: "Découvrez les meilleures stratégies pour maximiser votre expérience d'apprentissage en ligne et atteindre vos objectifs académiques.",
      image: user1,
      author: "Marie Dupont",
      authorAvatar: user1,
      date: "15 Fév 2025",
      readTime: "8 min",
      category: "guides",
      featured: true
    },
    {
      id: 2,
      title: "L'intelligence artificielle dans l'éducation : révolution ou évolution ?",
      excerpt: "Analyse des impacts de l'IA sur les méthodes d'enseignement modernes et les opportunités qu'elle offre aux étudiants et enseignants.",
      image: user2,
      author: "Thomas Martin",
      authorAvatar: user2,
      date: "10 Fév 2025",
      readTime: "12 min",
      category: "news",
      featured: true
    }
  ]);
  
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
  
  // Filtrer les articles par catégorie
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);
  
  return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gray-50">
      {/* Header avec effet de vague */}
      <header className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: `linear-gradient(135deg, #fe4a55 0%, #ff8a8f 100%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50 fill-current">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Blog</h1>
          <p className="mt-3 text-xl text-white opacity-90 max-w-2xl">
            Actualités, tendances et conseils pour votre parcours d'apprentissage
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative">
        {/* Filtres de catégories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'text-white' 
                  : 'text-gray-600 bg-white border border-gray-200 hover:border-pink-200'
              }`}
              style={{ backgroundColor: activeCategory === category.id ? '#fe4a55' : '' }}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Articles en vedette */}
        {activeCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles en vedette</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map(article => (
                <BlogComponent article={article}/>
              ))}
            </div>
          </div>
        )}
        
        {/* Liste des articles */}
        <h2 className="text-2xl font-bold mb-6">
          {activeCategory === 'all' ? 'Tous les articles' : `Articles: ${categories.find(c => c.id === activeCategory)?.name}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
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
                    {categories.find(c => c.id === article.category)?.name}
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
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-1">
            <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="px-4 py-2 rounded text-white font-medium" style={{ backgroundColor: '#fe4a55' }}>1</button>
            <button className="px-4 py-2 rounded text-gray-600 hover:bg-gray-100">2</button>
            <button className="px-4 py-2 rounded text-gray-600 hover:bg-gray-100">3</button>
            <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </main>
    </div>
    <Footer/>
        </>
  );
};

export default BlogPage;