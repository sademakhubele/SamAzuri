import Hero from "../components/Hero";
import Services from "./Services";
import Gallery from "./Gallery";
import { Navbar } from "../components/Navbar";
import { Link } from "react-scroll";
import {Link as RouterLink} from "react-router-dom"

const Home = ({ navigate}) => {
  return (
    <div className="bg-white text-black font-poppins min-h-screen">
      <Navbar />
      <Hero navigate={navigate} />
      
      <section id="services" className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-4"> Our Services</h2>
        <p className="max-w-lg mx-auto mb-6">Weddings, photoshoots, events & more — we create flawless looks for every occasion.</p>
        <img src="/media/servicesS" alt="Services" className="w-3/4 md:w-1/2 mx-auto rounded-lg shadow-md mb-4" />
        <RouterLink to="/services" smooth={true} duration={600}>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Explore Services</button>
        </RouterLink>
      </section>

      <section id="gallery" className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4"> Client Gallery</h2>
        <p className="max-w-lg mx-auto mb-6">See our beautiful clients and glamorous results.</p>
        <img src="/media/image2.jpg" alt="Gallery" className="w-3/4 md:w-1/2 mx-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 shadow-md mb-4" />
        <RouterLink to="/gallery" smooth={true} duration={600}>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">View Gallery</button>
        </RouterLink>
      </section>

  
      <section id="classes" className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-4"> Makeup Classes</h2>
        <p className="max-w-lg mx-auto mb-6">Beginner to advanced training. Learn professional makeup skills in an empowering space.</p>
        <img src="/media/classes.jpg" alt="Makeup class" className="w-1/2 md:w-1/2 mx-auto rounded-lg shadow-md mb-4" />
        <Link to="/classes" smooth={true} duration={600}>
        </Link>
      </section>

      <section id="contact" className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">📞 Contact Us</h2>
      <p className="max-w-lg mx-auto mb-6">
         Let’s connect. Book your session or ask a question.
      </p>

        <img
         src="/media/logo.jpg"
         alt="Sibu M Logo"
         className="w-24 h-24 mx-auto rounded-full mb-6 shadow-md"
        />

      <a
       href="https://wa.me/27844976772?text=Hi%20Sibu!%20I’d%20like%20to%20book%20a%20makeup%20session"
       target="_blank"
       rel="noopener noreferrer"
        >
       <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
         Get in Touch
       </button>
       </a>
      </section>

    </div>
  );
};

export default Home;

