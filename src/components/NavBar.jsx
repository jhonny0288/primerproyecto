import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseconfig';

const NavBar = () => {

  const historial = useNavigate()
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user.email)
      }
    })
  }, [])

  const CerrarSesion = () => {
    signOut(auth)
    .then(()=>{
      setUsuario(null);
      {historial('/Login')}
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='container'>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
        <Link className='nav-link' to="/">Inicio</Link>
        </li>
        <li className='nav-item'>
            {
              !usuario ?
                (
                  <Link className='nav-link' to="/Login">Login</Link>
                )
                :
                (
                  <span></span>
                )
            }        
        </li>
        <li className='nav-item'>
            {
              usuario ?
                (
                  <Link className='nav-link' to='/Admin'>Admin</Link>
                )
                :
                (
                  <span></span>
                )
            }

        </li>
        {/* <li className='nav-item'>
        <Link className='nav-link' to="/contacto">Contacto</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to="/usuarios">Usuarios</Link> 
        </li>*/}
      </ul>
      {
        usuario ?
        (
          <button 
            onClick={CerrarSesion}
            className='btn btn-danger w-10 mt-2'>
            Cerrar Sesion
          </button>
        )
        :
        (
          <span></span>
        )
      }
    </nav>
  </div>
  )
};

export default NavBar;
