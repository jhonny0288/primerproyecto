import React, {useState} from 'react'

const Formulario = () =>{

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const Validar = (event) =>{
        event.preventDefault()
        if(!nombre.trim())
        {
            console.log('El nombre esta Vacio')
            return
        }

        if(!edad.trim())
        {
            console.log('La edad esta Vacia')
            return
        }
    }

    return (
        <div className="container">
            <form onSubmit={Validar} className="form-group">

                <input 
                    placeholder="Ingresa el Nombre" 
                    className="form-control mb-3" 
                    type="text"
                    onChange ={ (e) => {setNombre(e.target.value)}}
                />

                <input 
                    placeholder="Ingresa la Edad" 
                    className="form-control mb-3" 
                    type="text"
                    onChange ={ (e) => {setEdad(e.target.value)}}
                />

                <input 
                    className="btn btn-outline-primary mb-3" 
                    type="submit"
                />

            </form>
        </div>
    )
}

export default Formulario