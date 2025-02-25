import React from 'react';
import logo from '../../assets/img/logo.png';
import '../layout/styles';

export default function NavbarPage (){

    return(
        <div class="navbar-area">
            <div class="elearniv-responsive-nav">
                <div class="container">
                    <div class="elearniv-responsive-menu mean-container"><div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style={{"background":"", "color":"","right":"0","left":"auto"}}><span><span><span></span></span></span></a><nav class="mean-nav">
                            <form class="search-box">
                                <input type="text" class="input-search" placeholder="Search for anything"/>
                                <button type="submit"><i class="flaticon-search"></i></button>
                            </form>
                            <ul class="navbar-nav" style={{"display": "none"}}>
                                <li class="nav-item megamenu">
                                    <a href="" class="nav-link active">
                                        Home <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" style={{"display": "none"}}>
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col col-lg-3">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="index.html" class="active">eLearning School</a></li>
                                                            <li><a href="index-2.html">Vendor Certification eTraining</a></li>
                                                            <li><a href="index-3.html">Online Training School</a></li>
                                                            <li><a href="index-4.html">Distance Learning</a></li>
                                                            <li><a href="index-5.html">Language School</a></li>
                                                            <li><a href="index-6.html">Modern Schooling</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                    <div class="col col-lg-3">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="index-7.html">Yoga Training</a></li>
                                                            <li><a href="index-8.html">Health Coaching</a></li>
                                                            <li><a href="index-9.html">Kindergarten</a></li>
                                                            <li><a href="index-10.html">Gym Coaching</a></li>
                                                            <li><a href="index-11.html">Learning Management</a></li>
                                                            <li><a href="index-12.html">Business Coach</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                    <div class="col col-lg-3">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="index-13.html">Motivation</a></li>
                                                            <li><a href="index-14.html">Kitchen Coach</a></li>
                                                            <li><a href="index-15.html">Online Art</a></li>
                                                            <li><a href="index-16.html">Single Instructor</a></li>
                                                            <li><a href="index-17.html">College Website</a></li>
                                                            <li><a href="index-18.html">Online Photography</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">
                                        Pages <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" style={{"display": "none"}}>
                                        <li class="nav-item"><a href="" class="nav-link">About Us <i class="bx bx-chevron-right"></i></a>
                                            <ul class="dropdown-menu"style={{"display": "none"}}>
                                                <li class="nav-item"><a href="about-1.html" class="nav-link">About Us 01</a></li>
                                                <li class="nav-item"><a href="about-2.html" class="nav-link">About Us 02</a></li>
                                                <li class="nav-item"><a href="about-3.html" class="nav-link">About Us 03</a></li>
                                                <li class="nav-item"><a href="about-4.html" class="nav-link">About Us 04</a></li>
                                            </ul>
                                        <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link">College Website Inner Pages <i class="bx bx-chevron-right"></i></a>
                                            <ul class="dropdown-menu" style={{"display": "none"}}>
                                                <li class="nav-item">
                                                    <a href="about-college.html" class="nav-link">
                                                        About College
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="accommodation.html" class="nav-link">
                                                        Accommodation
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="fees-and-scholarships.html" class="nav-link">
                                                        Fees and scholarships
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="college-admissions.html" class="nav-link">
                                                        College Admissions
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="undergraduate.html" class="nav-link">
                                                        Undergraduate
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="business.html" class="nav-link">
                                                        Business
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="administration.html" class="nav-link">
                                                        Administration
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="faculties-teachers.html" class="nav-link">
                                                        Faculties teachers
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="apply-now.html" class="nav-link">
                                                        Apply Now
                                                    </a>
                                                </li>
                                            </ul>
                                        <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                        <li class="nav-item"><a href="success-story.html" class="nav-link">Success Story</a></li>
                                        <li class="nav-item"><a href="advisor.html" class="nav-link">Teacher</a></li>
                                        <li class="nav-item"><a href="trainer.html" class="nav-link">Trainer</a></li>
                                        <li class="nav-item"><a href="gallery.html" class="nav-link">Gallery</a></li>
                                        <li class="nav-item"><a href="faq.html" class="nav-link">FAQ</a></li>
                                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact Us</a></li>
                                        <li class="nav-item"><a href="profile-authentication.html" class="nav-link">Login/Register</a></li>
                                        <li class="nav-item"><a href="error-404.html" class="nav-link">404 Error Page</a></li>
                                        <li class="nav-item"><a href="coming-soon.html" class="nav-link">Coming Soon</a></li>
                                        <li class="nav-item"><a href="purchase-guide.html" class="nav-link">Purchase Guide</a></li>
                                        <li class="nav-item"><a href="privacy-policy.html" class="nav-link">Privacy Policy</a></li>
                                        <li class="nav-item"><a href="terms-of-service.html" class="nav-link">Terms of Service</a></li>
                                    </ul>
                                <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                <li class="nav-item megamenu">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Courses <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" style={{"display": "none"}}>
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="courses-1.html">Courses Grid 01</a></li>
                                                            <li><a href="courses-2.html">Courses Grid 02</a></li>
                                                            <li><a href="courses-3.html">Courses Grid 03</a></li>
                                                            <li><a href="courses-4.html">Courses Grid 04</a></li>
                                                            <li><a href="courses-5.html">Courses List 01</a></li>
                                                            <li><a href="courses-6.html">Courses Masonry 01</a></li>
                                                            <li><a href="courses-7.html">Courses Right Sidebar</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                    <div class="col">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="single-course-1.html">Single Layout 01</a></li>
                                                            <li><a href="single-course-2.html">Single Layout 02</a></li>
                                                            <li><a href="categories.html">Courses Categories</a></li>
                                                            <li><a href="membership-levels.html">Membership Levels</a></li>
                                                            <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                                                            <li><a href="profile.html">Profile</a></li>
                                                            <li><a href="profile-quiz.html">Profile Quiz</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                    <div class="col">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="courses-1.html">Courses Grid 01</a></li>
                                                            <li><a href="courses-2.html">Courses Grid 02</a></li>
                                                            <li><a href="courses-3.html">Courses Grid 03</a></li>
                                                            <li><a href="courses-4.html">Courses Grid 04</a></li>
                                                            <li><a href="courses-5.html">Courses List 01</a></li>
                                                            <li><a href="courses-6.html">Courses Masonry 01</a></li>
                                                            <li><a href="courses-7.html">Courses Right Sidebar</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                    <div class="col">
                                                        <ul class="megamenu-submenu" style={{"display": "none"}}>
                                                            <li><a href="single-course-1.html">Single Layout 01</a></li>
                                                            <li><a href="single-course-2.html">Single Layout 02</a></li>
                                                            <li><a href="categories.html">Courses Categories</a></li>
                                                            <li><a href="membership-levels.html">Membership Levels</a></li>
                                                            <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                                                            <li><a href="profile.html">Profile</a></li>
                                                            <li><a href="profile-quiz.html">Profile Quiz</a></li>
                                                        </ul>
                                                    <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></div>
                                                </div>
                                                <div class="row m-0">
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-code-alt"></i>
                                                            </div>
                                                            <h3>Development</h3>
                                                            <span class="sub-title">60 Courses</span>
                                                            <a href="courses-1.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-camera"></i>
                                                            </div>
                                                            <h3>Photography</h3>
                                                            <span class="sub-title">21 Courses</span>
                                                            <a href="courses-2.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-layer"></i>
                                                            </div>
                                                            <h3>Design</h3>
                                                            <span class="sub-title">58 Courses</span>
                                                            <a href="courses-3.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bxs-flag-checkered"></i>
                                                            </div>
                                                            <h3>Language</h3>
                                                            <span class="sub-title">99 Courses</span>
                                                            <a href="courses-4.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-health"></i>
                                                            </div>
                                                            <h3>Fitness</h3>
                                                            <span class="sub-title">21 Courses</span>
                                                            <a href="courses-5.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-line-chart"></i>
                                                            </div>
                                                            <h3>Business</h3>
                                                            <span class="sub-title">49 Courses</span>
                                                            <a href="courses-6.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Events <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" style={{"display": "none"}}>
                                        <li class="nav-item"><a href="events.html" class="nav-link">Events</a></li>
                                        <li class="nav-item"><a href="single-event.html" class="nav-link">Event Details</a></li>
                                    </ul>
                                <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Shop <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" style={{"display": "none"}}>
                                        <li class="nav-item"><a href="products-list-1.html" class="nav-link">Product List 01</a></li>
                                        <li class="nav-item"><a href="products-list-2.html" class="nav-link">Product List 02</a></li>
                                        <li class="nav-item"><a href="cart.html" class="nav-link">Cart</a></li>
                                        <li class="nav-item"><a href="checkout.html" class="nav-link">Checkout</a></li>
                                        <li class="nav-item"><a href="single-product.html" class="nav-link">Product Details</a></li>
                                    </ul>
                                <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Blog <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" style={{"display": "none"}}>
                                        <li class="nav-item"><a href="blog-1.html" class="nav-link">Grid (2 in Row)</a></li>
                                        <li class="nav-item"><a href="blog-2.html" class="nav-link">Grid (3 in Row)</a></li>
                                        <li class="nav-item"><a href="blog-3.html" class="nav-link">Grid (Full Width)</a></li>
                                        <li class="nav-item"><a href="blog-4.html" class="nav-link">Right Sidebar</a></li>
                                        <li class="nav-item"><a href="blog-5.html" class="nav-link">Masonry (3 in Row)</a></li>
                                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Single Post <i class="bx bx-chevron-right"></i></a>
                                            <ul class="dropdown-menu" style={{"display": "none"}}>
                                                <li class="nav-item"><a href="single-blog-1.html" class="nav-link">Default</a></li>
                                                <li class="nav-item"><a href="single-blog-2.html" class="nav-link">With Video</a></li>
                                                <li class="nav-item mean-last"><a href="single-blog-3.html" class="nav-link">With Image Slider</a></li>
                                            </ul>
                                        <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                                    </ul>
                                <a class="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>
                            </ul>
                            <div class="others-option d-flex align-items-center">
                                <div class="option-item">
                                    <div class="cart-btn">
                                        <a href="cart.html"><i class="flaticon-shopping-cart"></i><span>3</span></a>
                                    </div>
                                </div>
                                <div class="option-item">
                                    <a href="profile-authentication.html" class="default-btn"><i class="flaticon-user"></i>Login/Register<span></span></a>
                                </div>
                            </div>
                        </nav></div>
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="elearniv-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" alt="logo"/>
                        </a>
                        <div class="mean-push"></div><div class="collapse navbar-collapse mean-menu" style={{"display": "none"}}>
                            <form class="search-box">
                                <input type="text" class="input-search" placeholder="Search for anything"/>
                                <button type="submit"><i class="flaticon-search"></i></button>
                            </form>
                            <ul class="navbar-nav">
                                <li class="nav-item megamenu">
                                    <a href="javascript:void(0);" class="nav-link active">
                                        Home <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col col-lg-3">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="index.html" class="active">eLearning School</a></li>
                                                            <li><a href="index-2.html">Vendor Certification eTraining</a></li>
                                                            <li><a href="index-3.html">Online Training School</a></li>
                                                            <li><a href="index-4.html">Distance Learning</a></li>
                                                            <li><a href="index-5.html">Language School</a></li>
                                                            <li><a href="index-6.html">Modern Schooling</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col col-lg-3">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="index-7.html">Yoga Training</a></li>
                                                            <li><a href="index-8.html">Health Coaching</a></li>
                                                            <li><a href="index-9.html">Kindergarten</a></li>
                                                            <li><a href="index-10.html">Gym Coaching</a></li>
                                                            <li><a href="index-11.html">Learning Management</a></li>
                                                            <li><a href="index-12.html">Business Coach</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col col-lg-3">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="index-13.html">Motivation</a></li>
                                                            <li><a href="index-14.html">Kitchen Coach</a></li>
                                                            <li><a href="index-15.html">Online Art</a></li>
                                                            <li><a href="index-16.html">Single Instructor</a></li>
                                                            <li><a href="index-17.html">College Website</a></li>
                                                            <li><a href="index-18.html">Online Photography</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Pages <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link">About Us <i class="bx bx-chevron-right"></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="about-1.html" class="nav-link">About Us 01</a></li>
                                                <li class="nav-item"><a href="about-2.html" class="nav-link">About Us 02</a></li>
                                                <li class="nav-item"><a href="about-3.html" class="nav-link">About Us 03</a></li>
                                                <li class="nav-item"><a href="about-4.html" class="nav-link">About Us 04</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link">College Website Inner Pages <i class="bx bx-chevron-right"></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="about-college.html" class="nav-link">
                                                        About College
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="accommodation.html" class="nav-link">
                                                        Accommodation
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="fees-and-scholarships.html" class="nav-link">
                                                        Fees and scholarships
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="college-admissions.html" class="nav-link">
                                                        College Admissions
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="undergraduate.html" class="nav-link">
                                                        Undergraduate
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="business.html" class="nav-link">
                                                        Business
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="administration.html" class="nav-link">
                                                        Administration
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="faculties-teachers.html" class="nav-link">
                                                        Faculties teachers
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="apply-now.html" class="nav-link">
                                                        Apply Now
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item"><a href="success-story.html" class="nav-link">Success Story</a></li>
                                        <li class="nav-item"><a href="advisor.html" class="nav-link">Teacher</a></li>
                                        <li class="nav-item"><a href="trainer.html" class="nav-link">Trainer</a></li>
                                        <li class="nav-item"><a href="gallery.html" class="nav-link">Gallery</a></li>
                                        <li class="nav-item"><a href="faq.html" class="nav-link">FAQ</a></li>
                                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact Us</a></li>
                                        <li class="nav-item"><a href="profile-authentication.html" class="nav-link">Login/Register</a></li>
                                        <li class="nav-item"><a href="error-404.html" class="nav-link">404 Error Page</a></li>
                                        <li class="nav-item"><a href="coming-soon.html" class="nav-link">Coming Soon</a></li>
                                        <li class="nav-item"><a href="purchase-guide.html" class="nav-link">Purchase Guide</a></li>
                                        <li class="nav-item"><a href="privacy-policy.html" class="nav-link">Privacy Policy</a></li>
                                        <li class="nav-item"><a href="terms-of-service.html" class="nav-link">Terms of Service</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item megamenu">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Courses <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="courses-1.html">Courses Grid 01</a></li>
                                                            <li><a href="courses-2.html">Courses Grid 02</a></li>
                                                            <li><a href="courses-3.html">Courses Grid 03</a></li>
                                                            <li><a href="courses-4.html">Courses Grid 04</a></li>
                                                            <li><a href="courses-5.html">Courses List 01</a></li>
                                                            <li><a href="courses-6.html">Courses Masonry 01</a></li>
                                                            <li><a href="courses-7.html">Courses Right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="single-course-1.html">Single Layout 01</a></li>
                                                            <li><a href="single-course-2.html">Single Layout 02</a></li>
                                                            <li><a href="categories.html">Courses Categories</a></li>
                                                            <li><a href="membership-levels.html">Membership Levels</a></li>
                                                            <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                                                            <li><a href="profile.html">Profile</a></li>
                                                            <li><a href="profile-quiz.html">Profile Quiz</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="courses-1.html">Courses Grid 01</a></li>
                                                            <li><a href="courses-2.html">Courses Grid 02</a></li>
                                                            <li><a href="courses-3.html">Courses Grid 03</a></li>
                                                            <li><a href="courses-4.html">Courses Grid 04</a></li>
                                                            <li><a href="courses-5.html">Courses List 01</a></li>
                                                            <li><a href="courses-6.html">Courses Masonry 01</a></li>
                                                            <li><a href="courses-7.html">Courses Right Sidebar</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li><a href="single-course-1.html">Single Layout 01</a></li>
                                                            <li><a href="single-course-2.html">Single Layout 02</a></li>
                                                            <li><a href="categories.html">Courses Categories</a></li>
                                                            <li><a href="membership-levels.html">Membership Levels</a></li>
                                                            <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                                                            <li><a href="profile.html">Profile</a></li>
                                                            <li><a href="profile-quiz.html">Profile Quiz</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row m-0">
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-code-alt"></i>
                                                            </div>
                                                            <h3>Development</h3>
                                                            <span class="sub-title">60 Courses</span>
                                                            <a href="courses-1.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-camera"></i>
                                                            </div>
                                                            <h3>Photography</h3>
                                                            <span class="sub-title">21 Courses</span>
                                                            <a href="courses-2.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-layer"></i>
                                                            </div>
                                                            <h3>Design</h3>
                                                            <span class="sub-title">58 Courses</span>
                                                            <a href="courses-3.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bxs-flag-checkered"></i>
                                                            </div>
                                                            <h3>Language</h3>
                                                            <span class="sub-title">99 Courses</span>
                                                            <a href="courses-4.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-health"></i>
                                                            </div>
                                                            <h3>Fitness</h3>
                                                            <span class="sub-title">21 Courses</span>
                                                            <a href="courses-5.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                        <div class="single-category-widget">
                                                            <div class="icon">
                                                                <i class="bx bx-line-chart"></i>
                                                            </div>
                                                            <h3>Business</h3>
                                                            <span class="sub-title">49 Courses</span>
                                                            <a href="courses-6.html" class="link-btn"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Events <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="events.html" class="nav-link">Events</a></li>
                                        <li class="nav-item"><a href="single-event.html" class="nav-link">Event Details</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Shop <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="products-list-1.html" class="nav-link">Product List 01</a></li>
                                        <li class="nav-item"><a href="products-list-2.html" class="nav-link">Product List 02</a></li>
                                        <li class="nav-item"><a href="cart.html" class="nav-link">Cart</a></li>
                                        <li class="nav-item"><a href="checkout.html" class="nav-link">Checkout</a></li>
                                        <li class="nav-item"><a href="single-product.html" class="nav-link">Product Details</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        Blog <i class="bx bx-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="blog-1.html" class="nav-link">Grid (2 in Row)</a></li>
                                        <li class="nav-item"><a href="blog-2.html" class="nav-link">Grid (3 in Row)</a></li>
                                        <li class="nav-item"><a href="blog-3.html" class="nav-link">Grid (Full Width)</a></li>
                                        <li class="nav-item"><a href="blog-4.html" class="nav-link">Right Sidebar</a></li>
                                        <li class="nav-item"><a href="blog-5.html" class="nav-link">Masonry (3 in Row)</a></li>
                                        <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Single Post <i class="bx bx-chevron-right"></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="single-blog-1.html" class="nav-link">Default</a></li>
                                                <li class="nav-item"><a href="single-blog-2.html" class="nav-link">With Video</a></li>
                                                <li class="nav-item"><a href="single-blog-3.html" class="nav-link">With Image Slider</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="others-option d-flex align-items-center">
                                <div class="option-item">
                                    <div class="cart-btn">
                                        <a href="cart.html"><i class="flaticon-shopping-cart"></i><span>3</span></a>
                                    </div>
                                </div>
                                <div class="option-item">
                                    <a href="profile-authentication.html" class="default-btn"><i class="flaticon-user"></i>Login/Register<span></span></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="others-option-for-responsive">
                <div class="container">
                    <div class="dot-menu">
                        <div class="inner">
                            <div class="circle circle-one"></div>
                            <div class="circle circle-two"></div>
                            <div class="circle circle-three"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="option-inner">
                            <form class="search-box">
                                <input type="text" class="input-search" placeholder="Search for anything"/>
                                <button type="submit"><i class="flaticon-search"></i></button>
                            </form>
                            <div class="others-option d-flex align-items-center">
                                <div class="option-item">
                                    <div class="cart-btn">
                                        <a href="cart.html"><i class="flaticon-shopping-cart"></i><span>3</span></a>
                                    </div>
                                </div>
                                <div class="option-item">
                                    <a href="profile-authentication.html" class="default-btn"><i class="flaticon-user"></i>Login/Register<span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}