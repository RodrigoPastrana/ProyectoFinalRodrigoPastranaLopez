import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <strong>{item.nombre}</strong> — ${item.precio} x {item.quantity} = ${item.precio * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      <Link to="/checkout" className="btn-ir-carrito">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
