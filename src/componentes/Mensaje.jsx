const Mensajes = (props) => {
    const { error, mensaje } = props;
    
    let alerta =mensaje!==undefined? (
    <div
        className={`alert ${error === false ? "alert-success" : "alert-danger"}`}
    >
        {mensaje}
        </div>
    ):"";
    return (
    <>
        {alerta}
    </>
    );
    };

    export default Mensajes;