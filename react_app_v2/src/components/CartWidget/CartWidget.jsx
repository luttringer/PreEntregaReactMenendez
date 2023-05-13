import "./CartWidget.css";
import { useState, useEffect } from "react";


const CartWidget = (props) => 
{
  let {codigoProducto,bd_productos,tipo_producto} = props; //estoy recibiendo la bd de los productos como una promesa, como esa promesa depende de un tiempo de conexion x pues espere x para enviarla XD (si la bd demora pues yo demoro en usarla, si todos somos pobres no hay desigualdad.)
  const [opeartive_menos, setOperativeMenos] = useState("false");
  const [opeartive_mas, setOperativeMas] = useState("false");
  const [color_menos, setColorMenos] = useState("#70002a");
  const [color_mas, setColorMas] = useState("#70002a");
  const [tipo_producto_vista, setTipoProducto] = useState("initial");


  const obj_producto = bd_productos.find((producto) => producto.codigoProducto === codigoProducto);
  //const obj_producto = bd_productos.filter((producto)=>producto.codigoProducto === codigoProducto); //PORQUE NO ANDA CON FILTER? PORQUEEEEEEEE?
  const [contador, setContador] = useState(obj_producto.inicialStock);  //estamos desestructurando la funcion de retorno del useState. nos devuelve valor (que es contador) y una funcion para setearlo.
  
  useEffect(()=>
  {
    if(tipo_producto=="simples")
    {
      setTipoProducto("none");
    }else
    {
      setTipoProducto("inherit");
    }
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

    if(contador === obj_producto.stockProducto)
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
  const incrementarCounter = () => {contador<obj_producto.stockProducto && setContador(contador+1);}    
  const disminuirCounter = () => {contador>obj_producto.inicialStock && setContador(contador-1);} 
  
  const agregarCarrito = () =>
  {
    console.log(`Agregado ${contador} items de: ${obj_producto.nombreProducto}. total compra: $${contador*obj_producto.precioProducto} pesos uruguayos.`);
    if(contador!=0)
    {
      document.querySelector("#counterCarrito").innerHTML=parseInt(document.querySelector("#counterCarrito").innerHTML) + 1;
    }
  }

  return (
    <div class="productoItem">
        <img src={obj_producto.urlimgProducto} alt="" />
        <h4>{obj_producto.nombreProducto}</h4>
        <p>{"$" + obj_producto.precioProducto}</p>
        
        <div style={{display:tipo_producto_vista}}>
          <button style={{backgroundColor: color_menos}} disabled={opeartive_menos} onClick={disminuirCounter}>-</button>
          <input type="text" value={contador} disabled/>
          <button style={{backgroundColor: color_mas}}  disabled={opeartive_mas} onClick={incrementarCounter}>+</button>
        </div>
          
        <button class="agregar_carrito_btn" style={{display:tipo_producto_vista}} onClick={agregarCarrito}>agregar a carrito</button>
    </div>
    
  );
}

export default CartWidget;
