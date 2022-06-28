import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from '../firebaseconfig'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgerror] = useState('')

    const RegistrarUsuario = (e) =>{
        e.preventDefault()
        
            createUserWithEmailAndPassword(auth, email, pass)
            .then(()=>{
                alert('Usuario creado exitosamente')
                setEmail(null)
                setPass(null)
            })
            .catch ((error) =>{

                if (error.code == 'auth/invalid-email')
                {
                    setMsgerror('formato de email incorrecto')   
                }

                if (error.code == 'auth/weak-password')
                {
                    setMsgerror('formato de contraseña incorrecto (Minimo 6 caracteres)')   
                }
            });
        
    };

    return (
        <div className='row mt-5'>
            <div className='col'>

            </div>
            <div className='col'>
                <form onSubmit={RegistrarUsuario} className='form-group'>
                    <input
                    onChange={(e)=>{setEmail(e.target.value)}}
                        className='form-control'
                        placeholder='Introduce el email'
                        type="email">
                        
                    </input>
                    <input
                    onChange={(e)=>{setPass(e.target.value)}}
                        className='form-control mt-4'
                        placeholder='Introduce la clave'
                        type="password">
                    </input>
                    <input
                        className='btn btn-dark w-100 mt-4'
                        value='Registrar Usuario'
                        type="submit">
                    </input>
                </form>
                
                {
                    msgerror != null ? 
                    (
                        <div>
                            {msgerror}
                        </div>
                    )
                    :
                    (
                        <div></div>
                    )
                }
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login