import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">🎮 Inicio</Link></li>
        <li><Link to="/productos">🕹️ Consolas & Juegos</Link></li>
        <li><Link to="/servicios">🔧 Servicios</Link></li>
        <li><Link to="/iniciar-sesion">👤 Login</Link></li>
      </ul>
    </nav>
  );
}
