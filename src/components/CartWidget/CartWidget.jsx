import "./CartWidget.css";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const CartWidget = (props) => 
{
  let {dataProducto,tipo_producto} = props; //estoy recibiendo la bd de los productos como una promesa, como esa promesa depende de un tiempo de conexion x pues espere x para enviarla XD (si la bd demora pues yo demoro en usarla, si todos somos pobres no hay desigualdad.)
  const [opeartive_menos, setOperativeMenos] = useState("false");
  const [opeartive_mas, setOperativeMas] = useState("false");
  const [color_menos, setColorMenos] = useState("#70002a");
  const [color_mas, setColorMas] = useState("#70002a");
  const [tipo_producto_vista, setTipoProducto] = useState("initial");
  const [contador, setContador] = useState(1);  //estamos desestructurando la funcion de retorno del useState. nos devuelve valor (que es contador) y una funcion para setearlo.
  
  useEffect(()=>
  {
    (tipo_producto==":simples") ? setTipoProducto("none") : setTipoProducto("inherit");
  })

  useEffect(()=>  //useEffect encargado de controlar el comportamiento de los botones - y + del contador. se encarga de ponerlos grises dependiendo y disabled dependiendo el caso
  {
    setOperativeMenos(contador === 1);
    setColorMenos(contador === 1 ? "grey" : "#70002a");

    setOperativeMas(contador === dataProducto.stock);
    setColorMas(contador === dataProducto.stock ? "grey" : "#70002a");
  }, [contador]);

  const incrementarCounter = () => {contador<dataProducto.stock && setContador(contador+1)}   //funcion encargada de incrementar contador si es menor que stock
  const disminuirCounter = () => {setContador(contador-1)}  //funcion encargada de decrementar contador (si es distinto de 1)
  
  const agregarCarrito = () =>
  {
    console.log(`Agregado ${contador} items de: ${dataProducto.nombre}. total compra: $${contador*dataProducto.precio} pesos uruguayos.`);
    contador!=0 && (document.querySelector("#counterCarrito").innerHTML=parseInt(document.querySelector("#counterCarrito").innerHTML) + 1);
  }

  return (
    <div className="productoItem">
        <img src={dataProducto.imageUrl} alt="" />
        <h4>{dataProducto.nombre}</h4>
        <p>{"$" + dataProducto.precio}</p>
        
        <div style={{display:tipo_producto_vista}}>
          <button style={{backgroundColor: color_menos}} disabled={Boolean(opeartive_menos)} onClick={disminuirCounter}>-</button>
          <input type="text" value={contador} disabled/>
          <button style={{backgroundColor: color_mas}}  disabled={Boolean(opeartive_mas)} onClick={incrementarCounter}>+</button>
        </div>
      
        <button className="agregar_carrito_btn" style={{display:tipo_producto_vista}} onClick={agregarCarrito}>agregar a carrito</button>
        
        <Link className="navlink" to={`/itemDetail/${dataProducto.id}`}>
          <button className="agregar_carrito_btn ver_detalles_btn" style={{display:tipo_producto_vista}} >ver detalles</button>
        </Link>
    </div>
    
  );
}

export default CartWidget;
