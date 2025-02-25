import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Vision from "../layout/Vision";
import About from "../layout/About";
import Feature from "../layout/Feature";
import Testimonial from "../layout/Testimonial";
export default function AboutPage(){
    return (
        <>
            <Navbar/>
            <Vision/>
            <Feature/>
            <Testimonial/>
            {/* <About/> */}
            <Footer/>
        </>
    );
}