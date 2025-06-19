import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cart } = useCart();
  const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <button className="cart-button">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        {itemsCount > 0 && (
          <span className="cart-bubble">{itemsCount}</span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;
