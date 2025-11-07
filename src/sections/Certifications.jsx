import '../App.css';

export default function Certifications() {
  const certifications = [
    {
      title: "Power BI – Microsoft",
      issuer: "Microsoft",
      year: "2024",
      description: "Certificación oficial en análisis de datos, DAX y visualización interactiva.",
      icon: "/certs/powerbi.png" // opcional
    },
    {
      title: "Machine Learning",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Modelos predictivos, regresión, clustering y evaluación de modelos.",
      icon: "/certs/ml.png"
    },
    {
      title: "SQL & Database Design",
      issuer: "Universidad Autónoma del Perú",
      year: "2022",
      description: "Modelamiento relacional, consultas complejas y stored procedures.",
      icon: "/certs/sql.png"
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
