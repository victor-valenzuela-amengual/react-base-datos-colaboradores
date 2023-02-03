import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Mensajes from "./Mensaje";

const Colaboradores = (props) => {
  const {error,mensaje, onSubmit,onChangeNombre,onChangeCorreo} = props;
  return (
    <div className="text-light">      
      <Form
        className="mt-2"
        onSubmit={onSubmit}       
      >
        {error ? <Mensajes error={error} mensaje={mensaje}/> : null}

        <Form.Group className="mb-1 " controlId="nombreColaborador">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className="p-0"
            type="text"
            placeholder="Escribe nombre"
            onChange={onChangeNombre}
          />
        </Form.Group>

        <Form.Group className="mb-2 " controlId="correoColaborador">
          <Form.Label>Correo</Form.Label>
          <Form.Control    
            className="p-0"        
            type="email"
            placeholder="Escribe correo"
            onChange={onChangeCorreo}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Agregar colaborador
        </Button>
        <hr />
      </Form>
      
    </div>
  );
};

export default Colaboradores;
