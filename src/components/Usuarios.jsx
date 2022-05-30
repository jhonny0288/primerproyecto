import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await res.data
        setUsuarios(users)
    }

    useEffect( () => {
        obtenerUsuarios()
    },[])

  return (
    <div>
        <h1>Pagina de Usuarios</h1>
        {
            usuarios.map( (item) => (
                <div>
                    <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                </div>
                
            ))
        }
    </div>
        
  )
};
