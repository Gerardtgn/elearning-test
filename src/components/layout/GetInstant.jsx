import man from '../../assets/img/man.jpg';
import shape4 from '../../assets/img/shape/shape4.png';
import shape5 from '../../assets/img/shape/shape5.png';
import shape6 from '../../assets/img/shape/shape6.png';

export default function GetInstant() {
    return (
        <>
            <div className="get-instant-courses-area">
                <div className="container">
                    <div className="get-instant-courses-inner-area">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="get-instant-courses-content">
                                    <span className="sub-title">Accédez instantanément au cours gratuit</span>
                                    <h2>Cours de développement personnel</h2>
                                    <p>Le cours de développement personnel d'eLearniv peut vous aider à apporter des changements significatifs dans la compréhension personnelle et à renforcer la confiance pour tirer le meilleur parti de votre carrière ! Nous croyons que l'apprentissage doit être agréable, et c'est seulement ainsi qu'il peut apporter des changements substantiels à quelqu'un !</p>
                                    <a href="profile-authentication.html" className="default-btn"><i className="flaticon-user"></i>Commencez gratuitement<span></span></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="get-instant-courses-image">
                                    <img src={man} alt="image" />
                                    <div className="shape7" data-speed="0.06" data-revert="true"><img src={shape4} alt="image" /></div>
                                    <div className="shape6" data-speed="0.06" data-revert="true"><img src={shape6} alt="image" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="shape5" data-speed="0.06" data-revert="true"><img src={shape5} alt="image" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}