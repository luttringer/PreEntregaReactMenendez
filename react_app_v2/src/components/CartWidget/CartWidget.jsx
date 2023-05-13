import "./CartWidget.css";
import { useState, useEffect } from "react";

const CartWidget = (props) => 
{
  let {codigoProducto} = props; 
  const [opeartive_menos, setOperativeMenos] = useState("false");
  const [opeartive_mas, setOperativeMas] = useState("false");
  const [color_menos, setColorMenos] = useState("#70002a");
  const [color_mas, setColorMas] = useState("#70002a");
  
  const bd_items_stock =  //codigo,nombre, descripcion, precio, imgURL, stock, inicialStock
  [
    {codigoProducto:"#a0001", nombreProducto:"Vino Tinto Tannat Cabernet Gran Guarda H. STAGNARI 750 ml", descriProducto:"sin descripcion de momento.",precioProducto:449, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P387628-2.jpg?20220505151608,Vino-Tinto-Tannat-Cabernet-Gran-Guarda-H.-STAGNARI-750-ml-en-Tienda-Inglesa", stockProducto:35, inicialStock:1},
    {codigoProducto:"#a0002", nombreProducto:"Vino Tinto Malbec Cafayate Reserve BODEGA ETCHART 750 ml", descriProducto:"Color rojo violáceo intenso con reflejos púrpuras.Olfato aromático,con notas de ciruela madura, uvas pasas, especias dulces y tostadas de su crianza en roble. Ideal para acompañar carnes vacunas o de cerdo.Temperatura de servicio 15-17°C.", precioProducto:435, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P398380-2.jpg?20210504132800,Vino-Tinto-Malbec-Cafayate-Reserve-BODEGA-ETCHART-750-ml-en-Tienda-Inglesa", stockProducto:33, inicialStock:1},
    {codigoProducto:"#a0003", nombreProducto:"Vino Tinto JUAN CARRAU Cabernet Sauvignon 750 ml", descriProducto:"Frutos rojos en armonía con notas herbáceas son evidentes en el aroma.Seco y redondo, muy agradable al paladar. Ideal para acompañar todo tipo de carnes, pastas y fiambres.Se recomienda en el verano servir fresco a 18º C.", precioProducto:436, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P004596-1.jpg?20210701173132,Vino-Tinto-JUAN-CARRAU-Cabernet-Sauvignon-750-ml-en-Tienda-Inglesa", stockProducto:25, inicialStock:1},
    {codigoProducto:"#a0004", nombreProducto:"Vino Tinto TRAPICHE Reserva Malbec 750 ml", descriProducto:"De color violáceo, ofrece a la nariz pain grillé, mineral, ciruela y guindas con un toque de pimiento negro. Al paladar es suave, redondo, maduro y con sabores a bayas. El final es especiado, con amplios taninos masticables.", precioProducto:540, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P094600-1.jpg?20210701173132,Vino-Tinto-TRAPICHE-Reserva-Malbec-750-ml-en-Tienda-Inglesa", stockProducto:56, inicialStock:1},
    {codigoProducto:"#a0005", nombreProducto:"Vino Tinto CONCHA Y TORO Cabernet Sauvignon Reservado 750 ml", descriProducto:"Color Rojo rubí, con notas violáceas. Aroma Aroma frutal con notas a ciruelas rojas, chocolate y un leve toque vegetal.", precioProducto:540, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P094600-1.jpg?20210701173132,Vino-Tinto-TRAPICHE-Reserva-Malbec-750-ml-en-Tienda-Inglesa", stockProducto:840, inicialStock:1},
    {codigoProducto:"#a0006", nombreProducto:"Vino MASSIMO DEICAS Tinto Tannat 750 ml", descriProducto:"Color, es un vino que mantiene color profundo a pesar del paso del tiempo. Nariz: es donde su complejidad alcanza su plenitud, frutos negros ,casis , regaliz , higos en su tinta, se expresan sobre un fondo de madera fina y elegante. Boca potente con intensidad en taninos muy maduros que aportan estrucura y describen un gran cuerpo, una acidez viva asegura una noble y lento envejecimiento para este majestuoso tannat uruguayo.", precioProducto:3353, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P217435-1.jpg?20181119182803,Vino-MASSIMO-DEICAS-Tinto-Tannat-750-ml-en-Tienda-Inglesa", stockProducto:53, inicialStock:1},
    {codigoProducto:"#a0007", nombreProducto:"Vino Tinto Dinastia H. STAGNARI 750ml", descriProducto:"sin descripcion de momento.", precioProducto:1890, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P140991-1.jpg?20190729125546,Vino-Tinto-Dinastia-H.-STAGNARI-750ml-en-Tienda-Inglesa", stockProducto:34, inicialStock:1},
    {codigoProducto:"#a0008", nombreProducto:"Vino Tannat Marselan Garra H. STAGNARI", descriProducto:"sin descripcion de momento.", precioProducto:565, urlimgProducto:"https://prod-resize.tiendainglesa.com.uy/images/large/P496743-2.jpg?20220505144931,Vino-Tannat-Marselan-Garra-H.-STAGNARI-en-Tienda-Inglesa", stockProducto:87, inicialStock:1},
  ];
  const obj_producto = bd_items_stock.find((producto) => producto.codigoProducto === codigoProducto);
  //const obj_producto = bd_items_stock.filter(producto=>producto.codigoProducto === codigoProducto); PORQUE NO ANDA CON FILTER? PORQUEEEEEEEE?
  const [contador, setContador] = useState(obj_producto.inicialStock);  //estamos desestructurando la funcion de retorno del useState. nos devuelve valor (que es contador) y una funcion para setearlo.
  
  useEffect(()=>  //creo un useEffect para cuando se modifica el contador, anulare la operativilidad de los buttons incrementales y decrementales.
  {
    if(contador==1)
    {
      setOperativeMenos(true);
      setColorMenos("grey");
    }else 
    {
      setOperativeMenos(false);
      setColorMenos("#70002a");
    }

    if(contador == obj_producto.stockProducto)
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
    console.log(`Agregado ${contador} items de: ${obj_producto.nombreProducto}. total compra: $${contador*obj_producto.precioProducto} pesos uruguayos.`); //funcion que avisa se agrego a carrito x cantidad de un item, hay que agregar que item es.
  }


  return (
    <div class="productoItem">
        <img src={obj_producto.urlimgProducto} alt="" />
        <h4>{obj_producto.nombreProducto}</h4>
        <p>{"$" + obj_producto.precioProducto}</p>

        <div>
          <button style={{backgroundColor: color_menos}} disabled={opeartive_menos} onClick={disminuirCounter}>-</button>
          <input type="text" value={contador} disabled/>
          <button style={{backgroundColor: color_mas}}  disabled={opeartive_mas} onClick={incrementarCounter}>+</button>
        </div>
        
        <button onClick={agregarCarrito}>agregar a carrito</button>
    </div>
  );
}

export default CartWidget;
