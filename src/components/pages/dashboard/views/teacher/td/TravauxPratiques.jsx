import React from "react";
import { Plus, BookOpen, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";
import TdComponent from "./sections/TdComponent";
import { useNavigate } from "react-router-dom";

export default function () {

    const [travauxPratiques, setTravauxPratiques] = useState([{'test':'test'}]);
    const navigate = useNavigate();
    const handleCreateTd = () =>{
        navigate('/dashboard/teacher/create-td');

    };
    const handleTdClick = ({td}) => {
        return null;
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Mes TD</h1>
                <button
                onClick={handleCreateTd}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                <Plus className="w-5 h-5 mr-2" />
                Ajouter un TD
                </button>
            </div>
            {
                travauxPratiques.length == 0 ?(
                    <div className="text-center py-12">
                        <div className="mb-4">
                            <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun TD disponible</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Commencez par partager votre premier TD.
                        </p>
                        <div className="mt-6">
                            <button
                            onClick={handleCreateTd}
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            <Plus className="w-5 h-5 mr-2" />
                            Nouveau TD
                            </button>
                        </div>
                    </div>
                ):
                (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {travauxPratiques.map((travauxPratique) => (
                        <div key={travauxPratique.id} onClick={()=> handleTdClick(travauxPratique) }>
                            <TdComponent td={travauxPratique}  />
                            </div>
                        ))}
                    </div>
                )

            }
        </div>
        
    );
    
};