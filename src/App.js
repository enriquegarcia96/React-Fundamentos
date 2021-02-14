import React from 'react';

//Importo el componente que quiero utilizar
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Eventos from './components/Eventos';
import Contador from './components/Contador';


function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Parrafo />
      <Variables />
      <Eventos />
      <Contador />
    </div>
  );
}

export default App;
