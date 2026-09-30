import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white">
            <div className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold mb-6 drop-shadow-2xl animate-pulse">
                    ✨ Bienvenue dans votre Univers d'Évaluation ✨
                </h1>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                    Plongez dans une expérience immersive et intuitive pour évaluer vos stagiaires. Cliquez sur le bouton magique ci-dessous et laissez la magie de l'évaluation transformer votre journée !
                </p>
            </div>

            <div className="bg-white shadow-2xl p-12 rounded-3xl w-full max-w-3xl text-center transform hover:scale-105 transition-transform duration-500">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    🌟 Étape 1 : Dévoilez le Pouvoir de l'Évaluation
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                    Préparez-vous à une aventure unique. Prenez une grande inspiration, rassemblez vos informations, et laissez chaque détail briller comme une étoile dans le ciel nocturne !
                </p>
                
                <Link to="/formulaire" className="p-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-full w-full hover:from-purple-700 hover:to-blue-700 hover:shadow-2xl transition-all duration-300">
                    🚀 Lancer l'Évaluation Magique
                </Link>
            </div>

            <footer className="mt-12 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} Master ISI. Tous droits réservés. <br />
                <span className="italic">"L'évaluation est une porte vers l'excellence."</span>
            </footer>
        </div>
    );
};

export default Dashboard;
