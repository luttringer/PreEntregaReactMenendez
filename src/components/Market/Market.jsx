import ShopCategorias from "../ShopCategorias/ShopCategorias";
import ShopCont from "../ShopCont/ShopCont";
import { useParams } from "react-router-dom";

const Market = () => 
{
  const { idShowCategory } = useParams();
  
  return (
    <div className="shopContenedorGlobal">
      <ShopCategorias></ShopCategorias>
      <ShopCont tipoProductos={idShowCategory}></ShopCont>
    </div>
  );
}

export default Market;
