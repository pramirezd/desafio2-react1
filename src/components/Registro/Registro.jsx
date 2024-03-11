import React, { useState } from 'react'
import SocialButton from '../SocialButton/SocialButton'
import Formulario from '../Formulario/Formulario';
import Alert from '../Alert/Alert';

function Registro() {

    const [alertMessage, setAlertMessage] = useState("");
    const [alertCase, setAlertCase] = useState("");

    const handleSuccess = (message) => {
        setAlertMessage(message);
        setAlertCase("alert-success");
      };
    
      const handleError = (message) => {
        setAlertMessage(message);
        setAlertCase("alert-danger");
      };
    
    return (
        <div className="container p-5 d-flex flex-column align-items-center rounded-4 border border-white bg-white">
            <h1 className="text-center fs-1">Crea una cuenta</h1>

            <div className='d-flex flex-row'>
                <SocialButton socialMediaIcon="facebook" />
                <SocialButton socialMediaIcon="github" />
                <SocialButton socialMediaIcon="linkedin" />
            </div>

            <h3 className="text-center fs-6">O usa tu email para registrarte</h3>

            <Formulario
                onError={handleError}
                onSuccess={handleSuccess}
                alertMessage={alertMessage}
                alertCase={alertCase}
            />

            <Alert 
                className="bg-primary" 
                mensaje={alertMessage} 
                tipo={alertCase} 
            />
        </div>
    )

}

export default Registro;