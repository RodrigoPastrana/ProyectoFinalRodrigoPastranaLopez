import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useCart();
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="item-detail">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="item-detail-img"
      />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>

      {agregado ? (
        <Link to="/cart" className="btn-ir-carrito">Ir al carrito</Link>
      ) : (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
