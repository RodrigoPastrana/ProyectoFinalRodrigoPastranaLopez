import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos.map((prod) => (
        <div key={prod.id} className="item-card">
          <div className="item-image-container">
            <img src={prod.imagen} alt={prod.nombre} className="item-image" />
          </div>
          <h3>{prod.nombre}</h3>
          <p>${prod.precio}</p>
          <Link to={`/item/${prod.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
