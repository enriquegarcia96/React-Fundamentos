import React from 'react';

//Importo el componente que quiero utilizar
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Eventos from './components/Eventos';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';


function App() {
  return (
    <div className="container mt-5">
      <h1>Hola Mundo</h1>
      <Formulario />
      <Parrafo />
      <Variables />
      <Eventos />
      <Contador />
      <Lista />
    </div>
  );
}

export default App;
