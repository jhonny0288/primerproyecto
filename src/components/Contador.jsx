import React, {Fragment, useState} from 'react'

const Contador = () => {

const [numero, setNumero] = useState(0)
const aumentar = () => {
    setNumero(numero + 1)
}

const reducir = () => {
    setNumero(numero - 1)
}
    
    return (
    <Fragment>
        <h2>Cantidad del Contador {numero}</h2>
        <button onClick={aumentar}>+</button>
        <button onClick={reducir}>-</button>
    </Fragment>
    )
}

export default Contador