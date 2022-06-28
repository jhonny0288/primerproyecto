import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
        <Link className='nav-link' to="/">Inicio</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to="/Login">Login</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to='/Admin'>Admin</Link>
        </li>
        {/* <li className='nav-item'>
        <Link className='nav-link' to="/contacto">Contacto</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to="/usuarios">Usuarios</Link> 
        </li>*/}
      </ul>
    </nav>
  </div>
  )
};

export default NavBar;
