import React,{useState} from "react";
import "../app.css";

const TareaForm = (props) => {
     const {inputText, setinpuTex} = useState("");
    const {validacion,setValidacion} = useState(true);

     const manejarFormulario = (event) => {
          setInputText(event.target.value);
     }

     const submit = (event) =>{
         event.preventDefault();
         if(inputText.trim()!== ""){
          props.nuevaTarea(inputText);
          setInputText("");
          setValidacion(true);
     }else{
         setValidacion(flase);
     }     

     }

    return (
        <div>
            <form className="form" onSubmit={submit}>
                <span>Añadir tarea</span>
                <input value ={inputText} onChange = {manejarFormulario} />
                <button>Añadir</button>
            </form>
            {
                !validacion &&
                <div className="validacion">Añade una tarea, por favor </div>
            }
        </div>
    )
}

export default TareaForm