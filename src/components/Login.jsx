import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from '../firebaseconfig'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msjerror, setMsjError] = useState('')

    const RegistrarUsuario = (e) =>{
        e.preventDefault()
        try {
            createUserWithEmailAndPassword(auth, email, pass)
            .then( r=> alert('Usuario registrado'))            
            setEmail('')
            setPass('')
        } 
        catch (error) {

            if (error.code == 'auth/invalid-email')
            {
                setMsjError('formato de email incorrecto')   
            }

            if (error.code == 'auth/weak-password')
            {
                setMsjError('formato de email incorrecto')   
            }
             
        }
    }

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
                 msjerror != null ? 
                (
                    <div>
                        {msjerror}
                    </div>
                ) 
                :
                 (
                    <span></span>
                 )
                }
            </div>
            <div className='col'>

            </div>
        </div>
    )
}

export default Login