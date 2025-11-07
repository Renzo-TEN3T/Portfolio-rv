// src/components/ContactForm.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_id", // tu EmailJS service ID
        "template_id", // tu EmailJS template ID
        formData,
        "public_key" // tu public key
      )
      .then(() => alert("✅ Mensaje enviado correctamente"))
      .catch(() => alert("❌ Error al enviar el mensaje"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form max-w-lg mx-auto p-6 bg-gray-800 rounded-xl shadow-lg space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-700"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-700"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-700"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
