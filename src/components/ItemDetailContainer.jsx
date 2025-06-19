import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productoRef = doc(db, "Productos", itemId);

    getDoc(productoRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al obtener producto:", error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {loading ? <p>Cargando...</p> : producto ? <ItemDetail producto={producto} /> : <p>No encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;