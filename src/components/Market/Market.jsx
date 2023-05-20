import ShopCategorias from "../ShopCategorias/ShopCategorias";
import ShopCont from "../ShopCont/ShopCont";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Market = () => 
{
  const { idShowCategory } = useParams();
  
  return (
    <div class="shopContenedorGlobal">
      <ShopCategorias></ShopCategorias>
      <ShopCont tipoProductos={idShowCategory}></ShopCont>
    </div>
  );
}

export default Market;
