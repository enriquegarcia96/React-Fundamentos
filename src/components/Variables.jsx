import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante';
    const imagen = 'https://images.unsplash.com/photo-1553669006-5375a6647fd3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80';
    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src={imagen} alt=""/>
        </div>
    )
}

export default Variables
