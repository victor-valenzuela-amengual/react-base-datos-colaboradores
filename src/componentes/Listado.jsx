import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Listado = (props) => {
  const { colaboradores, onClick,onClickDesact } = props;
  return (
    <Table striped bordered hover variant="dark">
      <thead className="text-center">
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Activo</th>
          <th colSpan={2}>Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {colaboradores.map((colaborador, index) => {
          let estatus = colaborador.activo;
          let colorBoton = estatus ? "warning" : "success";
          let id = colaborador.id;          
          return (
            <tr key={index}>
              
              <td>
                {colaborador.id} 
              </td>
              <td>
                {colaborador.nombre} {colaborador.apellido}
              </td>
              <td>{colaborador.correo}</td>
              <td className="text-center">{estatus ? "SI" : "NO"}</td>
              <td className="text-center" id={index}>
                <div className="d-grid ">
                  <Button
                    className="" 
                    variant={colorBoton}
                    size="sm"
                    onClick={onClickDesact}
                    value={id}
                  >
                    {estatus ? "Desactivar" : "Activar"}
                  </Button>
                </div>
              </td>

              <td>
                <div className="d-grid text-center">
                  <Button
                    className=""
                    variant="danger"
                    size="sm"
                    onClick={onClick}
                    value={id}                    
                  >                    
                    Eliminar                    
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Listado;
