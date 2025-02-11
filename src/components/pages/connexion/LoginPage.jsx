import { Facebook } from 'lucide-react';
import { Phone} from 'lucide-react';
import banner2 from '../../../assets/img/banner/banner-img2.png';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Section Image */}
      <div 
        className="hidden lg:flex w-1/2 bg-no-repeat  bg-center" 
        style={{ backgroundImage: `url(${banner2})` }}
      ></div>

      {/* Section Formulaire */}
     
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 bg-white ">
        <div className='rounded-lg shadow-lg overflow-hidden p-8'>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Connexion</h2>
        
        <form className="mt-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" 
              placeholder="Votre email" 
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" 
              placeholder="Votre mot de passe" 
            />
          </div>
          <div className="mt-2 text-right">
            <a href="#" className="text-indigo-500 hover:underline text-sm">Mot de passe oublié ?</a>
          </div>
          <button 
            type="submit" 
            className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Se connecter
          </button>
        </form>
        
        {/* Connexion via Google & Facebook */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Ou connectez-vous avec</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Google
            </button>
            <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Phone className="mr-2" /> Téléphone
            </button>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Facebook className="mr-2" /> Facebook
            </button>
            
          </div>
        </div>

        {/* Redirection vers l'inscription */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Vous n'avez pas encore de compte ? 
            <a href="#" className="text-indigo-500 hover:underline"> S'inscrire</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
