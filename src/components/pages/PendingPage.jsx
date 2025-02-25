import React, { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';

const PendingPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:8000/api/logout', { user }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <Loader className="w-12 h-12 animate-spin text-indigo-600" />
          </div>
        )}
        <div className="text-center">
          <p>Salut cher utilisateur.</p>
          <p>Votre compte est en cours d'activation.</p>
          <p>Veuillez vous déconnecter et vous reconnecter plus tard!!!</p>
          <button onClick={handleLogout} className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            se déconnecter
          </button>
        </div>
      </div>
    </>
  );
};

export default PendingPage;