import img1 from '../../assets/img/courses/img1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import CoursComponent from './CoursComponent';
import { useState } from 'react';
export default function Cours() {
    const [coursFiltres, setCoursFiltres] = useState([
        {
          id: 1,
          titre: "Introduction à la physique quantique",
          enseignant: "Prof. Martin Dubois",
          matiere: "Physique",
          classe: "Terminale S",
          vignette: img1,
          duree: "45 min",
          vues: 1245
        },
        {
          id: 2,
          titre: "Les équations du second degré",
          enseignant: "Dr. Sophie Laurent",
          matiere: "Mathématiques",
          classe: "Seconde",
          vignette: img2,
          duree: "32 min",
          vues: 987
        },
        {
          id: 3,
          titre: "La Révolution française",
          enseignant: "Prof. Alexandre Moreau",
          matiere: "Histoire",
          classe: "4ème",
          vignette: img3,
          duree: "58 min",
          vues: 2341
        },
        {
          id: 4,
          titre: "L'accord du participe passé",
          enseignant: "Mme. Clara Benoit",
          matiere: "Français",
          classe: "6ème",
          vignette: img1,
          duree: "25 min",
          vues: 1678
        },
        {
          id: 5,
          titre: "Les réactions d'oxydoréduction",
          enseignant: "Dr. Thomas Mercier",
          matiere: "Chimie",
          classe: "Première S",
          vignette: img2,
          duree: "41 min",
          vues: 893
        },
        {
          id: 6,
          titre: "Introduction à la programmation Python",
          enseignant: "Prof. Julie Lemoine",
          matiere: "Informatique",
          classe: "Seconde",
          vignette: img3,
          duree: "37 min",
          vues: 3215
        },
      ]);
    return (
        <>
            <div className="courses-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Apprenez à votre propre rythme</span>
                        <h2>Nos cours populaires </h2>
                        <p>Explorez tous nos cours et choisissez ceux qui vous conviennent pour vous inscrire et commencer à apprendre avec nous ! Nous vous garantissons que vous ne le regretterez jamais !</p>
                    </div>
                    <div className="row justify-content-center">

                        <div className="container mx-auto px-6 pb-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                  {coursFiltres.map((cours) => (
                                    <CoursComponent cours={cours}/>
                                  ))}
                                </div>
                                
                                {coursFiltres.length === 0 && (
                                  <div className="text-center py-12">
                                    <p className="text-gray-500">Aucun cours ne correspond à votre recherche</p>
                                  </div>
                                )}
                              </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="courses-info">
                                <p>Profitez des meilleures méthodes d'apprentissage et atteignez des compétences de niveau supérieur ! Vous êtes le créateur de votre propre carrière et nous vous guiderons à travers cela. <a href="profile-authentication.html">Inscrivez-vous gratuitement maintenant !</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

