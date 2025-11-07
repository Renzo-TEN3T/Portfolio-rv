import "../App.css";
import powerbiLogo from "../assets/skills/powerbi.png";
import pythonLogo from "../assets/skills/python.png";
import sqlLogo from "../assets/skills/sql.png";
import excelLogo from "../assets/skills/excel.png";
import reactLogo from "../assets/skills/react.png";
import azureLogo from "../assets/skills/azure.png";
import powerautomateuLogo from "../assets/skills/powerautomate.png";
import sharepointLogo from "../assets/skills/sharepoint.png";

export default function Skills() {
  const skills = [
    { name: "Power BI", icon: powerbiLogo },
    { name: "Python", icon: pythonLogo },
    { name: "SQL Server", icon: sqlLogo },
    { name: "Excel", icon: excelLogo },
    { name: "React", icon: reactLogo },
    { name: "Azure", icon: azureLogo },
    { name: "P. Automate", icon: powerautomateuLogo },
    { name: "Sharepoint", icon: sharepointLogo },
  ];

  return (
    <section id="skills" className="skills section">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
