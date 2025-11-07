import '../App.css';

export default function Certifications() {
  const certifications = [
    {
      title: "Power BI – Microsoft",
      issuer: "Universidad Autónoma del Perú",
      year: "2024",
      description: "Certificación que valida competencias en modelado de datos, creación de dashboards interactivos y uso avanzado de DAX para la toma de decisiones empresariales.",
      icon: "/certs/powerbi.png"
    },
    {
      title: "Machine Learning",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Formación centrada en el desarrollo de modelos predictivos, técnicas de regresión, clustering y evaluación de algoritmos aplicados a problemas reales.",
      icon: "/certs/machinelearning.png"
    },
    {
      title: "Administrador de Redes y Comunicaciones",
      issuer: "Universidad Autónoma del Perú",
      year: "2023",
      description: "Especialización en infraestructura de redes, configuración de routers y switches, gestión de protocolos TCP/IP y administración segura de entornos empresariales.",
      icon: "/certs/redesycomunicaciones.png"
    },
    {
      title: "SQL & Database Design",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Capacitación en diseño de bases de datos relacionales, normalización, consultas SQL avanzadas, joins, subconsultas y procedimientos almacenados.",
      icon: "/certs/sql.png"
    },
    {
      title: "Java Programming",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Curso orientado a la programación estructurada y orientada a objetos en Java, manejo de estructuras de datos, y desarrollo de aplicaciones modulares.",
      icon: "/certs/java.png"
    },
    {
      title: "Habilidades Digitales",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Certificación enfocada en competencias digitales esenciales: productividad en entornos tecnológicos, herramientas colaborativas y seguridad informática básica.",
      icon: "/certs/habilidadesdigitales.png"
    },
    {
      title: "Alura Program",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Programa integral de desarrollo tecnológico con enfoque en pensamiento lógico, estructuras de programación y fundamentos de la ingeniería de software.",
      icon: "/certs/alura.png"
    },
    {
      title: "Alura React",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Certificación especializada en React.js, gestión de estados, componentes reutilizables y conexión con APIs para la creación de interfaces modernas y dinámicas.",
      icon: "/certs/alurareact.png"
    },
    {
      title: "Netzun Business Intelligence Specialization",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Especialización en Business Intelligence aplicada al análisis estratégico de datos, ETL, modelamiento analítico y diseño de reportes ejecutivos para la toma de decisiones.",
      icon: "/certs/businessintelligence.png"
    }
  ];


  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">Certificaciones & CV</h2>

      {/* Botón para descargar CV */}
      <div className="cv-download">
        <a href="/CV-HenryVillanueva.pdf" download className="btn-primary cv-btn">
          📄 Descargar CV
        </a>
      </div>

      {/* Lista de certificaciones */}
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            {cert.icon && <img src={cert.icon} alt={cert.title} className="cert-icon" />}
            <h3>{cert.title}</h3>
            <span className="cert-issuer">{cert.issuer} • {cert.year}</span>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
