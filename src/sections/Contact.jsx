import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a4h13ie",       // ID de tu servicio en EmailJS
        "template_kq7ejb8",       // ✅ Tu Template ID
        form.current,
        "dCT2RBJMp2V0czS4T"     // ✅ Tu Public Key
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();

        // ✅ Ocultamos el mensaje después de 4s (opcional)
        setTimeout(() => setIsSent(false), 4000);
      })
      .catch(() => {
        alert("❌ Error al enviar el mensaje. Intenta nuevamente.");
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>

      {/* ✅ Mostramos el formulario siempre, no lo reemplazamos */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje..." required />
        <button type="submit">Enviar</button>

        {/* ✅ Mensaje de éxito (respeta el diseño) */}
        {isSent && <p style={{ color: "var(--primary)", marginTop: "10px" }}>✅ Mensaje enviado correctamente</p>}
      </form>
    </section>
  );
}
