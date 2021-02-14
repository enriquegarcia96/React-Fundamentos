import React from 'react'

const Contador = () => {

    // Llamando los estados
    const [ contador, setContador ] = React.useState(0);

    /*
    const aumentar = () =>{
        console.log('click');
        setContador(contador + 1);
    }*/

    return (
        <div>
            <h2>Contador</h2>
            <h3>nuestro numero aumentando: {contador}</h3>
            <button onClick={ () => setContador(contador + 1)  } >Aumentar</button>
        </div>
    )
}

export default Contador
