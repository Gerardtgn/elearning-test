import img4 from '../../assets/img/courses/img4.jpg';
import img5 from '../../assets/img/courses/img5.jpg';
import user5 from '../../assets/img/user/user5.jpg';
import user6 from '../../assets/img/user/user6.jpg';
import shape1 from '../../assets/img/shape/banner-shape1.png';
import shape2 from '../../assets/img/shape/banner-shape2.png';
import shape3 from '../../assets/img/shape/banner-shape3.png';

export default function Banner() {
    return (
        <>
            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <h1>Le leader mondial de l'apprentissage à distance</h1>
                                <p>Des opportunités d'apprentissage flexibles et faciles d'accès peuvent apporter un changement significatif dans la manière dont les individus préfèrent apprendre ! eLearniv vous permet de profiter de la beauté de l'apprentissage en ligne !</p>
                                <a href="profile-authentication.html" className="default-btn"><i className="flaticon-user"></i>Rejoignez-nous gratuitement<span></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-courses-list">
                                <div className="row">
                                    {/* <div className="col-lg-6 col-md-6">
                                        <div className="single-courses-box">
                                            <div className="courses-image">
                                                <a href="single-course-1.html" className="d-block image">
                                                    <img src={img4} alt="image" />
                                                </a>
                                                <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                                <div className="price shadow">39€</div>
                                            </div>
                                            <div className="courses-content">
                                                <div className="course-author d-flex align-items-center">
                                                    <img src={user6} className="rounded-circle" alt="image" />
                                                    <span>Alex Morgan</span>
                                                </div>
                                                <h3><a href="single-course-1.html">Python pour la finance : Fondamentaux de l'investissement et analyse de données</a></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                                    <li><i className='flaticon-agenda'></i> 15 Leçons</li>
                                                    <li><i className='flaticon-people'></i> 145 Étudiants</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-6 col-md-6">
                                        <div className="single-courses-box">
                                            <div className="courses-image">
                                                <a href="single-course-1.html" className="d-block image">
                                                    <img src={img5} alt="image" />
                                                </a>
                                                <a href="single-course-1.html" className="fav"><i className="flaticon-heart"></i></a>
                                                <div className="price shadow">49€</div>
                                            </div>
                                            <div className="courses-content">
                                                <div className="course-author d-flex align-items-center">
                                                    <img src={user5} className="rounded-circle" alt="image" />
                                                    <span>Sarah Taylor</span>
                                                </div>
                                                <h3><a href="single-course-1.html">Machine Learning A-Z™ : Pratique avec Python & R en Data Science</a></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                                    <li><i className='flaticon-agenda'></i> 20 Leçons</li>
                                                    <li><i className='flaticon-people'></i> 100 Étudiants</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="banner-shape1" data-speed="0.06" data-revert="true"><img src={shape1} alt="image" /></div>
                                <div className="banner-shape2" data-speed="0.06" data-revert="true"><img src={shape2} alt="image" /></div>
                                <div className="banner-shape3" data-speed="0.06" data-revert="true"><img src={shape3} alt="image" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}