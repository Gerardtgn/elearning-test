import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import { BookOpen, Users, Video, Award, ArrowRight, ClipboardList, RedoDot, FileText, Check, Clock, Star, BookOpenCheck, VideoIcon, Download } from 'lucide-react';
import LoginPage from './connexion/LoginPage';
//Importation des fichiers css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/animate.min.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/owl.theme.default.min.css';
import '../../assets/css/rangeSlider.min.css';
import '../../assets/css/meanmenu.min.css';
import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import '../../assets/css/odometer.min.css';
import '../../assets/css/magnific-popup.min.css';
import '../../assets/css/nice-select.min.css';
import '../../assets/css/rangeSlider.min.css';
import '../../assets/css/boxicons.min.css';
//Importation de quelques images 
//A rétirer plustard
import img1 from '../../assets/img/courses/img1.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import main_banner2 from '../../assets/img/banner/main-banner1.jpg';


export default function Home(){
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                    <h1 className="text-5xl font-bold leading-tight">
                        Découvrez une nouvelle façon d'apprendre en ligne
                    </h1>
                    <p className="text-xl text-indigo-100">
                        Une plateforme d'apprentissage interactive avec des cours en direct,
                        des ressources pédagogiques et un suivi personnalisé.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                        Commencer maintenant
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                        En savoir plus
                        </button>
                    </div>
                    </div>
                    <div className="hidden lg:block">
                    <img 
                        // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        src={main_banner2}
                        alt="Étudiants en apprentissage"
                        className="rounded-lg shadow-xl"
                    />
                    </div>
                </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">
                    Pourquoi choisir notre plateforme ?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                    Découvrez les avantages qui font la différence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-gray-50 rounded-xl">
                    <Video className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cours en direct</h3>
                    <p className="text-gray-600">Participez à des sessions interactives avec nos experts</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                    <Video className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cours en vidéo</h3>
                    <p className="text-gray-600">
                        Nos cours sont proposés sous forme de vidéos pédagogiques, permettant une meilleure compréhension des concepts.
                    </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                    <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ressources riches</h3>
                    <p className="text-gray-600">Accédez à une bibliothèque de contenus pédagogiques</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                    <RedoDot className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Adapté à tous les niveaux</h3>
                    <p className="text-gray-600">
                        Nos contenus sont conçus pour s'adapter à chaque niveau d'apprentissage, du primaire au secondaire, avec un langage clair et accessible.
                    </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                    <ClipboardList className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">TD et exercices pratiques</h3>
                    <p className="text-gray-600">
                        Chaque cours est accompagné de Travaux Dirigés et d’exercices pratiques pour renforcer l’apprentissage et la mise en pratique.
                    </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl">
                    <Users className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Communauté active</h3>
                    <p className="text-gray-600">Échangez avec d'autres apprenants passionnés</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Section Cours populaire*/}
            <div className="courses-area ptb-100 ">
                <div className="container">
                <div className="section-title">
                <span className="sub-title" style={{'color': 'indigo'}}>Devenez meilleur avec nous</span>
                <h2>Les cours populaires d'e-Learing</h2>
                <p className='text-gray-600'>Explorez tous nos cours et choisissez ceux qui vous conviennent pour vous inscrire et commencer à apprendre avec nous ! Nous vous assurons que vous ne le regretterez jamais !</p>
                </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        {/* <img src={img1} alt="image"/> */}
                                        <video width="100%" height="auto" controls poster={img1}>
                                        <source src="" type="video/mp4"  />
                                        Désolé, votre navigateur ne prend pas en charge la balise vidéo.
                                        </video>
                                    </a> 
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">CM1</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user1} className="rounded-circle text-primary" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Alex Morgan</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Deep Learning a-z™: Hands-on Artificial Neural Networks</a></h3>
                                    <p>This master level course is for you if you are looking to learn the DL & ANN topics in and out within a short time!</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours Primaire</li>
                                        <li><i className='flaticon-people text-primary'></i> Mathématques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        {/* <img src={img2} alt="image"/> */}
                                        <video width="100%" height="auto" controls poster={img2}>
                                        <source src="" type="video/mp4"  />
                                        Désolé, votre navigateur ne prend pas en charge la balise vidéo.
                                        </video>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">CM2</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user2} className="rounded-circle text-primary" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Sarah Taylor</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Java Programming Masterclass for Software Developers</a></h3>
                                    <p>Java is the most stable and vastly uses a top programming language for mobile, web, and desktop environments.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours primaire</li>
                                        <li><i className='flaticon-people text-primary'></i> Mathématiques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        {/* <img src={img3} alt="image"/> */}
                                        <video width="100%" height="auto" controls poster={img3}>
                                        <source src="" type="video/mp4"  />
                                        Désolé, votre navigateur ne prend pas en charge la balise vidéo.
                                        </video>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">CM2</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user3} className="rounded-circle" alt="image"/>
                                        <span style={{'color': 'indigo'}}>David Warner</span>
                                    </div>
                                    <h3><a href="single-course-1.html">The Data Science Course 2025: Complete Data Science Bootcamp</a></h3>
                                    <p>We designed the Data Science Bootcamp course to give you the best learning experience within a short time.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours Primaire</li>
                                        <li><i className='flaticon-people text-primary'></i> EST</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        {/* <img src={img1} alt="image"/> */}
                                        <video width="100%" height="auto" controls poster={img1}>
                                        <source src="" type="video/mp4"  />
                                        Désolé, votre navigateur ne prend pas en charge la balise vidéo.
                                        </video>
                                    </a> 
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">CM2</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user1} className="rounded-circle" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Alex Morgan</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Deep Learning a-z™: Hands-on Artificial Neural Networks</a></h3>
                                    <p>This master level course is for you if you are looking to learn the DL & ANN topics in and out within a short time!</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i>Cours primaire</li>
                                        <li><i className='flaticon-people text-primary'></i> ES</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        {/* <img src={img2} alt="image"/> */}
                                        <video width="100%" height="auto" controls poster={img2}>
                                        <source src="" type="video/mp4"  />
                                        Désolé, votre navigateur ne prend pas en charge la balise vidéo.
                                        </video>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">3ieme</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user2} className="rounded-circle" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Sarah Taylor</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Java Programming Masterclass for Software Developers</a></h3>
                                    <p>Java is the most stable and vastly uses a top programming language for mobile, web, and desktop environments.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours secondaire</li>
                                        <li><i className='flaticon-people text-primary'></i> Mathématiques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        {/* <img src={img3} alt="image"/> */}
                                        <video width="100%" height="auto" controls poster={img3}>
                                        <source src="" type="video/mp4"  />
                                        Désolé, votre navigateur ne prend pas en charge la balise vidéo.
                                        </video>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">3ieme</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user3} className="rounded-circle" alt="image"/>
                                        <span style={{'color': 'indigo'}}> David Warner</span>
                                    </div>
                                    <h3><a href="single-course-1.html">The Data Science Course 2025: Complete Data Science Bootcamp</a></h3>
                                    <p>We designed the Data Science Bootcamp course to give you the best learning experience within a short time.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours secondaire</li>
                                        <li><i className='flaticon-people text-primary'></i>SVT</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            {/* Fin de la section des cours*/}

            {/* Section quelque td */}
            <div className="courses-area ptb-20">
                <div className="container">
                    <div className="section-title">
                        <h2>Quelques de nos Travaux pratiques</h2>
                        <p>Explorez les travaux pratiques que proposent nos enseignants</p>
                    </div>

                    <div className="row justify-content-center">
                        {/* Exemple de TD 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="td1.pdf" className="d-block image">
                                        <i className="flaticon-pdf text-primary" style={{fontSize: "50px"}}></i>
                                    </a>
                                    <a href="td1.pdf" className="fav"><i className="flaticon-heart"></i></a>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user1} className="rounded-circle text-primary" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Alex Morgan</span>
                                    </div>
                                    
                                    <h3> <a href="td1.pdf">Calcul Mental</a></h3>
                                    <p>Ce TD vous aidera à améliorer vos compétences en calcul mental, idéal pour les élèves de niveau primaire.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours Primaire</li>
                                        <li><i className='flaticon-people text-primary'></i> Mathématiques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Exemple de TD 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="td2.pdf" className="d-block image">
                                        <i className="flaticon-pdf text-primary" style={{fontSize: "50px"}}></i>
                                    </a>
                                    <a href="td2.pdf" className="fav"><i className="flaticon-heart"></i></a>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user2} className="rounded-circle text-primary" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Sarah Taylor</span>
                                    </div>
                                    <h3> <a href="td2.pdf">Les Équations de Second degré</a></h3>
                                    <p>Apprenez à résoudre des équations de second degré avec des exercices pratiques dans ce TD.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours Secondaire</li>
                                        <li><i className='flaticon-people text-primary'></i> Mathématiques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Exemple de TD 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="td3.pdf" className="d-block image">
                                        <i className="flaticon-pdf text-primary" style={{fontSize: "50px"}}></i>
                                    </a>
                                    <a href="td3.pdf" className="fav"><i className="flaticon-heart"></i></a>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user3} className="rounded-circle" alt="image"/>
                                        <span style={{'color': 'indigo'}}>David Warner</span>
                                    </div>
                                    <h3><a href="td3.pdf">Introduction à la Programmation</a></h3>
                                    <p>Ce TD est destiné aux étudiants universitaires qui souhaitent débuter en programmation avec Python.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours Universitaire</li>
                                        <li><i className='flaticon-people text-primary'></i> Informatique</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Exemple de TD 4 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="td4.pdf" className="d-block image">
                                        <i className="flaticon-pdf text-primary" style={{fontSize: "50px"}}></i>
                                    </a>
                                    <a href="td4.pdf" className="fav"><i className="flaticon-heart"></i></a>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user1} className="rounded-circle" alt="image"/>
                                        <span style={{'color': 'indigo'}}>Alex Morgan</span>
                                    </div>
                                    <h3><a href="td4.pdf">Géométrie</a></h3>
                                    <p>Un TD complet pour maîtriser la géométrie dans le cadre du programme de lycée.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda text-primary'></i> Cours Lycée</li>
                                        <li><i className='flaticon-people text-primary'></i> Mathématiques</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-12 col-md-12">
                            <div className="courses-info mb-2">
                            <p>Profitez des méthodes d'apprentissage de haute qualité et atteignez des compétences de niveau supérieur ! <a href="" >Inscrivez-vous dès maintenant !</a>.</p>
                            </div>
                        </div>
                
                </div>
            </div>
            {/* Fin section td */}

            {/* Section Abonnement */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">
                    Des offres adaptées à vos besoins
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                    Choisissez la formule qui vous convient le mieux
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Offre d'essai */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">Essai Gratuit</h3>
                        <span className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded-full">7 jours</span>
                        </div>
                        <p className="mt-4 text-4xl font-bold text-gray-900">0 F</p>
                        <p className="mt-2 text-gray-500">Découvrez notre plateforme</p>

                        <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3" />
                            <span>Accès à tous les cours</span>
                        </li>
                        <li className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3" />
                            <span>Participation aux TD</span>
                        </li>
                        <li className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3" />
                            <span>Téléchargement des fichiers</span>
                        </li>
                        <li className="flex items-center">
                            <Clock className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-500">Limité à 7 jours</span>
                        </li>
                        </ul>
                    </div>

                    <button className="mt-8 w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Commencer gratuitement
                    </button>
                    </div>

                    {/* Cours Primaire */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-indigo-600 flex flex-col relative">
                    <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white text-sm rounded-full">
                        Populaire
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">Cours Primaire</h3>
                        <Star className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="mt-4 space-y-2">
                        <p className="text-gray-600">1 mois : <span className="text-2xl font-bold text-gray-900">1000 F</span></p>
                        <p className="text-gray-600">6 mois : <span className="text-2xl font-bold text-gray-900">3500 F</span></p>
                        <p className="text-gray-600">1 an : <span className="text-2xl font-bold text-gray-900">5000 F</span></p>
                        </div>

                        <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                            <BookOpenCheck className="w-5 h-5 text-green-500 mr-3" />
                            <span>Ebook gratuit offert</span>
                        </li>
                        <li className="flex items-center">
                            <VideoIcon className="w-5 h-5 text-green-500 mr-3" />
                            <span>Accès aux visioconférences</span>
                        </li>
                        <li className="flex items-center">
                            <Download className="w-5 h-5 text-green-500 mr-3" />
                            <span>Téléchargement illimité</span>
                        </li>
                        <li className="flex items-center">
                            <Users className="w-5 h-5 text-green-500 mr-3" />
                            <span>Support prioritaire</span>
                        </li>
                        </ul>
                    </div>

                    <button className="mt-8 w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Choisir cette offre
                    </button>
                    </div>

                    {/* Cours Secondaire */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">Cours Secondaire</h3>
                        <Star className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="mt-4 space-y-2">
                        <p className="text-gray-600">1 mois : <span className="text-2xl font-bold text-gray-900">1500 F</span></p>
                        <p className="text-gray-600">6 mois : <span className="text-2xl font-bold text-gray-900">6500 F</span></p>
                        <p className="text-gray-600">1 an : <span className="text-2xl font-bold text-gray-900">10000 F</span></p>
                        </div>

                        <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                            <BookOpenCheck className="w-5 h-5 text-green-500 mr-3" />
                            <span>Ebook gratuit offert</span>
                        </li>
                        <li className="flex items-center">
                            <VideoIcon className="w-5 h-5 text-green-500 mr-3" />
                            <span>Accès aux visioconférences</span>
                        </li>
                        <li className="flex items-center">
                            <Download className="w-5 h-5 text-green-500 mr-3" />
                            <span>Téléchargement illimité</span>
                        </li>
                        <li className="flex items-center">
                            <Users className="w-5 h-5 text-green-500 mr-3" />
                            <span>Support prioritaire</span>
                        </li>
                        </ul>
                    </div>

                    <button className="mt-8 w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Choisir cette offre
                    </button>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600">
                    Besoin d'aide pour choisir ? <a href="" className="text-indigo-600 font-semibold hover:text-indigo-700">Contactez-nous</a>
                    </p>
                </div>
                </div>
            </div>

            {/* Fin section abonnement */}


            {/* section contact */}
            <div className="contact-area ptb-20">
                <div className="container">
                <h1 className='text-center  my-5' style={{'fontSize': '40px', 'fontWeight': 'bold'}}>Contacter eLearning</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                            <p>
                            Vous avez des questions ou besoin d'informations supplémentaires ? N'hésitez pas à nous contacter ! Notre équipe est à votre disposition pour vous accompagner et répondre à toutes vos demandes. Remplissez le formulaire ou utilisez nos coordonnées pour nous joindre directement.
                            </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-map text-primary'></i>
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-phone-call text-primary'></i>
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a></p>
                                        <p>Mail: <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#95fdf0f9f9fad5f0f9f0f4e7fbfce3bbf6faf8"><span className="__cf_email__" data-cfemail="0b636e6767644b6e676e6a7965627d25686466">[email&#160;protected]</span></a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-time-five text-primary' ></i>
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday & Saturday: 10:30 - 22:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-form">
                                <h2>Ready to Get Started?</h2>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group mb-3">
                                                <input 
                                                type="text" 
                                                name="name" 
                                                id="name" 
                                                required data-error="Please enter your name" 
                                                placeholder="Your name"/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group mb-3">
                                                <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                required data-error="Please enter your email" 
                                                placeholder="Your email address"/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group mb-3">
                                                <input 
                                                type="text" 
                                                name="phone_number" 
                                                id="phone_number" 
                                                required data-error="Please enter your phone number" 
                                                placeholder="Your phone number"/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group mb-3">
                                                <textarea name="message" id="message" cols="30" rows="5" required data-error="Please enter your message" placeholder="Write your message..."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">Send Message<span></span></button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fin section contact */}

            {/* CTA Section */}
            <div className="bg-indigo-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                    Prêt à commencer votre voyage d'apprentissage ?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8">
                    Rejoignez des milliers d'apprenants qui ont déjà fait le pas
                    </p>
                    <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center">
                    S'inscrire maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
                </div>
            </div>
            </main>
        </div>
    );
}
