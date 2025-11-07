import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications"; // ✅ Nueva sección
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { scrollReveal } from "./utils/scrollReveal";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <>
      <Navbar />
      <div className="section hero-section"><Hero /></div>
      <div className="section about-section"><About /></div>
      <div className="section skills-section"><Skills /></div>
      <div className="section projects-section"><Projects /></div>
      <div className="section certifications-section"><Certifications /></div>
      <div className="section contact-section"><Contact /></div>
      <Footer />


      <ScrollToTop />
    </>
  );
}

export default App;
