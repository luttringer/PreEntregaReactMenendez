//import "../CartWidget/CartWidget.jsx";
import {useState, useEffect} from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import './ShopCont.css';
import {getProductos} from '../../asyncmock';


const ShopCont = (props) => {
  const {tipoProductos} = props;
  const [productos, setProductos] = useState([]);
  const [showCartWidget, setShowCartWidget] = useState(false);

  getProductos()
    .then(res=>setProductos(res))
    .catch(error=>console.error(error))

  //creo un useEffect para que dado x tiempo habilite en true mi hook?
  useEffect(()=>
  {
    setTimeout(() => {setShowCartWidget(true)}, 100);
  }, []);

  return (
    <div class="ShopContenedor">
      {/*cuando el use effect este en true es que se envian los productos*/}
      {showCartWidget && <CartWidget codigoProducto="#a0001" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0002" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0003" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0004" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0005" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0006" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0007" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="#a0008" bd_productos={productos} tipo_producto={tipoProductos} />}
    </div>
  );
}

export default ShopCont;
