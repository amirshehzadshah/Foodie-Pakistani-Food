import '../App.css';
import ResponsiveNavbar from '../SubComponents/ResponsiveNavbar';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import Testimonial from './Testimonial';
import Work from './Work';

function Mainbox() {
    return (
        <>
            <div>
                <ResponsiveNavbar />
                <div className="App">
                    <Home />
                    <About />
                    <Menu />
                    <Work />
                    <Testimonial />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Mainbox;