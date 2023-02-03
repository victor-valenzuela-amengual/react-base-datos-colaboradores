import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Colaboradores from "./componentes/Colaboradores";
import { BaseColaboradores } from "./dbColaboradores";
import Listado from "./componentes/Listado";

function App() {
  const [nuevoColaborador, setNuevoColaborador] = useState(null);
  const [nuevoCorreo, setNuevoCorreo] = useState(null);  
  const [arrColaboradores, setArrColaboradores] = useState(BaseColaboradores.sort((a,b)=>(a.nombre<b.nombre?-1:1)));
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [arrFijo, setArrFijo] = useState(BaseColaboradores);
  const [checkFiltroNombreMarcado, setChecked] = useState(false);
  const [checkFiltroTodo, setCheckedTodo] = useState(true);  

  const checkNombre=()=>{      
    setCheckedTodo(true);
    setChecked(false)    
  }
  const checkTodo=()=>{          
    setCheckedTodo(false);
    setChecked(true)    
  }

  const handleSubmitColaborador = (e) => {
    e.preventDefault();
    if (
      nuevoColaborador === null ||
      nuevoColaborador === "" ||
      nuevoCorreo === null ||
      nuevoCorreo === ""
    ) {
      setError(true);
      setMensaje("Falta nombre o correo");
    } else {
      setError(false);
      agregarColaborador();
      setMensaje("");

      e.target.reset();
    }
  };

  const asignarNombreColaborador = (e) => {
    setNuevoColaborador(e.target.value);
  };

  const asignarCorreoColaborador = (e) => {
    setNuevoCorreo(e.target.value);
  };

  const agregarColaborador = () => {
    let nuevo_colaborador = {
      id: arrColaboradores.length + 1,
      nombre: nuevoColaborador,
      correo: nuevoCorreo,
      activo:true
    };
    setArrColaboradores([...arrColaboradores, nuevo_colaborador]);
    setArrFijo([...arrColaboradores, nuevo_colaborador]);
    setNuevoColaborador("");
    setNuevoCorreo("");
  };

  const eliminarColaborador = (e) => {
    let indexElement = e.target.value;

    const index = arrColaboradores.findIndex((colaborador) => {
      return parseInt(colaborador.id) === parseInt(indexElement);
    });    
    arrColaboradores.splice(index, 1);
    setArrColaboradores([...arrColaboradores]);
  };

  const desactivarColaborador = (e) => {
    let indexElement = e.target.value;

    const index = arrColaboradores.findIndex((colaborador) => {
      return parseInt(colaborador.id) === parseInt(indexElement);
    });    
    let estado = !arrColaboradores[index].activo;
    arrColaboradores[index].activo = estado;
    
    setArrColaboradores([...arrColaboradores]);
  };

  const buscarColaborador = (e) => {    
    let filtro = e.target.value.toLowerCase();    
    let  arr =[];
    //Filtrar por campo nombre y apellido
    if(!checkFiltroNombreMarcado)
      arr = arrFijo.filter((colaborador)=>colaborador.nombre.toLowerCase().indexOf(filtro)!==-1
    ||colaborador.apellido.toLowerCase().indexOf(filtro)!==-1);
    else
    //Filtrar por cualquier campo
      arr = arrFijo.filter((o) =>
      Object.keys(o).some((k) => o[k].toString().toLowerCase().includes(filtro))
    );         
    if (filtro !== "") 
      setArrColaboradores([...arr]);    
    else{      
      setArrColaboradores([...arrFijo]);              
      setArrFijo(BaseColaboradores);
    }    
  };

  return (        
    <div className="container">
      <h1 className="text-center text-light">Colaboradores</h1>
      <Buscador
        onChange={(e) => {
          buscarColaborador(e);
        }}
        onChangeCkeckNombre ={() => {
          checkNombre();
        }}
        onChangeCkeckTodo ={() => {
          checkTodo();
        }}
        checkNombreValor={checkFiltroNombreMarcado}
        checkTodoValor={checkFiltroTodo}
      />
      <Colaboradores        
        error={error}
        mensaje={mensaje}
        onSubmit={handleSubmitColaborador}
        onChangeNombre={(e) => {
          asignarNombreColaborador(e);
        }}
        onChangeCorreo={(e) => {
          asignarCorreoColaborador(e);
        }}
        
      ></Colaboradores>       
      <Listado        
        colaboradores={arrColaboradores}
        onClick={(e) => {
          eliminarColaborador(e);
        }}
        onClickDesact={(e) => {
          desactivarColaborador(e);
        }}
      ></Listado>
    </div>
  );
}

export default App;
