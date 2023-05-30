import "./Formulario.css";
import {useState} from "react";
import { db } from "../../services/firebase_con";
import { collection, addDoc} from "firebase/firestore";

const Formulario = () => 
{
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    //creamos tres estados para trabajar con los valores del formulario
    //creamos una funcion manejadora del formulario

    const manejadorFormulario = (event)=>
    {
        event.preventDefault();
        //addDoc nos permite agregar un elemento nuevo (documento) a mi coleccion
        addDoc(collection(db, "usuarios"), 
        {
            nombre:nombre,
            apellido:apellido,
            celular:celular
        })

        setNombre("");
        setApellido(""); 
        setCelular("");
    }

    return (
        <form onSubmit={manejadorFormulario}>
            <h2>formulario de contacto</h2>

            <label htmlFor="\">nombre</label>
            <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>

            <label htmlFor="\">apellido</label>
            <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
            
            <label htmlFor="\">celular</label>
            <input type="text" value={celular} onChange={(e)=> setCelular(e.target.value)}/>

            <button type="submit">enviar</button>
        </form>
    );
}

export default Formulario;
