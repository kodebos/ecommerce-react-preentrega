import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import datosProductos from "../assets/productos.json";

export default function Inicio() {
  const [productosDestacados, setProductosDestacados] = useState([]);

  useEffect(() => {
    // Tomamos 3 productos del catálogo como destacados
    setProductosDestacados(datosProductos.productos.slice(0, 3));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {/* ==== Banner de bienvenida ==== */}
      <section
        style={{
          background:
            "linear-gradient(90deg, rgba(0,255,255,0.1), rgba(191,0,255,0.1))",
          border: "1px solid #00ffff",
          borderRadius: "15px",
          padding: "3rem 1rem",
          boxShadow: "0 0 30px rgba(0,255,255,0.2)",
          marginBottom: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#00ffff",
            textShadow: "0 0 10px #bf00ff",
          }}
        >
          🎮 ¡Bienvenido a Ko-Gamer!
        </h1>
        <p style={{ color: "#e6e6e6", maxWidth: "600px", margin: "1rem auto" }}>
          Descubrí las mejores consolas, videojuegos y accesorios del mundo
          gamer. Potenciá tu experiencia con la tecnología de última generación.
        </p>
        <Link to="/productos">
          <button>Ver Catálogo Completo</button>
        </Link>
      </section>

      {/* ==== Productos destacados ==== */}
      <section>
        <h2
          style={{
            color: "#bf00ff",
            textShadow: "0 0 10px #00ffff",
            marginBottom: "2rem",
          }}
        >
          🔥 Productos Destacados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
            padding: "0 2rem",
          }}
        >
          {productosDestacados.map((producto) => (
            <div
              key={producto.id}
              style={{
                backgroundColor: "#1a1a1a",
                border: "2px solid #00ffff",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0,255,255,0.3)",
                padding: "1rem",
                maxWidth: "300px",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={producto.avatar}
                alt={producto.nombre}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                }}
              />
              <h3 style={{ color: "#00ffff" }}>{producto.nombre}</h3>
              <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                {producto.descripcion}
              </p>
              <strong style={{ color: "#bf00ff" }}>
                ${producto.precio.toFixed(2)}
              </strong>
              <br />
              <Link
                to={`/productos/${producto.categoria}/${producto.id}`}
                state={{ producto }}
              >
                <button style={{ marginTop: "0.5rem" }}>Ver Detalles</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
