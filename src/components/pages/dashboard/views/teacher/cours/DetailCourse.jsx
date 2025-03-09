import React, { useState, useEffect } from 'react';
import { Heart, BookOpen, Users, MessageCircle, Send, ThumbsUp, Reply, Info } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../../../api/api';
import { getCoursByUid } from '../../../../../../api/cours';
import { addQuestion, addReponse } from '../../../../../../api/questionReponse';

function DetailCourse() {
  const params = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState('info'); // 'info' ou 'questions'
  const [newQuestion, setNewQuestion] = useState('');
  const [newReply, setNewReply] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, [params.uid]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const response = await getCoursByUid(params.uid);
      setCourse(response);
      setQuestions(response.questions || []);
      setLoading(false);
    } catch (err) {
      console.error('Erreur lors du chargement du cours:', err);
      setLoading(false);
      Swal.fire({
        title: 'Erreur !',
        text: 'Impossible de charger le cours.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const data = {
      'user_id': user.id,
      'question': newQuestion,
      'lecon_id': course.id
    };

    try {
      await addQuestion(data);
      setNewQuestion('');
      // Rafraîchir les questions après soumission
      fetchCourse();
      Swal.fire({
        title: 'Succès !',
        text: 'Votre question a été enregistrée.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (e) {
      Swal.fire({
        title: 'Erreur !',
        text: 'Erreur lors de l\'enregistrement de la question.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleReplySubmit = async (questionId) => {
    if (!newReply.trim()) return;

    const data = {
      'reponse': newReply,
      'user_id': user.id,
      'question_id': questionId,
    };

    try {
      await addReponse(data);
      setNewReply('');
      setReplyingTo(null);
      // Rafraîchir les questions après soumission
      fetchCourse();
      Swal.fire({
        title: 'Succès !',
        text: 'Votre réponse a été enregistrée.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (e) {
      Swal.fire({
        title: 'Erreur !',
        text: 'Erreur lors de l\'enregistrement de la réponse.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleLike = (questionId, replyId = null) => {
    // Implémenter la logique de like avec API ici
    const updatedQuestions = questions.map(question => {
      if (replyId === null && question.id === questionId) {
        return { ...question, likes: (question.likes || 0) + 1 };
      } else if (replyId !== null && question.id === questionId) {
        const updatedReplies = question.reponses.map(reply => {
          if (reply.id === replyId) {
            return { ...reply, likes: (reply.likes || 0) + 1 };
          }
          return reply;
        });
        return { ...question, reponses: updatedReplies };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Cours non trouvé</h2>
          <p className="mt-2 text-gray-500">Le cours que vous recherchez n'existe pas ou a été supprimé.</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section vidéo */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="relative">
            <video 
              className="w-full aspect-video object-cover"
              controls
              poster="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
            >
              <source src={`${BASE_URL}/storage/${course.contenu}`} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-90 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
              <Heart className="w-5 h-5 text-indigo-600" />
            </button>
          </div>

          {/* Information basique en haut toujours visible */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <img 
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-indigo-100" 
                  src={`${BASE_URL}/storage/${course?.user?.image}`} 
                  alt={course?.user?.nom} 
                />
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">
                    {course?.user?.nom} {course?.user?.prenom}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">{course?.chapitres_enseigne?.matieres_classe?.matiere?.nom || 'Matière non spécifiée'}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{course?.chapitres_enseigne?.matieres_classe?.classe?.nom || 'Classe non spécifiée'}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Créé le {formatDate(course?.created_at)}</span>
                </div>
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">
              {course?.titre}
            </h1>
          </div>

          {/* Système d'onglets */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('info')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'info'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors duration-200 flex items-center`}
              >
                <Info className="w-4 h-4 mr-2" />
                Informations du cours
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'questions'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } transition-colors duration-200 flex items-center`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Questions et réponses
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-600">
                  {questions?.length || 0}
                </span>
              </button>
            </nav>
          </div>

          {/* Contenu des onglets */}
          <div className="p-4 sm:p-6">
            {activeTab === 'info' ? (
              <div className="prose max-w-none">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Description du cours</h2>
                <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                  {course?.description ? (
                    <p>{course.description}</p>
                  ) : (
                    <p className="text-gray-500 italic">Aucune description disponible pour ce cours.</p>
                  )}
                </div>
                
                {/* Informations supplémentaires */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold mb-2 text-gray-900">Détails du cours</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="font-medium mr-2">Matière:</span>
                        <span className="text-gray-700">{course?.chapitres_enseigne?.matieres_classe?.matiere?.nom || 'Non spécifiée'}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium mr-2">Classe:</span>
                        <span className="text-gray-700">{course?.chapitres_enseigne?.matieres_classe?.classe?.nom || 'Non spécifiée'}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium mr-2">Date de création:</span>
                        <span className="text-gray-700">{formatDate(course?.created_at)}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold mb-2 text-gray-900">À propos de l'enseignant</h3>
                    <div className="flex items-center mb-2">
                      <img 
                        className="h-10 w-10 rounded-full object-cover border border-gray-200" 
                        src={`${BASE_URL}/storage/${course?.user?.image}`} 
                        alt={course?.user?.nom} 
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{course?.user?.nom} {course?.user?.prenom}</p>
                        <p className="text-xs text-gray-500">{course?.user?.email || 'Email non disponible'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Formulaire nouvelle question */}
                <form onSubmit={handleQuestionSubmit} className="mb-8">
                  <div className="flex items-start space-x-4">
                    <img
                      className="h-10 w-10 rounded-full border border-gray-200 hidden sm:block"
                      src={`${BASE_URL}/storage/${user.image}`}
                      alt="Votre avatar"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <textarea
                          rows="3"
                          name="question"
                          id="question"
                          className="block w-full py-3 px-4 border-0 resize-none focus:ring-0 sm:text-sm"
                          placeholder="Posez votre question..."
                          value={newQuestion}
                          onChange={(e) => setNewQuestion(e.target.value)}
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Liste des questions */}
                <div className="space-y-6">
                  {questions && questions.length > 0 ? (
                    questions.map((question) => (
                      <div key={question.id} className="bg-gray-50 rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-200"
                              src={`${BASE_URL}/storage/${question.user.image}`}
                              alt={`${question.user.prenom} ${question.user.nom}`}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {question.user.nom} {question.user.prenom}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatDate(question.created_at)}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p className="bg-white p-3 rounded-md border border-gray-100">{question.question}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                          {/* <button
                            type="button"
                            onClick={() => handleLike(question.id)}
                            className="flex items-center text-xs sm:text-sm text-gray-500 hover:text-indigo-600 transition-colors"
                          >
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {question.likes || 0} J'aime
                          </button> */}
                          <button
                            type="button"
                            onClick={() => setReplyingTo(replyingTo === question.id ? null : question.id)}
                            className="flex items-center text-xs sm:text-sm text-gray-500 hover:text-indigo-600 transition-colors"
                          >
                            <Reply className="w-4 h-4 mr-1" />
                            Répondre {question.reponses && question.reponses.length > 0 ? `(${question.reponses.length})` : ''}
                          </button>
                        </div>

                        {/* Réponses */}
                        {question.reponses && question.reponses.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {question.reponses.map((reply) => (
                              <div key={reply.id} className="flex space-x-3 pl-4 sm:pl-6 border-l-2 border-indigo-100 mt-2 pt-2">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-gray-200"
                                    src={`${BASE_URL}/storage/${reply.user.image}`}
                                    alt={`${reply.user.nom} ${reply.user.prenom}`}
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                                    {reply.user.nom} {reply.user.prenom}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {formatDate(reply.created_at)}
                                  </p>
                                  <div className="mt-1 text-xs sm:text-sm text-gray-700">
                                    <p className="bg-white p-2 rounded-md border border-gray-100">{reply.reponse}</p>
                                  </div>
                                  {/* <button
                                    type="button"
                                    onClick={() => handleLike(question.id, reply.id)}
                                    className="mt-2 flex items-center text-xs text-gray-500 hover:text-indigo-600 transition-colors"
                                  >
                                    <ThumbsUp className="w-3 h-3 mr-1" />
                                    {reply.likes || 0} J'aime
                                  </button> */}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Formulaire de réponse */}
                        {replyingTo === question.id && (
                          <div className="mt-4 flex items-start space-x-2 sm:space-x-4 pl-4 sm:pl-6 border-l-2 border-indigo-100">
                            <img
                              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-gray-200 hidden sm:block"
                              src={`${BASE_URL}/storage/${user.image}`}
                              alt="Votre avatar"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                <textarea
                                  rows="2"
                                  className="block w-full py-2 px-3 border-0 resize-none focus:ring-0 text-xs sm:text-sm"
                                  placeholder="Votre réponse..."
                                  value={newReply}
                                  onChange={(e) => setNewReply(e.target.value)}
                                />
                              </div>
                              <div className="mt-2 flex flex-wrap items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setReplyingTo(null)}
                                  className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 border border-gray-300 text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Annuler
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleReplySubmit(question.id)}
                                  className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <Send className="w-3 h-3 mr-1" />
                                  Répondre
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <MessageCircle className="w-12 h-12 mx-auto text-gray-300" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune question</h3>
                      <p className="mt-1 text-sm text-gray-500">Soyez le premier à poser une question sur ce cours.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCourse;