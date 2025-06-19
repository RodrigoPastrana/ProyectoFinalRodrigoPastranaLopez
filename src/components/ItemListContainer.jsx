import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";


const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, "Productos");

    getDocs(productosRef)
      .then((snapshot) => {
        const productosFirestore = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        if (categoriaId) {
          const filtrados = productosFirestore.filter(
            (prod) => prod.categoria === categoriaId
          );
          setItems(filtrados);
        } else {
          setItems(productosFirestore);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, [categoriaId]);

  return (
    <div>
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Todos los productos"}</h2>
      {loading ? <p>Cargando...</p> : <ItemList productos={items} />}
    </div>
  );
};

export default ItemListContainer;
