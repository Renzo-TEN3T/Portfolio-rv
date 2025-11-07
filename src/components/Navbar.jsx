import { useState } from "react";
import '../App.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">TuNombre.dev</div>

      {/* Botón Hamburguesa */}
      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú */}
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a href="#hero">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
