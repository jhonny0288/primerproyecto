import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import { Usuarios } from './components/Usuarios';
import { Usuario } from './components/Usuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route exact path='/Usuarios' element={<Usuarios></Usuarios>}></Route>
          <Route exact path='/Usuario/:id' element={<Usuario></Usuario>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
