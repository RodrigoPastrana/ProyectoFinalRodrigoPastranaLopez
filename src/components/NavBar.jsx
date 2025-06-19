import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "Productos");

    getDocs(productosRef)
      .then((snapshot) => {
        const productos = snapshot.docs.map(doc => doc.data());
        const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];
        setCategorias(categoriasUnicas);
      })
      .catch((error) => {
        console.error("Error al obtener categorías:", error);
      });
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/logo e-market.png" alt="Logo de la Tienda" style={{ height: "50px" }} />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <Link to={`/categoria/${categoria}`}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </Link>
          </li>
        ))}
        <li><Link to="/contacto">Próxima Página</Link></li>
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
