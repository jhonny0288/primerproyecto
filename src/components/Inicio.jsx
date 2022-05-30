import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";

const Inicio = () => {

  const {nombre} = useParams();
  /*const [nombre, setNombre] = useState('Jhonny');

  useEffect(() => {
    setTimeout(() => {
      setNombre('Aleidy')
    },3000)
  })*/

  return (
  <div>
        <h1>Pagina de Inicio</h1>
        {nombre}
    </div>
  )  ;
};

export default Inicio