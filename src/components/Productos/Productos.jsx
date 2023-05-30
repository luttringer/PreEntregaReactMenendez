import "./Productos.css";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where, doc, updateDoc} from "firebase/firestore";

//getDocs me permite obtener los documentos de una conexion
//collection me permite obtener una coleccion 
//query la utilizo cuando quiero generar una consulta
//where la utilizo para agregar filtros a mi consulta

import {db} from "../../services/firebase_con.js"


const Productos = () => {
    /*
    
    const [productos, setProductos] = useState([]);

    useEffect(()=>
    {
        //const misProductos = query(collection(db, "inventario"), where("precio", "<", 500)); // consulta que filtra mediante where, donde precio sea menor que 500
        const misProductos = query(collection(db, "inventario")); //esta es la consulta a la bd, su preparacion. aqui traigo todo
        getDocs(misProductos)
            .then((respuesta)=> 
            {
                setProductos(respuesta.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            })
    },[productos]);

    const descontarStock = async(producto) => 
    {
        const productoRef = doc(db, "inventario",producto.id);
        const nuevoStock = producto.stock-1;
        
        await updateDoc(productoRef, {stock: nuevoStock});
    }
    */

    return (
        <>
            <h2>Productos</h2>
            <div>
                {
                    /*
                    productos.map((producto) => 
                    (
                        <div class-name='producto-card' key={producto.id}>
                            <h2>{producto.nombre}</h2>
                            <p>{producto.precio}</p>
                            <p>{producto.stock}</p>
                            <button onClick={()=> descontarStock(producto)}>comprar</button>
                        </div>
                    ))*/
                }
            </div>
        </>
    );
}

export default Productos;
