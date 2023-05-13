//import "../CartWidget/CartWidget.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import './ShopCont.css';

const ShopCont = () => {
  return (
    <div class="ShopContenedor">
      <CartWidget codigoProducto="#a0001"/>
      <CartWidget codigoProducto="#a0002"/>
      <CartWidget codigoProducto="#a0003"/>
      <CartWidget codigoProducto="#a0004"/>
      <CartWidget codigoProducto="#a0005"/>
      <CartWidget codigoProducto="#a0006"/>
      <CartWidget codigoProducto="#a0007"/>
      <CartWidget codigoProducto="#a0008"/>
    </div>
  );
}

export default ShopCont;
