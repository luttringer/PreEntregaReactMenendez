import ShopCategorias from "../ShopCategorias/ShopCategorias";
import ShopCont from "../ShopCont/ShopCont";

const Market = () => {
  return (
    <div class="shopContenedorGlobal">
      <ShopCategorias></ShopCategorias>
      <ShopCont tipoProductos="completos"></ShopCont>
    </div>
  );
}

export default Market;
