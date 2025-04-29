import React from 'react';

const ItemListContainer = ({ mensajeBienvenida }) => {
  return (
    <div>
      <h2>Bienvenido a E-Market</h2>
      <p>{mensajeBienvenida}</p>
    </div>
  );
};

export default ItemListContainer;
