import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const CartWidget = () => {
  const itemsCount = 0;

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
