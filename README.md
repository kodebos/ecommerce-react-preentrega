# 🎮 GamerStore - eCommerce de Consolas y Videojuegos

Proyecto desarrollado como **preentrega del curso de React + Vite**, correspondiente a la materia **Desarrollo Web / eCommerce**.  
El sitio simula una tienda online llamada **Ko-Gamer**, dedicada a la venta de consolas y videojuegos físicos (CDs).

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React + Vite**  
- 🧭 **React Router DOM** (rutas dinámicas y protegidas)  
- 💅 **CSS personalizado** con modo oscuro y estilo neón  
- 📦 **useState** y **useEffect** para gestión de estado  
- 🧩 **JSON local** como fuente de datos (simulando una API)

---

## 🛒 Funcionalidades principales

### ✅ Listado de productos
- Componente `Productos.jsx` que muestra el **catálogo de consolas y videojuegos**.  
- Se cargan los datos desde `productos.json` utilizando `useEffect`.  
- Incluye estado de carga y manejo de errores.

### ✅ Carrito de compras
- Implementado con `useState` en `Productos.jsx` y `Carrito.jsx`.  
- Permite agregar productos, vaciar carrito y calcular total.  
- Al presionar “Pagar” redirige a `/pagar`.

### ✅ Login y rutas protegidas
- El usuario debe **iniciar sesión** antes de poder pagar.  
- Se maneja autenticación básica con `useState` (`isAuthenticated`).  
- El componente `RutaProtegida.jsx` restringe el acceso a `/pagar`.

### ✅ Navegación y rutas dinámicas
- Implementadas con **React Router DOM**.  
- Cada producto tiene una página de **detalle** (`/productos/:categoria/:id`).  
- Incluye rutas protegidas, rutas dinámicas y navegación con `Link`.

### ✅ Página de inicio
- Componente `Inicio.jsx` con banner de bienvenida y productos destacados.  
- Estilo inspirado en tiendas gamer como CompraGamer.

### ✅ Página de servicios
- Explica los **servicios técnicos y asesoramiento** de la tienda.  

### ✅ Diseño y estética
- Modo **oscuro con estilo neón** (azul y violeta).  
- Diseño responsive con grillas (`grid-template-columns`).  
- Fuente *Orbitron* de Google Fonts para un look gamer.

---

## 🧠 Hooks utilizados

- `useState` → manejo del carrito, autenticación, formulario de login y productos.  
- `useEffect` → carga inicial del catálogo desde JSON.  

---

## 🌐 Simulación de API

Los productos se obtienen desde un archivo local `productos.json`, que simula una API REST.  
Cada producto incluye:  
- `id`  
- `nombre`  
- `descripcion`  
- `precio`  
- `avatar` (imagen)  
- `categoria`

---

## 💡 Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
http://localhost:5173/
