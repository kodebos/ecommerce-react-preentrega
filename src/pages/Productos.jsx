import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";
import datosProductos from "../assets/productos.json";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    try {
      setProductos(datosProductos.productos);
      setCargando(false);
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un problema al cargar los productos.");
      setCargando(false);
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`Producto ${producto.nombre} agregado al carrito`);
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* Título general del catálogo */}
      <h1
        style={{
          textAlign: "center",
          color: "#00ffff",
          textShadow: "0 0 10px #bf00ff",
          marginTop: "1rem",
        }}
      >
        🎮 Catálogo de Consolas y Videojuegos
      </h1>

      {/* Grilla de productos */}
      <ul id="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2 style={{ color: "#bf00ff", textShadow: "0 0 8px #00ffff" }}>
              {producto.nombre}
            </h2>
            <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
              {producto.descripcion}
            </p>
            <strong style={{ color: "#00ffff" }}>
              ${producto.precio.toFixed(2)}
            </strong>
            <img
              src={producto.avatar}
              alt={producto.nombre}
              width="80%"
              style={{ borderRadius: "10px", marginTop: "0.5rem" }}
            />
            <div style={{ marginTop: "0.5rem" }}>
              <Link
                to={`/productos/${producto.categoria}/${producto.id}`}
                state={{ producto }}
              >
                <button>Ver Detalles</button>
              </Link>
              <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al Carrito
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Carrito visible debajo */}
      <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
    </>
  );
}
