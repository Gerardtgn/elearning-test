import React from 'react';
import '../layout/styles'
import About from '../layout/About';
import Banner from '../layout/Banner';
import  Navbar  from '../layout/Navbar';
import Feature from '../layout/Feature';
import Cours from '../layout/Cours';
import Courses from '../layout/Courses';
import GetInstant from '../layout/GetInstant';
import Blog from '../layout/Blog';
import Footer from '../layout/Footer';
import Testimonial from '../layout/Testimonial';
export default function HomePage(){
    return (
        <>
            <Navbar/>
            <Banner/>
            <Feature/>
            {/* <About/> */}
            <Cours/>
            <GetInstant/>
            <Testimonial/>
            <Blog/>
            <Footer/>
        </>
    )
};