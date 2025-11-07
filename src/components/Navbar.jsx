function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">TuNombre.dev</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
