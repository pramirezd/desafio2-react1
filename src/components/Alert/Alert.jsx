const Alert = ({ tipo, mensaje }) => {
    return (
      <div className="w-75">
        <div className={`alert ${tipo}`} role="alert">
            {mensaje}
        </div>
      </div>
    );
  };
  
  export default Alert;