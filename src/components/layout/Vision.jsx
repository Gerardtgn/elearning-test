import shape8 from '../../assets/img/shape/shape8.svg';
import img5 from '../../assets/img/about/about-img5.jpg';
import shape9 from '../../assets/img/shape/shape9.png';
import shape2 from '../../assets/img/shape/shape2.png';
import shape3 from '../../assets/img/shape/shape9.png';
import shape4 from '../../assets/img/shape/shape4.png';
import Titre from './Titre';

export default function Vision() {
    return (
        <>
            
            <Titre page={'A Propos'} titre={'Tout savoir sur eLearning'}/>
            <div className="about-area-two pt-70 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-content-box">
                                <span className="sub-title">Apprentissage à distance</span>
                                <h2>Développez vos compétences en gestion de projet en ligne, à tout moment</h2>
                                <p>Vous souhaitez apprendre et obtenir des PDUs ou CEUs selon votre emploi du temps — à tout moment, n'importe où ? Ou, acquérir rapidement une nouvelle compétence comme le leadership d'équipe de projet ou l'agilité ? Parcourez nos cours en ligne les plus populaires.</p>
                                <p><strong>Développez vos connaissances et vos opportunités avec des idées novatrices, des formations et des outils.</strong></p>
                                <a href="courses-1.html" className="link-btn">Explorer l'apprentissage</a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-video-box">
                                <div className="image">
                                    <img src={img5} alt="image" />
                                </div>
                                {/* <a href="https://www.youtube.com/watch?v=PWvPbGWVRrU" className="video-btn popup-youtube"><i className="flaticon-play"></i></a> */}
                                <div className="shape10" data-speed="0.06" data-revert="true"><img src={shape9} alt="image" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape3" data-speed="0.06" data-revert="true"><img src={shape3} alt="image" /></div>
                <div className="shape4" data-speed="0.06" data-revert="true"><img src={shape4} alt="image" /></div>
                <div className="shape2" data-speed="0.06" data-revert="true"><img src={shape2} alt="image" /></div>
            </div>
        </>
    );
}