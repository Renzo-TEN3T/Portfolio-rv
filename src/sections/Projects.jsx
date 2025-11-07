import "../App.css";

export default function Projects() {
  const projects = [
    {
      title: "Dashboard de Ventas - Power BI",
      description: "Análisis interactivo de ventas, ingresos y rendimiento por región.",
      image: "/projects/powerbi-dashboard.jpg",  // Coloca imágenes en /public/projects/
      tech: ["Power BI", "DAX", "Excel"],
      link: "https://github.com/tuUsuario/proyecto1"
    },
    {
      title: "Predicción de Ventas con Python",
      description: "Modelo de Machine Learning que predice ventas futuras usando regresión.",
      image: "/projects/Luffy.jpg",
      tech: ["Python", "Pandas", "Scikit-Learn"],
      link: "https://github.com/tuUsuario/proyecto2"
    },
    {
      title: "Sistema Web con React",
      description: "Aplicación web moderna con login, dashboard y consumo de API REST.",
      image: "/projects/react-app.jpg",
      tech: ["React", "API REST", "CSS"],
      link: "https://github.com/tuUsuario/proyecto3"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <a href={project.link} target="_blank" className="btn-project">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}
