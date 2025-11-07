import '../App.css';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Analista de Datos.",
        "Especialista en Power BI.",
        "Apasionado por Machine Learning.",
        "Creo dashboards que toman decisiones."
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero-section reveal">
      {/* Fondo de partículas detrás del contenido */}
      <ParticlesBackground />

      <div className="hero-container">
        {/* Texto del hero */}
        <div className="hero-content">
          <h1>Hola, soy <span>Renzo Villena</span></h1>
          <h2 className="typing"><span ref={typedRef}></span></h2>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">Ver proyectos</a>
            <a href="#contact" className="btn-secondary">Contáctame</a>
          </div>
        </div>

        {/* Imagen */}
        <div className="hero-image">
          <img src="/henry.jpg" alt="Foto profesional" />
          {/* Usa /henry.jpg → debe estar en la carpeta public/ */}
        </div>
      </div>
    </section>
  );
}
