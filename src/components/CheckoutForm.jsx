import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import db from "../firebase";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orden = {
      comprador: form,
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.quantity,
      })),
      total: totalPrice(),
      fecha: Timestamp.fromDate(new Date()),
    };

    try {
      const ordenesRef = collection(db, "ordenes");
      const docRef = await addDoc(ordenesRef, orden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar orden:", error);
    }

    setLoading(false);
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/" style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#006778", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Finalizar compra</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;