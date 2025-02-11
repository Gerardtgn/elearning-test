import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Page non trouvée</h1>
      <p className="text-gray-600 mt-4">Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;
