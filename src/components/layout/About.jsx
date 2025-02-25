import img1 from '../../assets/img/about/about-img1.png';
import img2 from '../../assets/img/about/about-img2.png';
import img3 from '../../assets/img/about/about-img3.png';
import shape1 from '../../assets/img/shape/banner-shape1.png';
import shape2 from '../../assets/img/shape/banner-shape2.png';
import shape3 from '../../assets/img/shape/banner-shape3.png';
import shape4 from '../../assets/img/shape/banner-shape4.png';
export default function About(){
    return (
        <>
                <div class="about-area bg-fef8ef ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-image">
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="image wow animate__animated animate__fadeInLeft">
                                        <img src={img1} alt="image"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="image wow animate__animated animate__fadeInDown">
                                        <img src={img2} alt="image"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="image wow animate__animated animate__fadeInUp">
                                        <img src={img2} alt="image"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="image wow animate__animated animate__fadeInRight">
                                        <img src={img3} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="about-content">
                            <span class="sub-title">Online learning</span>
                            <h2>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!</h2>
                            <p>We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
                            <ul class="features-list">
                                <li><span><i class="flaticon-experience"></i> Expert Trainers</span></li>
                                <li><span><i class="flaticon-time-left"></i> Lifetime Access</span></li>
                                <li><span><i class="flaticon-tutorials"></i> Remote Learning</span></li>
                                <li><span><i class="flaticon-self-growth"></i> Self Development</span></li>
                            </ul>
                            <a href="courses-1.html" class="default-btn"><i class="flaticon-user"></i>View All Courses<span></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape1" data-speed="0.06" data-revert="true"><img src={shape1} alt="image"/></div>
            <div class="shape2" data-speed="0.06" data-revert="true"><img src={shape2} alt="image"/></div>
            <div class="shape3" data-speed="0.06" data-revert="true"><img src={shape3} alt="image"/></div>
            <div class="shape4" data-speed="0.06" data-revert="true"><img src={shape4} alt="image"/></div>
        </div></>
    )
}