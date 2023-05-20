//import "../CartWidget/CartWidget.jsx";
import {useState, useEffect} from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import './ShopCont.css';
import {getProductos} from '../../asyncmock';
import {getProductosCategoria} from '../../asyncmock';
import { getProductosMenor } from '../../asyncmock';
import { getProductosMayor } from '../../asyncmock';


const ShopCont = (props) => {
  const {tipoProductos} = props;
  const [productos, setProductos] = useState([]);
  const [showCartWidget, setShowCartWidget] = useState(false);
  const categorias_productos = [":Cabernet", ":CabernetSauvignon",":Malbec", ":Tannat"];

  if(tipoProductos==":completos" || tipoProductos==":simples")
  {
    getProductos()
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))
  }else 
  {
    if(tipoProductos==":menor")
    {
      getProductosMenor()
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))
    }else if(tipoProductos==":mayor")
    {
      getProductosMayor()
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))
    }else
    {
      getProductosCategoria(parseInt(categorias_productos.indexOf(tipoProductos))+1)
        .then(res=>setProductos(res))
        .catch(error=>console.error(error))
    }
    
  }
  
  //creo un useEffect para que dado x tiempo habilite en true mi hook?
  useEffect(()=>
  {
    setTimeout(() => {setShowCartWidget(true);}, 300);
  }, []);

  return (
    <div class="ShopContenedor">
      {  
        (showCartWidget) && 
        (
          productos.map(producto => (
            <CartWidget codigoProducto={producto.codigoProducto} bd_productos={productos} tipo_producto={tipoProductos} />
          ))
        )
      }
    </div>
  );
}

export default ShopCont;
