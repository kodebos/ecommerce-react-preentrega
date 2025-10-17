import React from "react";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ color: "#00ffff", textShadow: "0 0 10px #bf00ff" }}>
        🔧 Nuestros Servicios Gamer
      </h1>
      <hr style={{ margin: "2rem auto", width: "60%", borderColor: "#00ffff" }} />

      <p style={{ color: "#e6e6e6", maxWidth: "800px", margin: "auto", lineHeight: "1.8" }}>
        En <strong>Ko-Gamer</strong> no solo vendemos consolas y videojuegos, también te 
        acompañamos durante toda tu experiencia gamer. Ofrecemos una amplia gama de 
        servicios diseñados para que disfrutes al máximo tu setup.
      </p>

      <ul style={{ color: "#ccc", textAlign: "left", maxWidth: "600px", margin: "2rem auto" }}>
        <li>
          🎮 <strong>Asesoramiento personalizado:</strong> te ayudamos a elegir la consola o los 
          accesorios ideales según tu estilo de juego y presupuesto.
        </li>
        <li>
          ⚙️ <strong>Instalación y configuración:</strong> preparamos tu consola o PC gamer para 
          que solo tengas que encenderla y empezar a jugar.
        </li>
        <li>
          💾 <strong>Actualización de software:</strong> instalamos los últimos parches, firmware 
          y optimizaciones para mantener tus dispositivos al día.
        </li>
        <li>
          🕹️ <strong>Venta de accesorios y repuestos:</strong> controles, auriculares, cables HDMI, 
          cargadores y todo lo que necesites para tu experiencia gaming.
        </li>
        <li>
          💡 <strong>Soporte técnico especializado:</strong> si tenés un problema con tu consola o 
          juego, nuestro equipo te brinda asistencia para resolverlo rápido.
        </li>
      </ul>

      <p style={{ color: "#e6e6e6", maxWidth: "700px", margin: "2rem auto" }}>
        Nuestro compromiso es que tu experiencia gamer sea fluida, divertida y sin complicaciones.  
        En <strong>Ko-Gamer</strong> jugamos en tu mismo equipo. 🚀
      </p>

      <Link to="/">
        <button style={{ marginTop: "1rem" }}>Volver al Inicio</button>
      </Link>
    </div>
  );
}

export default Servicios;