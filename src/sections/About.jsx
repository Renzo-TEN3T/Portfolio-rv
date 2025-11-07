import "../App.css";
import { useEffect } from "react";
import fotoPerfil from "../assets/henry.jpg"; // cambia por tu imagen

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about-container">
        <img src={fotoPerfil} alt="Foto profesional" />

        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy <strong>Analista de Datos</strong> con experiencia en Power BI, SQL y Python.
            Me apasiona transformar datos en decisiones estratégicas a través de dashboards,
            automatización y Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
}
