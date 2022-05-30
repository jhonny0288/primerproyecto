import React, { Fragment } from 'react'

function Hola(){
    let saludo = 'Holassss'
    return (
        <Fragment>
            <h2>Primer componente {saludo}</h2>
            <p>segundo texto</p>
        </Fragment>
    )
}

export default Hola