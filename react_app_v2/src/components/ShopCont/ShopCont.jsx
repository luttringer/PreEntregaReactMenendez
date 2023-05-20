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
      {showCartWidget && <CartWidget codigoProducto="14" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="156" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="436" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="232" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="32" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="5421" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="222" bd_productos={productos} tipo_producto={tipoProductos} />}
      {showCartWidget && <CartWidget codigoProducto="666" bd_productos={productos} tipo_producto={tipoProductos} />}
    </div>
  );
}

export default ShopCont;
