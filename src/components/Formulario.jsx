import React from 'react'

const Formulario = () => {

    const [ fruta, setFruta ] = React.useState('');
    const [ descripcion, setDescripcion ] = React.useState('');
    const [ lista, setLista ]  = React.useState([]);

    const guardarDatos = ( evento ) => {
        evento.preventDefault();
        
        if(!fruta.trim()){
            console.log('esta vacio fruta');
            return;
        }
        
        if(!descripcion.trim()){
            console.log('esta vacio descripcion');
            return;
        }

        console.log('procesando Datos...' + fruta + descripcion);

        setLista([
            ...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])

        evento.target.reset();

        setFruta('');
        setDescripcion('');

    }

    return (
        <div>
            <h2>Formularios</h2>   
            <form onSubmit={ guardarDatos } >
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (evento) => setFruta(evento.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    onChange={(evento) => setDescripcion(evento.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
