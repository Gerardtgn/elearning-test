import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Titre from "../layout/Titre";
import Testimonial from "../layout/Testimonial";
import Service from "../layout/service";
export default function ServicePage(){
    return(
        <>
            <Navbar/>
            <Titre page={'Services'} titre={'Nos services'}/>
            <Service/>
            <Testimonial/>
            <Footer/>
        </>
    );
}