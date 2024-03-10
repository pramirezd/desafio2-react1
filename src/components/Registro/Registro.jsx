import React from 'react'
import SocialButton from '../SocialButton/SocialButton'
import Formulario from '../Formulario/Formulario';

function Registro() {
  return (
    <div className="container p-5 d-flex flex-column align-items-center rounded-4 border border-white bg-white">
        <h1 className="text-center fs-1">Crea una cuenta</h1>

        <div className='d-flex flex-row'>
            <SocialButton socialMediaIcon="facebook" />
            <SocialButton socialMediaIcon="github" />
            <SocialButton socialMediaIcon="linkedin" />
        </div>

        <h3 className="text-center fs-6">O usa tu email para registrarte</h3>

        <Formulario />
    </div>
  )
}

export default Registro;