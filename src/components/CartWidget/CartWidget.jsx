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
  //const obj_producto = bd_productos.find((producto) => producto.codigoProducto === codigoProducto);
  const [contador, setContador] = useState(1);  //estamos desestructurando la funcion de retorno del useState. nos devuelve valor (que es contador) y una funcion para setearlo.
  
  useEffect(()=>
  {
    (tipo_producto==":simples") ? setTipoProducto("none") : setTipoProducto("inherit");
  })

  useEffect(()=>  //creo un useEffect para cuando se modifica el contador, anulare la operativilidad de los buttons incrementales y decrementales.
  {
    if(contador===1)
    {
      setOperativeMenos(true);
      setColorMenos("grey");
    }else 
    {
      setOperativeMenos(false);
      setColorMenos("#70002a");
    }

    if(contador === dataProducto.stock)
    {
      setOperativeMas(true);
      setColorMas("grey");
    }else 
    {
      setOperativeMas(false);
      setColorMas("#70002a");
    }
  }, [contador]);

  //funciones contador
  const incrementarCounter = () => {contador<dataProducto.stock && setContador(contador+1);}    
  const disminuirCounter = () => {contador>dataProducto.stock && setContador(contador-1);} 
  

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
          <button style={{backgroundColor: color_menos}} disabled={opeartive_menos} onClick={disminuirCounter}>-</button>
          <input type="text" value={contador} disabled/>
          <button style={{backgroundColor: color_mas}}  disabled={opeartive_mas} onClick={incrementarCounter}>+</button>
        </div>
          
        <button className="agregar_carrito_btn" style={{display:tipo_producto_vista}} onClick={agregarCarrito}>agregar a carrito</button>
        
        <Link className="navlink" to={`/itemDetail/${dataProducto.id}`}>
          <button className="agregar_carrito_btn ver_detalles_btn" style={{display:tipo_producto_vista}} >ver detalles</button>
        </Link>
    </div>
    
  );
}

export default CartWidget;
