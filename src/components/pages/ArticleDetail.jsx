import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import user4 from '../../assets/img/user/user4.jpg';
import user5 from '../../assets/img/user/user5.jpg';
import user6 from '../../assets/img/user/user6.jpg';
const ArticleDetail = () => {
  const { id } = useParams();
  
  // Données de l'article
  const [article, setArticle] = useState({
    id: 1,
    title: "Comment maîtriser l'apprentissage en ligne et réussir vos cours",
    image: "/api/placeholder/1200/600",
    author: "Marie Dupont",
    authorAvatar: user1,
    authorRole: "Professeure en Mathématiques",
    date: "15 Février 2025",
    readTime: "8 min",
    category: "guides",
    tags: ["apprentissage en ligne", "productivité", "éducation", "e-learning"],
    content: [
      {
        type: "paragraph",
        text: "L'apprentissage en ligne est devenu une composante essentielle de l'éducation moderne. Que vous suiviez des cours universitaires à distance, que vous vous formiez à de nouvelles compétences professionnelles ou que vous enrichissiez simplement vos connaissances personnelles, les plateformes d'e-learning offrent des opportunités sans précédent. Cependant, réussir dans un environnement d'apprentissage virtuel nécessite une approche stratégique."
      },
      {
        type: "heading",
        text: "Créez un environnement d'étude optimal"
      },
      {
        type: "paragraph",
        text: "Un espace de travail dédié est crucial pour maintenir votre concentration et votre productivité. Choisissez un endroit calme, bien éclairé et confortable, mais pas trop confortable pour éviter la somnolence. Éliminez les distractions potentielles en désactivant les notifications de vos appareils électroniques pendant vos sessions d'étude."
      },
      {
        type: "image",
        src: "/api/placeholder/800/400",
        caption: "Un espace de travail bien organisé améliore significativement la productivité"
      },
      {
        type: "heading",
        text: "Établissez une routine d'apprentissage"
      },
      {
        type: "paragraph",
        text: "La flexibilité de l'apprentissage en ligne est un avantage majeur, mais elle peut aussi devenir un piège si vous ne structurez pas votre temps efficacement. Créez un emploi du temps hebdomadaire avec des plages horaires dédiées à chaque cours ou sujet. Respectez ces horaires comme vous le feriez pour des cours en présentiel."
      },
      {
        type: "quote",
        text: "Le succès n'est pas un accident. C'est du travail acharné, de la persévérance, de l'apprentissage, de l'étude, du sacrifice et surtout, de l'amour pour ce que vous faites.",
        author: "Pelé"
      },
      {
        type: "heading",
        text: "Participez activement aux discussions"
      },
      {
        type: "paragraph",
        text: "L'interaction est un aspect fondamental de l'apprentissage. Dans un environnement virtuel, il est facile de devenir un observateur passif. Forcez-vous à participer aux forums de discussion, posez des questions et répondez à celles des autres. Cette interaction stimule votre réflexion et approfondit votre compréhension du sujet."
      },
      {
        type: "heading",
        text: "Utilisez des techniques d'apprentissage efficaces"
      },
      {
        type: "paragraph",
        text: "La méthode Pomodoro (25 minutes de travail intensif suivies de 5 minutes de pause) peut considérablement améliorer votre concentration. La pratique de la récupération active (se tester régulièrement plutôt que de simplement relire) renforce également la mémorisation à long terme."
      },
      {
        type: "list",
        items: [
          "Divisez les grands sujets en sections plus petites et gérables",
          "Enseignez ce que vous apprenez à quelqu'un d'autre (même imaginaire)",
          "Créez des cartes mentales pour visualiser les connexions entre les concepts",
          "Utilisez des applications de flashcards pour la révision espacée",
          "Alternez entre différents sujets au lieu de vous concentrer sur un seul pendant de longues périodes"
        ]
      },
      {
        type: "heading",
        text: "Gérez efficacement vos ressources numériques"
      },
      {
        type: "paragraph",
        text: "Organisez vos documents, cours et notes dans un système de classement cohérent. Utilisez des outils de prise de notes comme Notion, Evernote ou OneNote pour centraliser vos informations. Sauvegardez régulièrement votre travail et synchronisez-le sur plusieurs appareils pour y accéder facilement."
      },
      {
        type: "heading",
        text: "Maintenez votre motivation"
      },
      {
        type: "paragraph",
        text: "L'apprentissage à distance peut parfois sembler solitaire. Fixez-vous des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes et Temporellement définis) et célébrez vos petites victoires. Rejoignez ou créez des groupes d'étude virtuels pour partager vos défis et vos réussites avec d'autres apprenants."
      },
      {
        type: "image",
        src: "/api/placeholder/800/400",
        caption: "Les sessions d'étude en groupe virtuelles peuvent renforcer la motivation et l'engagement"
      },
      {
        type: "conclusion",
        text: "L'apprentissage en ligne offre une flexibilité et des opportunités inégalées, mais exige aussi discipline et organisation. En appliquant ces stratégies, vous maximiserez votre expérience d'apprentissage numérique et atteindrez vos objectifs éducatifs avec plus d'efficacité et de satisfaction."
      }
    ],
    relatedArticles: [
      {
        id: 4,
        title: "Comment créer un environnement d'étude productif chez soi",
        excerpt: "Conseils pratiques pour aménager un espace de travail optimal et maintenir votre concentration pendant vos sessions d'étude.",
        image: user2,
        author: "Alexandre Chen",
        date: "30 Jan 2025"
      },
      {
        id: 7,
        title: "Comment gérer efficacement votre temps d'étude",
        excerpt: "Techniques de gestion du temps éprouvées pour optimiser vos sessions d'apprentissage et éviter la procrastination.",
        image: user3,
        author: "Julie Lefèvre",
        date: "15 Jan 2025"
      },
      {
        id: 3,
        title: "Les 10 outils essentiels pour l'apprentissage à distance",
        excerpt: "Guide complet des applications et plateformes qui faciliteront votre parcours d'apprentissage en ligne.",
        image: user1,
        author: "Julie Lefèvre",
        date: "5 Fév 2025"
      }
    ]
  });

  // Simuler le chargement des données
  useEffect(() => {
    // Dans une application réelle, vous feriez un appel API ici
    // fetchArticle(id).then(data => setArticle(data));
    window.scrollTo(0, 0);
  }, [id]);

  // Fonction pour rendre différents types de contenu
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={index} className="mb-6 text-gray-700 leading-relaxed">{item.text}</p>;
      case 'heading':
        return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-gray-800">{item.text}</h2>;
      case 'image':
        return (
          <figure key={index} className="my-8">
            <img src={item.src} alt={item.caption} className="w-full rounded-xl shadow-md" />
            {item.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-500 italic">{item.caption}</figcaption>
            )}
          </figure>
        );
      case 'quote':
        return (
          <blockquote key={index} className="my-8 pl-6 border-l-4 border-pink-500">
            <p className="italic text-lg text-gray-700">{item.text}</p>
            {item.author && <footer className="mt-2 text-sm font-medium text-gray-600">— {item.author}</footer>}
          </blockquote>
        );
      case 'list':
        return (
          <ul key={index} className="my-6 pl-6 list-disc space-y-2 text-gray-700">
            {item.items.map((listItem, i) => (
              <li key={i} className="pl-2">{listItem}</li>
            ))}
          </ul>
        );
      case 'conclusion':
        return (
          <div key={index} className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Conclusion</h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec l'image de couverture */}
        <header className="relative w-full">
          <div className="w-full h-96 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 rounded-full bg-pink-600 text-white text-xs font-medium uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm">{article.readTime}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
            </div>
          </div>
        </header>

        {/* Contenu principal */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Métadonnées de l'article */}
          <div className="flex items-center mb-12 pb-8 border-b border-gray-200">
            <img 
              src={article.authorAvatar} 
              alt={article.author} 
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{article.author}</h3>
              <p className="text-sm text-gray-500">{article.authorRole}</p>
            </div>
            <div className="ml-auto flex space-x-1 text-gray-500 text-sm">
              <span>{article.date}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Corps de l'article */}
          <article className="prose prose-pink max-w-none">
            {article.content.map(renderContent)}
          </article>

          {/* Partage sur les réseaux sociaux */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Partagez cet article</h3>
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auteur */}
          <div className="mt-12 p-6 bg-gray-100 rounded-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img 
                src={article.authorAvatar} 
                alt={article.author} 
                className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{article.author}</h3>
                <p className="text-sm text-gray-500 mb-3">{article.authorRole}</p>
                <p className="text-gray-700">Expert en pédagogie numérique avec plus de 10 ans d'expérience dans le domaine de l'éducation. Passionnée par les innovations technologiques qui transforment l'apprentissage et l'enseignement.</p>
              </div>
            </div>
          </div>

          {/* Articles connexes */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title} 
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedArticle.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{relatedArticle.author}</span>
                      <span className="text-gray-500">{relatedArticle.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commentaires */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Commentaires (5)</h2>
            
            {/* Formulaire de commentaire */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-lg font-medium mb-4">Laisser un commentaire</h3>
              <div className="mb-4">
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none transition" 
                  rows="4" 
                  placeholder="Partagez votre point de vue..."
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-4">
                <input 
                  type="text" 
                  className="flex-1 min-w-[250px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition" 
                  placeholder="Votre nom"
                />
                <input 
                  type="email" 
                  className="flex-1 min-w-[250px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition" 
                  placeholder="Votre email"
                />
              </div>
              <div className="mt-4 flex items-center">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo" className="text-sm text-gray-600">Enregistrer mes informations pour les prochains commentaires</label>
              </div>
              <button 
                className="mt-4 px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition"
                style={{ backgroundColor: '#fe4a55' }}
              >
                Publier le commentaire
              </button>
            </div>
            
            {/* Liste des commentaires */}
            <div className="space-y-6">
              {/* Commentaire 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <img src="/api/placeholder/48/48" alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Sophie Martin</h4>
                      <span className="text-sm text-gray-500">Il y a 2 jours</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Excellent article ! J'ai appliqué la méthode Pomodoro depuis quelques semaines et j'ai constaté une amélioration significative de ma concentration. Les conseils sur l'environnement d'étude sont également très pertinents.
                    </p>
                    <button className="text-pink-600 text-sm font-medium hover:text-pink-800">Répondre</button>
                  </div>
                </div>
                
                {/* Réponse au commentaire 1 */}
                <div className="ml-14 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start">
                    <img src={article.authorAvatar} alt={article.author} className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center mb-1">
                        <h5 className="font-bold text-sm">{article.author}</h5>
                        <span className="ml-2 px-2 py-0.5 bg-gray-100 text-xs rounded-full">Auteur</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Merci Sophie ! Je suis ravie que ces méthodes vous aient été utiles. N'hésitez pas à partager vos propres astuces d'apprentissage !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Commentaire 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <img src="/api/placeholder/48/48" alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Lucas Dubois</h4>
                      <span className="text-sm text-gray-500">Il y a 3 jours</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Je trouve que l'idée de créer des groupes d'étude virtuels est particulièrement pertinente. Pour ceux qui cherchent des outils, je recommande Discord ou Zoom qui permettent de partager facilement des écrans et des documents.
                    </p>
                    <button className="text-pink-600 text-sm font-medium hover:text-pink-800">Répondre</button>
                  </div>
                </div>
              </div>
              
              {/* Commentaire 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <img src="/api/placeholder/48/48" alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">Emma Leroy</h4>
                      <span className="text-sm text-gray-500">Il y a 4 jours</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Pourriez-vous recommander des applications de flashcards spécifiques ? J'aimerais essayer cette méthode pour mes cours de biologie.
                    </p>
                    <button className="text-pink-600 text-sm font-medium hover:text-pink-800">Répondre</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pagination des commentaires */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded text-white font-medium" style={{ backgroundColor: '#fe4a55' }}>1</button>
                <button className="px-4 py-2 rounded text-gray-600 hover:bg-gray-100">2</button>
                <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetail;