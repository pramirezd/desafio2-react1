import React from 'react'
import { useState } from 'react'

function Formulario() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState(false);

    const validateSubmit = (event) => {
        event.preventDefault();

        if(
            name.trim() === '' ||
            email.trim() === '' ||
            pass.trim() === '' ||
            confirmPass.trim === ''
        ) {
            setError(true);

            return
        }
        setError(false)
    }

    return (
        <div className=''>
            <form onSubmit={validateSubmit}>
                <div className='form-group'>
                    <div className='col-xs-4'>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            placeholder='Nombre Apellido'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className='col-xs-4'>
                        <label>Email</label>
                        <input
                            type="text"
                            name='email'
                            className='form-control'
                            placeholder='mail@dominio.com'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='col-xs-4'>
                        <label>Contraseña</label>
                        <input
                            type="text"
                            name='pass'
                            className='form-control'
                            value={pass}
                            onChange={(event) => setPass(event.target.value)}
                        />
                    </div>
                    <div className='col-xs-4'>
                        <label>Confirma tu contraseña</label>
                        <input
                            type="text"
                            name='confirmPass'
                            className='form-control'
                            value={confirmPass}
                            onChange={(event) => setConfirmPass(event.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success w-100 mt-3 mb-3 col-xs-4"
                    >
                        Registrarse
                    </button>
                </div>                
            </form>
        </div>
    )
}

export default Formulario;