import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent"
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
        },
        particles: {
          color: { value: "#00d4ff" },        // Color de partículas
          links: {
            color: "#00d4ff",
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" }
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: 2 }
        },
        detectRetina: true
      }}
    />
  );
}
