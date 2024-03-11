function Alert ({ alertMessage, alertCase}) {
    return (
        <div>
            <div className={`alert-${alertCase}`}>
                {alertMessage}
            </div>
        </div>
    );
  };
  
  export default Alert;