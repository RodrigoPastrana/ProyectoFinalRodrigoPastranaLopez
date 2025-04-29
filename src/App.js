import './App.css';
import React from 'react';
import NavBar from './components/NavBar'; // Importamos el NavBar
import ItemListContainer from './components/ItemListContainer'; // Importamos el ItemListContainer

function App() {
  const mensaje = "¡Descubre nuestras ofertas exclusivas!";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensajeBienvenida={mensaje} />
    </div>
  );
}

export default App;
