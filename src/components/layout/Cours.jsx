import img1 from '../../assets/img/courses/img1.jpg';
import img2 from '../../assets/img/courses/img2.jpg';
import img3 from '../../assets/img/courses/img3.jpg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';

export default function Cours() {
    return (
        <>
            <div className="courses-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Apprenez à votre propre rythme</span>
                        <h2>Les cours populaires d'eLearniv</h2>
                        <p>Explorez tous nos cours et choisissez ceux qui vous conviennent pour vous inscrire et commencer à apprendre avec nous ! Nous vous garantissons que vous ne le regretterez jamais !</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        <img src={img1} alt="image"/>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">39€</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user1} className="rounded-circle" alt="image"/>
                                        <span>Alex Morgan</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Deep Learning A-Z™ : Réseaux de neurones artificiels pratiques</a></h3>
                                    <p>Ce cours de niveau master est pour vous si vous cherchez à apprendre les sujets DL & ANN de fond en comble en peu de temps !</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda'></i> 15 Leçons</li>
                                        <li><i className='flaticon-people'></i> 145 Étudiants</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        <img src={img2} alt="image"/>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">49€</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user2} className="rounded-circle" alt="image"/>
                                        <span>Sarah Taylor</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Masterclass de programmation Java pour développeurs logiciels</a></h3>
                                    <p>Java est le langage de programmation le plus stable et le plus utilisé pour les environnements mobiles, web et de bureau.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda'></i> 20 Leçons</li>
                                        <li><i className='flaticon-people'></i> 100 Étudiants</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a href="single-course-1.html" className="d-block image">
                                        <img src={img3} alt="image"/>
                                    </a>
                                    <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                    <div className="price shadow">59€</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src={user3} className="rounded-circle" alt="image"/>
                                        <span>David Warner</span>
                                    </div>
                                    <h3><a href="single-course-1.html">Le cours de Data Science 2025 : Bootcamp complet en Data Science</a></h3>
                                    <p>Nous avons conçu le cours de Bootcamp en Data Science pour vous offrir la meilleure expérience d'apprentissage en peu de temps.</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><i className='flaticon-agenda'></i> 20 Leçons</li>
                                        <li><i className='flaticon-people'></i> 150 Étudiants</li>
                                    </ul>
                                </div>
                            </div>
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

