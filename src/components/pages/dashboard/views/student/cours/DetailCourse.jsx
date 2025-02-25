import React, { useState, useEffect } from 'react';
import { Heart, BookOpen, Users, MessageCircle, Send, ThumbsUp, Reply } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function DetailCourse() {
  const location = useLocation();
  const course = location.state?.course;

  useEffect(() => {
    console.log('Location state:', location.state);
    console.log('Course:', course);
  }, [location.state, course]);

  if (!course || !course.chapitres_enseigne || !course.chapitres_enseigne.matieres_classes_enseignant) {
    return <div>Loading...</div>;
  }

  const [newQuestion, setNewQuestion] = useState('');
  const [newReply, setNewReply] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  // Données factices pour les questions et réponses
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: {
        name: 'Sophie Martin',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Pouvez-vous expliquer plus en détail la partie sur les équations du second degré ?',
      date: '2024-02-28',
      likes: 5,
      replies: [
        {
          id: 1,
          user: {
            name: course.chapitres_enseigne.matieres_classes_enseignant.user.nom,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          },
          content: 'Bien sûr ! Je vais préparer une vidéo supplémentaire pour expliquer ce concept plus en détail.',
          date: '2024-02-29',
          likes: 3
        }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Lucas Dubois',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Est-ce qu\'il y aura des exercices pratiques à la fin de ce chapitre ?',
      date: '2024-02-27',
      likes: 2,
      replies: []
    }
  ]);

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const newQuestionObj = {
      id: questions.length + 1,
      user: {
        name: 'Vous',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: newQuestion,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      replies: []
    };

    setQuestions([...questions, newQuestionObj]);
    setNewQuestion('');
  };

  const handleReplySubmit = (questionId) => {
    if (!newReply.trim()) return;

    const updatedQuestions = questions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          replies: [...question.replies, {
            id: question.replies.length + 1,
            user: {
              name: 'Vous',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            },
            content: newReply,
            date: new Date().toISOString().split('T')[0],
            likes: 0
          }]
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);
    setNewReply('');
    setReplyingTo(null);
  };

  const handleLike = (questionId, replyId = null) => {
    const updatedQuestions = questions.map(question => {
      if (replyId === null && question.id === questionId) {
        return { ...question, likes: question.likes + 1 };
      } else if (replyId !== null && question.id === questionId) {
        const updatedReplies = question.replies.map(reply => {
          if (reply.id === replyId) {
            return { ...reply, likes: reply.likes + 1 };
          }
          return reply;
        });
        return { ...question, replies: updatedReplies };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section vidéo et informations */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <video 
              className="w-full aspect-video object-cover"
              controls
              poster="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
            >
              <source src={`http://localhost:8000/storage/${course.contenu}`} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
              <Heart className="w-5 h-5 text-indigo-600" />
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-center mb-4">
              <img 
                className="h-12 w-12 rounded-full object-cover" 
                src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} 
                alt={course.chapitres_enseigne.matieres_classes_enseignant.user.nom} 
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {course.chapitres_enseigne.matieres_classes_enseignant.user.nom} {course.chapitres_enseigne.matieres_classes_enseignant.user.prenom}
                </h3>
                <p className="text-sm text-gray-500">{course.chapitres_enseigne.matieres_classes_enseignant.matiere.nom}</p>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {course.titre}
            </h1>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{course.chapitres_enseigne.matieres_classes_enseignant.classe.nom}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>Créé le {new Date(course.created_at).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-4">Description du cours</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </div>
        </div>

        {/* Section questions et réponses */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Questions et réponses</h2>
          </div>

          <div className="p-6">
            {/* Formulaire nouvelle question */}
            <form onSubmit={handleQuestionSubmit} className="mb-8">
              <div className="flex items-start space-x-4">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
              {questions.map((question) => (
                <div key={question.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={question.user.avatar}
                        alt={question.user.name}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {question.user.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {question.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{question.content}</p>
                  </div>
                  <div className="mt-6 flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => handleLike(question.id)}
                      className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                    >
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {question.likes} J'aime
                    </button>
                    <button
                      type="button"
                      onClick={() => setReplyingTo(question.id)}
                      className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                    >
                      <Reply className="w-4 h-4 mr-1" />
                      Répondre
                    </button>
                  </div>

                  {/* Réponses */}
                  <div className="mt-6 space-y-4">
                    {question.replies.map((reply) => (
                      <div key={reply.id} className="flex space-x-3 pl-6 border-l-2 border-gray-200">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={reply.user.avatar}
                            alt={reply.user.name}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {reply.user.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {reply.date}
                          </p>
                          <div className="mt-2 text-sm text-gray-700">
                            <p>{reply.content}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleLike(question.id, reply.id)}
                            className="mt-2 flex items-center text-sm text-gray-500 hover:text-gray-700"
                          >
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {reply.likes} J'aime
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Formulaire de réponse */}
                  {replyingTo === question.id && (
                    <div className="mt-6 flex items-start space-x-4">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Votre avatar"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                          <textarea
                            rows="3"
                            className="block w-full py-3 px-4 border-0 resize-none focus:ring-0 sm:text-sm"
                            placeholder="Votre réponse..."
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-end space-x-4">
                          <button
                            type="button"
                            onClick={() => setReplyingTo(null)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Annuler
                          </button>
                          <button
                            type="button"
                            onClick={() => handleReplySubmit(question.id)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Répondre
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCourse;