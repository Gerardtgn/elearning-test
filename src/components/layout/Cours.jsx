import img1 from '../../assets/img/courses/img1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import CoursComponent from './CoursComponent';
import {getCourses} from '../../api/public';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cours() {
  const navigate = useNavigate();
    const [coursFiltres, setcoursFiltres] = useState([]);
    useEffect(() => {
        fetchCourses();
      }, []);
      const fetchCourses = async () => {
          
          try {
            const response = await getCourses(false);
            setcoursFiltres(response || []);
          } catch (err) {
            //setError('Erreur lors de la récupération des données');
            console.error('Erreur lors de la récupération des données:', err);
          } 
        };
      const naviguerVersCours = () => {
        //alert(`Navigation vers le cours #${id} - Cette fonctionnalité sera développée ultérieurement`);
        navigate('/dashboard/teacher/courses');
      };
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
                                    <div  key={cours.id}  onClick={naviguerVersCours} >
                                    <CoursComponent cours={cours}/>
                                    </div>
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

