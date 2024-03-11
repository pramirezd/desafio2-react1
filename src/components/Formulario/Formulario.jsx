import React from 'react'
import { useState } from 'react'

function Formulario({ onError, onSuccess}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const validateSubmit = (event) => {
        event.preventDefault();

        if(
            name.trim() === '' ||
            email.trim() === '' ||
            pass.trim() === '' ||
            confirmPass.trim() === ''
        ) {
            onError('Completa todos los campos!');
            return;
        }

        if(isValidEmail.test(email)) {
            onError('Formato de email no válido');
            return;
        }

        if (pass !== confirmPass) {
            onError('Las contraseñas deben ser iguales');
            return;
        }
        onSuccess('Registro completado exitosamente!')
        setName('');
        setEmail('');
        setPass('');
        setConfirmPass('');

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
                            type="email"
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
                            type="password"
                            name='pass'
                            className='form-control'
                            value={pass}
                            onChange={(event) => setPass(event.target.value)}
                        />
                    </div>
                    <div className='col-xs-4'>
                        <label>Confirma tu contraseña</label>
                        <input
                            type="password"
                            name='confirmPass'
                            className='form-control'
                            value={confirmPass}
                            onChange={(event) => setConfirmPass(event.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success w-100 mt-2 col-xs-4"
                    >
                        Registrarse
                    </button>
                </div>                
            </form>
        </div>
    )
}

export default Formulario;