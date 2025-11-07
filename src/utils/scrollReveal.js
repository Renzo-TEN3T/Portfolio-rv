import ScrollReveal from "scrollreveal";

export const scrollReveal = () => {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 200,
    reset: false, // si quieres que se repita al hacer scroll hacia arriba, cambia a true
    easing: "ease-in-out",
  });

  sr.reveal(".section", { interval: 200 }); // todas tus secciones
  sr.reveal(".hero-content", { origin: "top", distance: "80px" });
  sr.reveal(".about-content", { origin: "left", distance: "60px" });
  sr.reveal(".skills-content", { origin: "right", distance: "60px" });
  sr.reveal(".project-card", { interval: 150 });
  sr.reveal(".cert-card", { interval: 150 });
  sr.reveal(".contact-form", { origin: "bottom" });
};
