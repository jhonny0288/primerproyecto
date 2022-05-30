import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <nav className='navbar navbar-dark bg-dark'>
        <div className="container">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/usuarios">Usuarios</Link>
        </div>    
    </nav>
    
  );
 
};

export default NavBar;
