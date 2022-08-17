import React, {useState} from "react";
import TareaForm from "./componentes/tareaform";
import Tarea from "./componentes/Tarea";
import './App.css';


function App() {
   const {listadoTareas, setlistaTareas} = useState([]);


   const nuevaTarea = (tarea) =>{
     setlistaTareas([tareas, ...listaTareas])
   }

    const borrar = (id) =>{
      const listaFiltrada = listadoTareas.filter((e, index)=>index !== id);
    setlistaTareas(listaFiltrada);
    }

  return (
    <div className="App">
    <TareaForm   
    nuevaTarea={nuevaTarea}
    /> 

    <div className="lista"> 
   {
     listadoTareas.map(e => <Tarea 
                                tarea ={e}
                               borrar={borrar}
                               id={index}
                                />
    )
   }

    </div>

</div> 
  );
}

export default App;
