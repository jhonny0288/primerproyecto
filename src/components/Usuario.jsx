import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Usuario = () => {

    const [usuario, setUsuario] = useState([])
    const {id} = useParams()

    const obtenerUsuario = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await res.data
        setUsuario(user)
    }

    useEffect( () => {
        obtenerUsuario()
    },[])

  return (
    <div>
        Datos del Usuario
        
        <h3>
            Usuario:
        </h3>
        <p>Nombre: {usuario.name}</p>
        <p>E-mail: {usuario.email}</p>
        <small>Telefono: {usuario.phone}</small>
    </div>
  );
};
