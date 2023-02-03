import Form from "react-bootstrap/Form";

const Buscador = (props) => {
  const {onChange,onChangeCkeckNombre,onChangeCkeckTodo,checkNombreValor,checkTodoValor} = props;

  return (
    <div className="d-flex text-light border">
      <p className="col mt-2 ms-2 h5">Buscador</p>   
      <Form className="me-2 mt-2">    
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Filtrar por nombre`}
            onChange={onChangeCkeckNombre}
            checked={!checkNombreValor}
          />

          <Form.Check            
            type={type}
            label={`Filtrar por cualquier campo`}
            id={`disabled-default-${type}`}
            onChange={onChangeCkeckTodo}
            checked={!checkTodoValor}
          />
        </div>
      ))} 
      </Form>           
      <Form className="ms-4 me-2 pt-2">          
        <Form.Control
          type="search"
          placeholder="Busca un colaborador..."
          className="col mb-2 mt-2 p-0"
          aria-label="Search"
          onChange={onChange}
        />
      </Form>      
    </div>
    
  );
};

export default Buscador;
