import React, { useState } from 'react';
import uniqid from 'uniqid';

const Listadonombres = () => {

const [nombre, setNombre] = useState('')
const [listanombres, setlistanombres] = useState([])
const [modoEdicion, setModoEdicion] = useState(false)
const [id, setId] = useState('')
const [error, setError] = useState(null)

const addNombre = (e) => {
    e.preventDefault()

    if (!nombre.trim())
    {
         setError('El campo nombre esta vacio')
         return  
    }

    const nuevoNombre = {
        id:uniqid(),
        tituloNombre:nombre
    }

    setlistanombres([...listanombres,nuevoNombre])
    setNombre('')
    setError(null) 
    
}

const deleteNombre = (id) => {
    setModoEdicion(false)
    const nuevoArray = listanombres.filter(item => item.id !== id)
    setlistanombres(nuevoArray)
    setNombre('')      
}

const editar = (item) => {
    setModoEdicion(true)
    setNombre(item.tituloNombre)
    setId(item.id)
}

const editarNombre = (e) => {
    e.preventDefault()
    const nuevoArray = listanombres.map(item => item.id === id ? {id:id, tituloNombre:nombre}: item)
    setlistanombres(nuevoArray)
    setModoEdicion(false)
    setNombre('')
}


    return(
        <div>
            <h2>Aplicacion CRUD Basica</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de Nombre</h2>
                    <ul className='list-group'>
                        {
                            listanombres.map(item => 
                                <li key={item.id} className='list-group-item'>{item.tituloNombre}
                                <button  onClick={ () => {deleteNombre(item.id)}} className='btn btn-danger float-right'>Borrar</button>
                                <button  onClick={ () => {editar(item)}} className='btn btn-info float-right'>Editar</button>
                                </li>                                
                            )
                        }
                    </ul>
                </div>
                <div className='col'>
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className='form-group'>
                        <input onChange={(e)=>{setNombre(e.target.value)}}
                         className='form-control mb-3' 
                         type='text' 
                         placeholder='Introduce el nombre'
                         value={nombre}
                         >
                         </input>
                        <input 
                        className='btn btn-info btn-block' 
                        type='submit' 
                        value={modoEdicion ? 'Editar Nombre' : 'Registrar Nombre'}>
                        </input>
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger mb-3">
                                {error}
                            </div>
                        ):
                        (
                            <div>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listadonombres;

