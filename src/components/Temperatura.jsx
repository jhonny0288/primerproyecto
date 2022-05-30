import React, {useState} from 'react'

const Temperatura  = () =>{

    const [temperatura, setTemperatura] = useState(19)

    const subirTemp = () =>{
        setTemperatura(temperatura + 1)
    }

    const bajarTemp = () =>{
        setTemperatura(temperatura - 1)
    }

return(
    <div className="container">
        <h2>La Temperatura es {temperatura}</h2>
        <p>
            {
                temperatura > 21 ? 'Hace calor' : 'Hace Fresco'
            }
        </p>
        <button className="btn btn-outline-success" onClick={subirTemp}>Aumentar temperatura</button>
        <button className="btn btn-outline-success" onClick={bajarTemp}>Reducir temperatura</button>
    </div>
)
}

export default Temperatura